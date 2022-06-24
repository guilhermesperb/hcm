const environment = () => {
  return {
    PORT: 3001,
    DB_HOST: 'hcm-postgres',
    DB_NAME: 'hcm',
    DB_PORT: 5432,
    DB_USER: 'postgres',
    DB_PASSWORD: 'postgres',
    LEGACY_CLOCKING_URL: ''
  }
}

export default environment();