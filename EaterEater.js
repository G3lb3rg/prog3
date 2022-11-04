


class EaterEater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 20;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(char) {
        this.getNewCoordinates();
        let result = [];
        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char) {
                    result.push(this.directions[i]);
                }
            }
        }
        return result;

    }

    eat() {
        let found = this.chooseCell(2);
        let exact = random(found);
        if (exact) {
            this.energy++;
            let x = exact[0];
            let y = exact[1];
            for (var i = 0; i < eaterEaterArr.length; i++) {
                if (eaterEaterArr[i].x == x && eaterEaterArr[i].y == y) {
                    eaterEaterArr.splice(i, 1);
                }
            }
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
            if (this.energy > 30) {
                this.move()
            }
        }
        else {
            this.move();
        }


    }
    eat() {
        let found = this.chooseCell(4);
        let exact = random(found);
        if (exact) {
            this.energy++;
            let x = exact[0];
            let y = exact[1];
            for (var i = 0; i < antArr.length; i++) {
                if (antArr[i].x == x && antArr[i].y == y) {
                    antArr.splice(i, 1);
                }
            }
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
            if (this.energy > 30) {
                this.move()
            }
        }
        else {
            this.move();
        }


    }



    move() {
        let found = this.chooseCell(0);
        console.log(found)
        let exact = random(found);
        if (exact) {
            let x = exact[0];
            let y = exact[1];
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
            this.energy--

        }
        else {
            this.energy--

        }
    }

    move() {
        let found = this.chooseCell(1);
        console.log(found)
        let exact = random(found);
        if (exact) {
            let x = exact[0];
            let y = exact[1];
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
            this.energy--

        }
        else {
            this.energy--

        }
    }

}