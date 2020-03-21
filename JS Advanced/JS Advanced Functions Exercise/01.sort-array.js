function solve(data, criteria){
        const map = {
            asc: (a,b) => a - b,
            desc: (a, b) => b - a
        }
        return [...data].sort(map[criteria]);
    }
solve();