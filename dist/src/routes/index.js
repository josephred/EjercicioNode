"use strict";
const { Router } = require('express');
const router = Router();
function patente(tipo, valor) {
    let n = 999;
    let Col = '';
    let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // let abc = "ABC";
    let patentes = [];
    let index = 1;
    for (let i = 0; i < abc.length; i++) {
        for (let j = 0; j < abc.length; j++) {
            for (let k = 0; k < abc.length; k++) {
                for (let l = 0; l <= abc.length; l++) {
                    for (let m = 0; m <= n; m++) {
                        let posfijo = '';
                        switch (m.toString().length) {
                            case 1:
                                posfijo = '00' + m;
                                break;
                            case 2:
                                posfijo = '0' + m;
                                break;
                            case 3:
                                posfijo = '' + m;
                                break;
                        }
                        Col = abc[i] + abc[j] + abc[k] + abc[l] + posfijo;
                        // patentes.push({ id: index++ , patente: Col });
                        if (tipo == 'patente') {
                            if (Col == valor) {
                                return index;
                            }
                        }
                        else {
                            if (index == valor) {
                                return Col;
                            }
                        }
                        index++;
                    }
                }
            }
        }
    }
    return 'No Existe';
}
// 1 AAAA000
// 2 AAAA001
// 3 AAAA002
// router.get('/patente', (req, res) => {    
//     res.json({ patentes: patentes });
// });
router.get('/patente/:id', (req, res) => {
    const par = req.params;
    res.json({ patente: patente('id', par.id) });
});
router.get('/idpatente/:patente', (req, res) => {
    const par = req.params;
    res.json({ id_patente: patente('patente', par.patente) });
});
module.exports = router;
//# sourceMappingURL=index.js.map