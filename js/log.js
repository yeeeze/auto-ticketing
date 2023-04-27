const logArea = document.getElementById('logArea');

function addLog(msg) {
    logArea.value = logArea.value + "[INFO] - " + `${msg}\n`;
}

function addErrorLog(msg) {
    logArea.value = logArea.value + "[ERROR] - " + `${msg}\n`;
}

module.exports = {
    addLog: addLog,
    addErrorLog: addErrorLog
}