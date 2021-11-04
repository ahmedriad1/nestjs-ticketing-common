import { Listener } from '@nestjs-plugins/nestjs-nats-streaming-transport';

interface NatsListenerOptions {
  clusterId: string;
  clientId: string;
  queueGroupName: string;
  url: string;
  manualAckMode: boolean;
  deliverAllAvailable: boolean;
}

type PartialExcept<T, K extends keyof T> = Partial<Omit<T, K>> & Pick<T, K>;

export class NatsListenerConfig {
  private readonly defaultOptions: NatsListenerOptions = {
    clusterId: process.env.NATS_CLUSTER_ID,
    clientId: process.env.NATS_CLIENT_ID,
    url: process.env.NATS_URL,
    queueGroupName: null,
    manualAckMode: true,
    deliverAllAvailable: true,
  };

  constructor(
    private readonly options: PartialExcept<NatsListenerOptions, 'queueGroupName'>,
  ) {
    this.options = { ...this.defaultOptions, ...this.options };
    this.validateVitalOptions();
  }

  private validateVitalOptions() {
    if (!this.options.clientId || !this.options.clusterId || !this.options.url)
      throw new Error('NATS_URL, NATS_CLUSTER_ID and NATS_CLIENT_ID must be defined');
  }

  toJSON() {
    return {
      strategy: new Listener(
        this.options.clusterId,
        this.options.clientId,
        this.options.queueGroupName,
        {
          url: this.options.url,
        },
        {
          durableName: this.options.queueGroupName,
          manualAckMode: this.options.manualAckMode,
          deliverAllAvailable: this.options.deliverAllAvailable,
        },
      ),
    };
  }
}
