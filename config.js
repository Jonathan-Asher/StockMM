
export default {
  port: 3030,
  host: '127.0.0.1',
  db: 'test',
  enableLogs: true,
  apiKey: 'demo',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  },
  get dbUrl() {
    return `mongodb://${this.host}:27017/${this.db}`;
  },
  log(action = 'No Action', text) {
    if(this.enableLogs) {
      console.log(`API Log\n${action.toUpperCase()}:`, text);
      console.log('*********');
    }
  }
};