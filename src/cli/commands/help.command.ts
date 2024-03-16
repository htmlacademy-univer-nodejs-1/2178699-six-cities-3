import chalk from 'chalk';
import { Command } from './command.interface.js';

export class HelpCommand implements Command {
  public getName(): string {
    return '--help';
  }

  public async execute(..._parameters: string[]): Promise<void> {
    console.info(`
    Программа для подготовки данных для REST API сервера.

    Пример: cli.js --<${chalk.blueBright('command')}> [${chalk.blue('--arguments')}]

    Команды:

    ${chalk.blue('--version')}:                   ${chalk.greenBright('# выводит номер версии')}
    ${chalk.blue('--help')}:                      ${chalk.greenBright('# печатает этот текст')}
    ${chalk.blue('--import <path>')}:             ${chalk.greenBright('# импортирует данные из TSV')}
    ${chalk.blue('--generate')} <n> <path> <url>  ${chalk.greenBright('# генерирует произвольное количество тестовых данных')}
    `);
  }
}
