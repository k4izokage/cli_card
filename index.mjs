#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";

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