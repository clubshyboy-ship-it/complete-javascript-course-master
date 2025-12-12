/** @format */
"use strict";

/* 好习惯 1：Magic Numbers（魔术数字）要常量化。 */
const difficultyScale = 20;
const maxScore = 20; // 建议这里改成 20 或者你需要的分数，之前是 8

/* 好习惯 2：状态变量 (State Variable)。 */
let secretNumber = Math.trunc(Math.random() * difficultyScale) + 1;
let thisScore = maxScore; // 这里也要用变量，不要写死
let highscore = 0;
let count = 0;

// 监听 Check 按钮
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    console.log(guess, typeof guess);

    // 🛑 逻辑分支 1：没有输入内容
    if (!guess) {
        document.querySelector(".message").textContent = "🚫 No Number!";
        return;
    }

    // 🛑 逻辑分支 2：超出范围
    if (guess < 1 || guess > difficultyScale) {
        document.querySelector(".message").textContent = `🚫 Between 1 and ${difficultyScale}!`;
        return;
    }

    // ✅ 逻辑分支 3：猜对了 (Win)
    if (guess === secretNumber) {
        document.querySelector(".message").textContent = "🎉 Correct Number!";
        document.querySelector(".number").textContent = secretNumber;

        // CSS 操作
        document.querySelector("body").style.backgroundColor = "#294436";
        document.querySelector(".number").style.width = "30rem";

        // 更新最高分
        if (thisScore > highscore) {
            highscore = thisScore;
            document.querySelector(".highscore").textContent = highscore;
        }

        // ❎ 逻辑分支 4：猜错了 (Wrong)
    } else if (guess !== secretNumber) {
        if (thisScore > 1) {
            // 还有命，扣分
            document.querySelector(".message").textContent =
                guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
            thisScore--;
            count++;
            document.querySelector(".times").textContent = count;
            document.querySelector(".score").textContent = thisScore;
        } else {
            // 💀 没命了 (Game Over)
            document.querySelector(".message").textContent = "💥 You lost the game!";
            document.querySelector(".score").textContent = 0;
            document.querySelector("body").style.backgroundColor = "#6d1d1c";
        }
    }
});

// ⚠️监听更多按键并映射点击按钮
document.addEventListener("keydown", function (e) {
    // 💡 调试技巧：把log放在 if 外面，这样无论按错按对都能看到！
    console.log("当前按键 code:", e.code);

    if ( e.code === "Enter") {
        document.querySelector(".check").click();
        console.log("✅ 成功触发点击！");
    }
});
document.addEventListener("keydown", function (e) {
    if (e.code === "Space") {
        e.preventDefault(); // 建议加上，防止按空格时网页会自动向下滚动
        document.querySelector(".again").click();
        console.log("✅ 重新开始被触发！");
    }
});

// 🔄 修复的部分：Again 按钮重置逻辑
document.querySelector(".again").addEventListener("click", function () {
    // 1. 重置分数变量 (修复点：把 life 改成 maxScore)
    thisScore = maxScore;

    // 2. 重新生成神秘数字
    secretNumber = Math.trunc(Math.random() * difficultyScale) + 1;

    // 3. 恢复界面文字
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = thisScore;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";

    // 4. 恢复 CSS 样式
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});