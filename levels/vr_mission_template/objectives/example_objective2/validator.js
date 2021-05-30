const {PythonShell} = require('python-shell');
let options = {
  mode: 'text',
  pythonOptions: ['-u'], 
  pythonPath: 'C:/Windows/py.exe',
  scriptPath: 'd:/dev/twilio-ext/twilioquest-extension/levels/vr_mission_template/objectives/example_objective2', 
  args: [] 
};
let pyshell = new PythonShell('numpytest.py', options);
function getPromise() {
  return new Promise(function (resolve, reject) {
    // @ts-ignore
    PythonShell.run('numpytest.py', options, function (err, results) {
      if (err) {
        reject(err)
      } else {
        resolve(results)
      }
    });

  });
}

module.exports = async helper =>{
  getPromise().then((value)=>{
    if(value = ['numpy']){
      helper.success("Congragulations, you have completed the Trial of Installation: NumPy & TensorFlow")
    }
  })
}