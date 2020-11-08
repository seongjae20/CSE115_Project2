## November 2, 2020 Updates
Due to several issues with python-2.7, a few changes had to be made in order to use urllib3 python module rather than urllib.

## How to Run
1. Use python2 @ version 2.7.10
1. Download pip `curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py`
1. Install pip (using the correct python-2.7.10) `python get-pip.py`i
1. Install bottle `pip install bottle`
1. Install requests (this command installs urllib3) `pip install requests`
1. Run the server `python server.py`
