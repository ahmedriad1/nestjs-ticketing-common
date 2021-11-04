interface NatsPublisherOptions {
  clusterId: string;
  clientId: string;
  url: string;
}

export class NatsPublisherConfig {
  private readonly defaultOptions: NatsPublisherOptions = {
    clusterId: process.env.NATS_CLUSTER_ID,
    clientId: process.env.NATS_CLIENT_ID,
    url: process.env.NATS_URL,
  };

  constructor(private readonly options?: Partial<NatsPublisherOptions>) {
    this.options = { ...this.defaultOptions, ...this.options };
    this.validateVitalOptions();
  }

  private validateVitalOptions() {
    if (!this.options.clientId || !this.options.clusterId || !this.options.url)
      throw new Error('NATS_URL, NATS_CLUSTER_ID and NATS_CLIENT_ID must be defined');
  }

  toJSON() {
    return {
      clientId: this.options.clientId,
      clusterId: this.options.clusterId,
      connectOptions: {
        url: this.options.url,
      },
    };
  }
}
