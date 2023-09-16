# DChess

Play your favourite game, but now on the Etheruem blockchain. This application is made with the help of `Ether.js`, `Metamask` and `React.js`.

## Solidity Contract

[DChess](./contracts/Dchess.sol) is the main contract that implements the chess application.

Each game on the contract is stored as a struct `Game`, which only keeps track of three essential items:

- `White`: The player who moved first.
- `Moves`: Each move is a 16 bit unsigned integer, where the least significant 6 bits represents the position on the chessboard from which the move was made, and the next 6 bits represent the position to which the move was made. This allows us to store a move in the game in just `12` bits (rounded up to `16` during implementation) which is the most precise and memory efficient manner of tracking all the moves to reconstruct the game.
- `Result`: Stores the result of the game as an enum.

The contract provides support for both the cases: against other players or againt a computer. All of the functions in the [DChess contract](./contracts/Dchess.sol) have been documented, and are suplemented with `require` statements to ensure that the function is being called from authorized accounts only.

The contract also expects a fee of `0.05 ethers` per game to demonstrate the option of making the same a paid service.

## Development Setup and Running the App

We are using `hardhat` to setup a local test network on which we would be running the application.

1. Compile the contracts (generate their types, ABI, and bytecode) by running `npx hardhat compile`.
2. Start a local test Ethereum network by running `npx hardhat node`.
3. In a new terminal run `npx hardhat run scripts/HelloWorld.ts --network localhost` to deploy the smart contract to the test blockchain.

## Key features of the Application

### Client

### Developer

- Developed in 100% TypeScript to ensure type-safety.
- Accompanied with testing in the [test](./test/) directory. You can ensure that the contracts are working correcting by running the `npx hardhat test` command in the root of the project. We are using `chai` as the test runner.
