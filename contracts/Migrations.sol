// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

contract Migrations {
  address public owner;
  uint public last_completed_migration;

  modifier restricted() {
    require(msg.sender == owner, "Error!");
    _;
  }

  constructor() public {
    owner = msg.sender;
  }

  function setCompleted(uint completed) public restricted {
    last_completed_migration = completed;
  }
}
