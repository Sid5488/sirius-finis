import { execSync } from 'child_process';
import { config } from 'dotenv';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config({ path: resolve(__dirname, '.env.test') });

try {
  console.log('Aplicando migrações...');
  execSync('npx prisma migrate deploy', { stdio: 'inherit' });

  console.log('Gerando o cliente Prisma...');
  execSync('npx prisma generate', { stdio: 'inherit' });

  console.log('Banco de dados e schema de teste configurados.');
} catch (error) {
  console.error('Erro ao configurar o banco de dados:', error);
  process.exit(1);
}
