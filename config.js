const MINE_RATE = 1000
const INITIAL_DIFFICULTY = 3;

const GENESIS_DATA = {
    timestamp: '1',
    lastHash: '------',
    hash: 'hash-one',
    nonce: 0,
    difficulty: INITIAL_DIFFICULTY,
    data: ["GENESIS_BLOCK"]
}

const STARTING_BALANCE = 1000;

const REWARD_INPUT = { address: '*authorized-reward*' };

const MINING_REWARD = 10;

module.exports = { GENESIS_DATA, MINE_RATE, STARTING_BALANCE, REWARD_INPUT, MINING_REWARD };