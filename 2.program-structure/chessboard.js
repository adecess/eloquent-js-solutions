const chessboard = (size = 8) => {
    let board = '';
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            if (!((i + j) % 2)) {
                board += ' ';
            } else {
                board += '#';
            }
        };
        if (i < size - 1) board += '\n';
    };
    console.log(board);
};

chessboard();