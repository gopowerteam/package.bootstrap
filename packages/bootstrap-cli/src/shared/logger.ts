import chalk from "chalk";
import gradient from "gradient-string";
import ora from "ora";

const gradientColors = [
  `#31a4ff`,
  `#48afff`,
  `#62baff`,
  `#7ac4ff`,
  `#a6dfff`,
  `#c6ebff`,
  `#afa0ff`,
  `#9b88ff`,
  `#a564ff`,
  `#974cff`,
  `#832aff`,
];

export const logger = {
  info(string: string) {
    console.log(gradient("#9CECFB", "#65C7F7", "#0052D4")(string));
    console.log("");
  },
  error(string: string) {
    console.log(`${chalk.bold.red("ERROR:", string)}`);
    console.log("");
    // console.log("");
  },
  success(string: string) {
    console.log(`${chalk.bgGreen("SUCCESS")}: ${string}`);
    console.log("");
  },
};

export function clearScreen() {
  process.stdout.write(
    process.platform === "win32" ? "\x1Bc" : "\x1B[2J\x1B[3J\x1B[H"
  );
}

const referenceGradient = [
  ...gradientColors,
  // draw the reverse of the gradient without
  // accidentally mutating the gradient (ugh, reverse())
  ...[...gradientColors].reverse(),
  ...gradientColors,
];

function getGradientAnimFrames() {
  const frames = [];
  for (let start = 0; start < gradientColors.length * 2; start++) {
    const end = start + gradientColors.length - 1;
    frames.push(
      referenceGradient
        .slice(start, end)
        .map((g) => {
          return chalk.bgHex(g)(" ");
        })
        .join("")
    );
  }
  return frames;
}

function getIntroAnimFrames() {
  const frames = [];
  for (let end = 1; end <= gradientColors.length; end++) {
    const leadingSpacesArr = Array.from(
      new Array(Math.abs(gradientColors.length - end - 1)),
      () => " "
    );
    const gradientArr = gradientColors
      .slice(0, end)
      .map((g) => chalk.bgHex(g)(" "));
    frames.push([...leadingSpacesArr, ...gradientArr].join(""));
  }
  return frames;
}

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export async function showLoading(text: string) {
  const frames = getIntroAnimFrames();
  const loading = ora({
    spinner: {
      interval: 30,
      frames,
    },
    text: `▶ ${text}`,
  });

  loading.start();
  await sleep((frames.length - 1) * loading.interval);
  loading.stop();

  const spinner = ora({
    spinner: {
      interval: 80,
      frames: getGradientAnimFrames(),
    },
    text: `▶ ${text}`,
  }).start();

  return spinner;
}
