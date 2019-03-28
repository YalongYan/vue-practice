const APIMapping = {
    project1: {
      test: 'http://123.com',
      local: 'http://abc.com'
    }
  }
const currentEnvMapping = {
    '127.0.0.1': 'test',
    'localhost': 'local',
}
export { currentEnvMapping, APIMapping }
