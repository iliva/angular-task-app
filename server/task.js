var express = require('express'),
    router = express.Router();

var tasks = [
    {name: 'Task1', description: 'TaskDescription1', active: true},
    {name: 'Task2', description: 'TaskDescription2', active: true},
    {name: 'Task3', description: 'TaskDescription3', active: false},
    {name: 'Task4', description: 'TaskDescription4', active: true}
];

router.get('/', function (req, res) {
    res.json(tasks)
});

router.get('/:id', function (req, res) {
    res.json(tasks[req.params.id]);
});

router.put('/:id', function (req, res) {
    tasks[req.params.id] = req.body;
    res.send();
});

router.post('/', function (req, res) {
    tasks.push(req.body);
	res.json(tasks);
});
router.post('/remove/:id', function (req, res) {
	tasks.splice(req.params.id, 1);
    res.json(tasks);
});

module.exports = router;