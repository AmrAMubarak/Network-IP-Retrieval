# Network-IP-Retrieval

This Node.js script retrieves your device's private IP address, subnet mask, and calculates the network address

Requirements:

Node.js and npm (or yarn) installed on your system.
Installation:

Clone or download this repository.
Navigate to the project directory in your terminal.
Run npm install (or yarn install) to install any required dependencies.
Usage:

Run the script using node index.js (assuming the main script is named index.js).
The script will output your private IP address, subnet mask in binary format, and the calculated network address.
Code Breakdown:

getPrivateIp Function:

Retrieves network interfaces using os.networkInterfaces().
Filters for non-loopback and IPv4 interfaces.
Returns the first matching interface's address and subnet mask.
toBinary Function:

Takes an IP address or subnet mask as input.
Converts each octet (decimal value) to its binary representation.
Returns an array of binary strings.
result Function:

Takes two binary arrays (address and subnet mask) as input.
Performs bitwise AND operation on corresponding octets using a loop.
Returns a new array containing the network address in binary.
Script Execution:

Calls getPrivateIp to get the private IP and subnet mask.
Converts both values to binary using toBinary.
Calculates the network address using result and prints it in dotted decimal format.
Disclaimer:

This script retrieves your private IP address, which is considered sensitive information. Be cautious about running it on publicly accessible devices or sharing the output with untrusted parties.
