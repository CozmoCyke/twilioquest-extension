import subprocess
import sys

reqs = subprocess.check_output([sys.executable, '-m', 'pip', 'freeze'])
installed_packages = [r.decode().split('==')[0] for r in reqs.split()];
if(("numpy" in installed_packages) and ("tensorflow" in installed_packages)):
    print("numpy");
else:
    print("nonumpy");
