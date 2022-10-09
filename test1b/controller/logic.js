// const { platform } = require('os');
const { exec } = require('child_process');
const processIds = {};
const browserName = "";

const startBrowser= async(req, res)=>
{   
    console.log(req);
    let browser = req.query.browser;
    let url = req.query.url;
    if (url === undefined)
    {
      return res.status(400).send("Provide URL");
    }
    let command = "";
    if (process.platform === 'linux')
    {
        if (browser == 'chrome')
        {
            command = `google-chrome --no-sandbox ${url}`;
        } else
        {  
            //Taking firefox as a default browser
            command = `firefox -new-tab ${url}`;
        }
    }
    processIds[browserName] = exec(command).pid;
    console.log(`exec ${command}`)
    console.log(processIds[browserName]);
    res.status(200).send('Success');
}

const closeBrowser= async(req,res)=>{
    let browser = req.body.browser;
    const killCommand = `pkill ${browser}`;
    exec(killCommand);
    res.status(200).send('Success');
}
const clearHistory=(req,res)=>{
    let browser = req.body.browser;
    const killCommand = `pkill ${browser}`;
    exec(killCommand);
    res.status(200).send('Success');
}


module.exports = { startBrowser , closeBrowser,clearHistory}