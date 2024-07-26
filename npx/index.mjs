#!/usr/bin/env node

"use strict";

import boxen from "boxen";
import chalk from "chalk";
import clear from "clear";

clear();

const boxenOptions = {
    margin: 1,
    padding: 1,
    width: 55,
    float: 'center',
    textAlignment: "left",
    title: "k4izokage's business card",
    titleAlignment: "center",
    borderStyle: "single",
    borderColor: "green",
};

const intro = `${chalk.bold("Hi, I'm")} ${chalk.yellow.italic("k4izokage")}, ${chalk.bold("a developer from Vietnam.\n\n")} ${chalk.italic("Let's connect for exciting possibilities.\n Open to anything under the sun, I will try my best to get back to you!\n\n")}`;

const links = [
    {
        name: chalk.white.bold("Website:"),
        url: chalk.green("https://k4izokage.vercel.app/")
    },
    {
        name: chalk.white.bold("GitHub:"),
        url: chalk.gray("https://github.com/") + chalk.white("k4izokage"),
    },
    {
        name: chalk.white.bold("X (Twitter):"),
        url: chalk.gray("https://x.com/") + chalk.hex("#1C9BE9")("k4izokage"),
    },
    {
        name: chalk.white.bold("Reddit:"),
        url: chalk.gray("https://reddit.com/user/") + chalk.yellow("k4izokage"),
    },
    {
        name: chalk.white.bold("Youtube:"),
        url: chalk.gray("https://youtube.com/") + chalk.red("@k4izokage"),
    },
    {
        name: chalk.white.bold("LinkedIn:"),
        url: chalk.gray("https://linkedin.com/in/") + chalk.hex("#0A63BC")("tran-tien-dat"),
    },
];

const tip = [
    `\n\n\n(Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above)`
]

const linkList = links.map((link) => `${link.name} ${link.url}`).join("\n");

console.log(boxen(intro + linkList + tip, boxenOptions));