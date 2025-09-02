const express = require('express');
const app = express();
const PORT = 3000;

function calcsum(n) {
    let ans = 0;
    for(let i = 1; i <= n; i++) {
        ans += i;
    }
    return ans;
}

function sum(a, b) {
    return a + b;
}

app.get('/calc-sum', function(req, res) {
    const n = Number(req.query.n);
    const ans = calcsum(n);
    console.log(ans);
    res.send(ans.toString());
});

app.get('/sum', function(req, res) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const ans = sum(a, b);
    console.log(ans);
    res.json({
        result: ans
    });
})

app.listen(PORT);