function calculateCards() {
    const currentLevel = parseInt(document.getElementById("currentLevel").value);
    const targetLevel = parseInt(document.getElementById("targetLevel").value);

    let totalSetsRequired = 0;
    let standardSets = 0;
    let deluxeSets = 0;

    for (let level = currentLevel + 1; level <= targetLevel; level++) {
        if (level <= 10) {
            totalSetsRequired += 1;
        } else if (level <= 20) {
            totalSetsRequired += 2;
        } else if (level <= 30) {
            totalSetsRequired += 3;
        } else if (level <= 40) {
            totalSetsRequired += 4;
        } else {
            totalSetsRequired += Math.ceil((level - 40) / 10) + 4;
        }

        if (level <= 100) {
            standardSets = totalSetsRequired;
            deluxeSets = 0;
        } else {
            deluxeSets = totalSetsRequired - standardSets;
        }
    }

    const resultElement = document.getElementById("result");
    if (standardSets > 0 && deluxeSets > 0) {
        resultElement.innerHTML = `升级到${targetLevel}级需要下单<span class="standard">${standardSets}套标准版</span>和<span class="deluxe">${deluxeSets}套豪华版</span>卡牌。`;
    } else if (standardSets > 0) {
        resultElement.innerHTML = `升级到${targetLevel}级需要下单<span class="standard">${standardSets}套标准版</span>卡牌。`;
    } else {
        resultElement.innerHTML = `升级到${targetLevel}级需要下单<span class="deluxe">${deluxeSets}套豪华版</span>卡牌。`;
    }
}

function createOrder() {
    window.open("https://item.taobao.com/item.htm?spm=a21dvs.23580594.0.0.1d293d0dBdD9cp&ft=t&id=680282721841", "_blank");
}
function openMobileSteamURL() {
    window.open("https://tbm-auth.alicdn.com/8713a9bf85650d60/4253256fe1f06cfe/20230106_d6395def5a0ed446_392937708871_mp4_264_hd_taobao.mp4?auth_key=1691435944-0-0-36a39607bed439f4823d44303994acad&t=215077ea16914332448798046ebc5a&b=video_plus&p=cloudvideo_http_seller_sucai_vod_publish");
}

function openComputerSteamURL() {
    window.open("https://www.bilibili.com/video/BV16m4y1h7CE/");
}
function clearDefaultValue(inputElement) {
    if (inputElement.value === "1") {
        inputElement.value = "";
    }
}

