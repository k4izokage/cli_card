#!/usr/bin/env node

'use strict'

import boxen from "boxen";
import chalk from "chalk";
import inquirer from "inquirer";
import open from "open";
import download from 'download'
import path from 'path';
import ora from 'ora';
import cliSpinners from 'cli-spinners';

// Display card
const intro = `${chalk.bold("Hi, I'm")} ${chalk.yellow.italic("k4izokage")}, ${chalk.bold("a developer from Vietnam.\n\n")} ${chalk.italic("Let's connect for exciting possibilities.\n Open to anything under the sun, I will try my best to get back to you!\n\n")}`;

const links = [
    {
        name: chalk.white.bold("Email:"),
        url: chalk.magenta("kaizokage@duck.com")
    },
    {
        name: chalk.white.bold("Website:"),
        url: chalk.green("https://kaizokage.dev/")
    },
    {name: "",url: ""},
    {
        name: chalk.white.bold("GitHub:"),
        url: chalk.gray("https://github.com/") + chalk.white("k4izokage"),
    },
    {
        name: chalk.white.bold("Telegram:"),
        url: chalk.gray("https://t.me/") + chalk.hex("#0A63BC")("k4izokage"),
    },
    {
        name: chalk.white.bold("X (Twitter):"),
        url: chalk.gray("https://x.com/") + chalk.hex("#1C9BE9")("k4izokage"),
    },
    {
        name: chalk.white.bold("Youtube:"),
        url: chalk.gray("https://youtube.com/") + chalk.red("@k4izokage"),
    },
    {
        name: chalk.white.bold("Reddit:"),
        url: chalk.gray("https://reddit.com/user/") + chalk.yellow("k4izokage"),
    },
];
const linkList = links.map((link) => `${link.name} ${link.url}`).join("\n");

const tip = [
    `\n\n\n(Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above)`
]

const boxenOptions = {
    margin: 1,
    padding: 1,
    width: 55,
    float: 'center',
    textAlignment: "left",
    title: "k4izokage's personal card",
    titleAlignment: "center",
    borderStyle: "single",
    borderColor: "green",
};

console.log(boxen(intro + linkList + tip, boxenOptions));

// Options
const _prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: ` - Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:kaizokage@duck.com")
                        .then(() => {
                            console.log(chalk.blue("\n Done, see you soon at inbox.\n"));
                        })
                        .catch(() => {
                            console.error(
                                chalk.red("\n Something went wrong.\n Try again mailing me at kaizokage@duck.com")
                            );
                        });
                }
            },
            {
                name: ` - Download my ${chalk.magentaBright.bold("Resume")}?`,
                value: () => {
                    const loader = ora({
                        text: ' Downloading Resume',
                        spinner: cliSpinners.material,
                    }).start();
                    const fileUrl = 'https://k4izokage.github.io/k4izokage/misc/resume.pdf';
                    const fileName = path.basename('k4izokage-resume.pdf');
                    const filePath = path.join(process.cwd(), fileName);

                    download(fileUrl, './', { filename: fileName })
                        .then(() => {
                            console.log(chalk.green('\n\n Resume downloaded successfully!'));
                            loader.stop();
                            open(filePath)
                                .then(() => console.log(chalk.blue(" See you soon \n")))
                                .catch(() => console.error(chalk.red(" Error opening the file \n")));
                        })
                        .catch(() => {
                            console.error(chalk.red('\n Error downloading the PDF.\n You can view it at', fileUrl));
                            loader.stop();
                        });
                }
            },
            {
                name: ` - Schedule a ${chalk.redBright.bold("Meeting")}?`,
                value: () => {
                    open('https://calendly.com/k4izokage/30min')
                        .then(() => console.log(chalk.blue("\n See you at the meeting \n")))
                        .catch(() => console.error(chalk.red("\n Something went wrong \n")));
                }
            },
            {
                name: " - Just quit.",
                value: () => {
                    console.log(chalk.blue("\n Bye!\n"));
                }
            }
        ]
    }
];

_prompt(questions).then(answer => answer.action());