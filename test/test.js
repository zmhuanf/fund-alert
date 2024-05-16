/** * 测试数据 * @type {arry} *//*2024-05-16 07:05:43*/
var ishb = false;/*基金或股票信息*/
var fS_name = "富国文体健康股票A";
var fS_code = "001186";/*原费率*/
var fund_sourceRate = "1.50";/*现费率*/
var fund_Rate = "0.15";/*最小申购金额*/
var fund_minsg = "10";/*基金持仓股票代码*/
var stockCodes = ["6019851", "0009750", "6006901", "0023180", "6004261", "0024750", "6009411", "6038961", "0024440", "0022520"];/*基金持仓债券代码*/
var zqCodes = "1136631";/*基金持仓股票代码(新市场号)*/
var stockCodesNew = ["1.601985", "0.000975", "1.600690", "0.002318", "1.600426", "0.002475", "1.600941", "1.603896", "0.002444", "0.002252"];/*基金持仓债券代码（新市场号）*/
var zqCodesNew = "1.113663";/*收益率*//*近一年收益率*/
var syl_1n = "-6.33";/*近6月收益率*/
var syl_6y = "0.37";/*近三月收益率*/
var syl_3y = "8.63";/*近一月收益率*/
var syl_1y = "3.59";/*股票仓位测算图*/
var Data_fundSharesPositions = [[1713196800000, 95.00], [1713283200000, 95.00], [1713369600000, 95.00], [1713456000000, 95.00], [1713715200000, 83.9100], [1713801600000, 83.9100], [1713888000000, 83.9100], [1713974400000, 83.9100], [1714060800000, 83.9100], [1714320000000, 83.9100], [1714406400000, 83.9100], [1714924800000, 83.9100], [1715011200000, 83.9100], [1715097600000, 83.9100], [1715184000000, 83.9100], [1715270400000, 83.9100], [1715529600000, 80.0], [1715616000000, 83.6100]];/*单位净值走势 equityReturn-净值回报 unitMoney-每份派送金*/
var Data_netWorthTrend = [{"x": 1430841600000, "y": 1.0, "equityReturn": 0, "unitMoney": ""}, {
    "x": 1431014400000,
    "y": 1.004,
    "equityReturn": 0,
    "unitMoney": ""
}, {"x": 1431619200000, "y": 1.021, "equityReturn": 0, "unitMoney": ""}, {
    "x": 1432224000000,
    "y": 1.078,
    "equityReturn": 0,
    "unitMoney": ""
}, {"x": 1432828800000, "y": 1.112, "equityReturn": 0, "unitMoney": ""}, {
    "x": 1433433600000,
    "y": 1.203,
    "equityReturn": 0,
    "unitMoney": ""
}, {"x": 1433952000000, "y": 1.188, "equityReturn": 0, "unitMoney": ""}, {
    "x": 1434038400000,
    "y": 1.204,
    "equityReturn": 1.3468,
    "unitMoney": ""
}, {"x": 1434297600000, "y": 1.204, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1434384000000,
    "y": 1.162,
    "equityReturn": -3.4884,
    "unitMoney": ""
}, {"x": 1434470400000, "y": 1.175, "equityReturn": 1.1188, "unitMoney": ""}, {
    "x": 1434556800000,
    "y": 1.144,
    "equityReturn": -2.6383,
    "unitMoney": ""
}, {"x": 1434643200000, "y": 1.087, "equityReturn": -4.9825, "unitMoney": ""}, {
    "x": 1434988800000,
    "y": 1.091,
    "equityReturn": 0.368,
    "unitMoney": ""
}, {"x": 1435075200000, "y": 1.118, "equityReturn": 2.4748, "unitMoney": ""}, {
    "x": 1435161600000,
    "y": 1.073,
    "equityReturn": -4.025,
    "unitMoney": ""
}, {"x": 1435248000000, "y": 1.005, "equityReturn": -6.3374, "unitMoney": ""}, {
    "x": 1435507200000,
    "y": 0.932,
    "equityReturn": -7.2637,
    "unitMoney": ""
}, {"x": 1435593600000, "y": 0.96, "equityReturn": 3.0043, "unitMoney": ""}, {
    "x": 1435680000000,
    "y": 0.911,
    "equityReturn": -5.1042,
    "unitMoney": ""
}, {"x": 1435766400000, "y": 0.846, "equityReturn": -7.135, "unitMoney": ""}, {
    "x": 1435852800000,
    "y": 0.795,
    "equityReturn": -6.0284,
    "unitMoney": ""
}, {"x": 1436112000000, "y": 0.757, "equityReturn": -4.7799, "unitMoney": ""}, {
    "x": 1436198400000,
    "y": 0.715,
    "equityReturn": -5.5482,
    "unitMoney": ""
}, {"x": 1436284800000, "y": 0.711, "equityReturn": -0.5594, "unitMoney": ""}, {
    "x": 1436371200000,
    "y": 0.706,
    "equityReturn": -0.7032,
    "unitMoney": ""
}, {"x": 1436457600000, "y": 0.742, "equityReturn": 5.0992, "unitMoney": ""}, {
    "x": 1436716800000,
    "y": 0.789,
    "equityReturn": 6.3342,
    "unitMoney": ""
}, {"x": 1436803200000, "y": 0.809, "equityReturn": 2.5349, "unitMoney": ""}, {
    "x": 1436889600000,
    "y": 0.762,
    "equityReturn": -5.8096,
    "unitMoney": ""
}, {"x": 1436976000000, "y": 0.789, "equityReturn": 3.5433, "unitMoney": ""}, {
    "x": 1437062400000,
    "y": 0.847,
    "equityReturn": 7.3511,
    "unitMoney": ""
}, {"x": 1437321600000, "y": 0.865, "equityReturn": 2.1251, "unitMoney": ""}, {
    "x": 1437408000000,
    "y": 0.886,
    "equityReturn": 2.4277,
    "unitMoney": ""
}, {"x": 1437494400000, "y": 0.893, "equityReturn": 0.7901, "unitMoney": ""}, {
    "x": 1437580800000,
    "y": 0.927,
    "equityReturn": 3.8074,
    "unitMoney": ""
}, {"x": 1437667200000, "y": 0.895, "equityReturn": -3.452, "unitMoney": ""}, {
    "x": 1437926400000,
    "y": 0.815,
    "equityReturn": -8.9385,
    "unitMoney": ""
}, {"x": 1438012800000, "y": 0.786, "equityReturn": -3.5583, "unitMoney": ""}, {
    "x": 1438099200000,
    "y": 0.827,
    "equityReturn": 5.2163,
    "unitMoney": ""
}, {"x": 1438185600000, "y": 0.79, "equityReturn": -4.474, "unitMoney": ""}, {
    "x": 1438272000000,
    "y": 0.782,
    "equityReturn": -1.0127,
    "unitMoney": ""
}, {"x": 1438531200000, "y": 0.75, "equityReturn": -4.0921, "unitMoney": ""}, {
    "x": 1438617600000,
    "y": 0.798,
    "equityReturn": 6.4,
    "unitMoney": ""
}, {"x": 1438704000000, "y": 0.788, "equityReturn": -1.2531, "unitMoney": ""}, {
    "x": 1438790400000,
    "y": 0.783,
    "equityReturn": -0.6345,
    "unitMoney": ""
}, {"x": 1438876800000, "y": 0.823, "equityReturn": 5.1086, "unitMoney": ""}, {
    "x": 1439136000000,
    "y": 0.867,
    "equityReturn": 5.3463,
    "unitMoney": ""
}, {"x": 1439222400000, "y": 0.87, "equityReturn": 0.346, "unitMoney": ""}, {
    "x": 1439308800000,
    "y": 0.848,
    "equityReturn": -2.5287,
    "unitMoney": ""
}, {"x": 1439395200000, "y": 0.863, "equityReturn": 1.7689, "unitMoney": ""}, {
    "x": 1439481600000,
    "y": 0.863,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1439740800000, "y": 0.878, "equityReturn": 1.7381, "unitMoney": ""}, {
    "x": 1439827200000,
    "y": 0.804,
    "equityReturn": -8.4282,
    "unitMoney": ""
}, {"x": 1439913600000, "y": 0.825, "equityReturn": 2.6119, "unitMoney": ""}, {
    "x": 1440000000000,
    "y": 0.794,
    "equityReturn": -3.7576,
    "unitMoney": ""
}, {"x": 1440086400000, "y": 0.756, "equityReturn": -4.7859, "unitMoney": ""}, {
    "x": 1440345600000,
    "y": 0.681,
    "equityReturn": -9.9206,
    "unitMoney": ""
}, {"x": 1440432000000, "y": 0.629, "equityReturn": -7.6358, "unitMoney": ""}, {
    "x": 1440518400000,
    "y": 0.602,
    "equityReturn": -4.2925,
    "unitMoney": ""
}, {"x": 1440604800000, "y": 0.626, "equityReturn": 3.9867, "unitMoney": ""}, {
    "x": 1440691200000,
    "y": 0.668,
    "equityReturn": 6.7093,
    "unitMoney": ""
}, {"x": 1440950400000, "y": 0.635, "equityReturn": -4.9401, "unitMoney": ""}, {
    "x": 1441036800000,
    "y": 0.588,
    "equityReturn": -7.4016,
    "unitMoney": ""
}, {"x": 1441123200000, "y": 0.577, "equityReturn": -1.8707, "unitMoney": ""}, {
    "x": 1441555200000,
    "y": 0.589,
    "equityReturn": 2.0797,
    "unitMoney": ""
}, {"x": 1441641600000, "y": 0.621, "equityReturn": 5.4329, "unitMoney": ""}, {
    "x": 1441728000000,
    "y": 0.644,
    "equityReturn": 3.7037,
    "unitMoney": ""
}, {"x": 1441814400000, "y": 0.639, "equityReturn": -0.7764, "unitMoney": ""}, {
    "x": 1441900800000,
    "y": 0.641,
    "equityReturn": 0.313,
    "unitMoney": ""
}, {"x": 1442160000000, "y": 0.596, "equityReturn": -7.0203, "unitMoney": ""}, {
    "x": 1442246400000,
    "y": 0.561,
    "equityReturn": -5.8725,
    "unitMoney": ""
}, {"x": 1442332800000, "y": 0.604, "equityReturn": 7.6649, "unitMoney": ""}, {
    "x": 1442419200000,
    "y": 0.596,
    "equityReturn": -1.3245,
    "unitMoney": ""
}, {"x": 1442505600000, "y": 0.604, "equityReturn": 1.3423, "unitMoney": ""}, {
    "x": 1442764800000,
    "y": 0.629,
    "equityReturn": 4.1391,
    "unitMoney": ""
}, {"x": 1442851200000, "y": 0.637, "equityReturn": 1.2719, "unitMoney": ""}, {
    "x": 1442937600000,
    "y": 0.631,
    "equityReturn": -0.9419,
    "unitMoney": ""
}, {"x": 1443024000000, "y": 0.641, "equityReturn": 1.5848, "unitMoney": ""}, {
    "x": 1443110400000,
    "y": 0.618,
    "equityReturn": -3.5881,
    "unitMoney": ""
}, {"x": 1443369600000, "y": 0.633, "equityReturn": 2.4272, "unitMoney": ""}, {
    "x": 1443456000000,
    "y": 0.627,
    "equityReturn": -0.9479,
    "unitMoney": ""
}, {"x": 1443542400000, "y": 0.631, "equityReturn": 0.638, "unitMoney": ""}, {
    "x": 1444233600000,
    "y": 0.658,
    "equityReturn": 4.2789,
    "unitMoney": ""
}, {"x": 1444320000000, "y": 0.675, "equityReturn": 2.5836, "unitMoney": ""}, {
    "x": 1444579200000,
    "y": 0.7,
    "equityReturn": 3.7037,
    "unitMoney": ""
}, {"x": 1444665600000, "y": 0.711, "equityReturn": 1.5714, "unitMoney": ""}, {
    "x": 1444752000000,
    "y": 0.702,
    "equityReturn": -1.2658,
    "unitMoney": ""
}, {"x": 1444838400000, "y": 0.724, "equityReturn": 3.1339, "unitMoney": ""}, {
    "x": 1444924800000,
    "y": 0.732,
    "equityReturn": 1.105,
    "unitMoney": ""
}, {"x": 1445184000000, "y": 0.737, "equityReturn": 0.6831, "unitMoney": ""}, {
    "x": 1445270400000,
    "y": 0.753,
    "equityReturn": 2.171,
    "unitMoney": ""
}, {"x": 1445356800000, "y": 0.701, "equityReturn": -6.9057, "unitMoney": ""}, {
    "x": 1445443200000,
    "y": 0.726,
    "equityReturn": 3.5663,
    "unitMoney": ""
}, {"x": 1445529600000, "y": 0.746, "equityReturn": 2.7548, "unitMoney": ""}, {
    "x": 1445788800000,
    "y": 0.752,
    "equityReturn": 0.8043,
    "unitMoney": ""
}, {"x": 1445875200000, "y": 0.765, "equityReturn": 1.7287, "unitMoney": ""}, {
    "x": 1445961600000,
    "y": 0.746,
    "equityReturn": -2.4837,
    "unitMoney": ""
}, {"x": 1446048000000, "y": 0.751, "equityReturn": 0.6702, "unitMoney": ""}, {
    "x": 1446134400000,
    "y": 0.741,
    "equityReturn": -1.3316,
    "unitMoney": ""
}, {"x": 1446393600000, "y": 0.725, "equityReturn": -2.1592, "unitMoney": ""}, {
    "x": 1446480000000,
    "y": 0.725,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1446566400000, "y": 0.763, "equityReturn": 5.2414, "unitMoney": ""}, {
    "x": 1446652800000,
    "y": 0.768,
    "equityReturn": 0.6553,
    "unitMoney": ""
}, {"x": 1446739200000, "y": 0.8, "equityReturn": 4.1667, "unitMoney": ""}, {
    "x": 1446998400000,
    "y": 0.806,
    "equityReturn": 0.75,
    "unitMoney": ""
}, {"x": 1447084800000, "y": 0.829, "equityReturn": 2.8536, "unitMoney": ""}, {
    "x": 1447171200000,
    "y": 0.845,
    "equityReturn": 1.93,
    "unitMoney": ""
}, {"x": 1447257600000, "y": 0.842, "equityReturn": -0.355, "unitMoney": ""}, {
    "x": 1447344000000,
    "y": 0.809,
    "equityReturn": -3.9192,
    "unitMoney": ""
}, {"x": 1447603200000, "y": 0.84, "equityReturn": 3.8319, "unitMoney": ""}, {
    "x": 1447689600000,
    "y": 0.825,
    "equityReturn": -1.7857,
    "unitMoney": ""
}, {"x": 1447776000000, "y": 0.811, "equityReturn": -1.697, "unitMoney": ""}, {
    "x": 1447862400000,
    "y": 0.841,
    "equityReturn": 3.6991,
    "unitMoney": ""
}, {"x": 1447948800000, "y": 0.848, "equityReturn": 0.8323, "unitMoney": ""}, {
    "x": 1448208000000,
    "y": 0.838,
    "equityReturn": -1.1792,
    "unitMoney": ""
}, {"x": 1448294400000, "y": 0.85, "equityReturn": 1.432, "unitMoney": ""}, {
    "x": 1448380800000,
    "y": 0.876,
    "equityReturn": 3.0588,
    "unitMoney": ""
}, {"x": 1448467200000, "y": 0.861, "equityReturn": -1.7123, "unitMoney": ""}, {
    "x": 1448553600000,
    "y": 0.81,
    "equityReturn": -5.9233,
    "unitMoney": ""
}, {"x": 1448812800000, "y": 0.816, "equityReturn": 0.7407, "unitMoney": ""}, {
    "x": 1448899200000,
    "y": 0.834,
    "equityReturn": 2.2059,
    "unitMoney": ""
}, {"x": 1448985600000, "y": 0.806, "equityReturn": -3.3573, "unitMoney": ""}, {
    "x": 1449072000000,
    "y": 0.831,
    "equityReturn": 3.1017,
    "unitMoney": ""
}, {"x": 1449158400000, "y": 0.832, "equityReturn": 0.1203, "unitMoney": ""}, {
    "x": 1449417600000,
    "y": 0.849,
    "equityReturn": 2.0433,
    "unitMoney": ""
}, {"x": 1449504000000, "y": 0.851, "equityReturn": 0.2356, "unitMoney": ""}, {
    "x": 1449590400000,
    "y": 0.864,
    "equityReturn": 1.5276,
    "unitMoney": ""
}, {"x": 1449676800000, "y": 0.862, "equityReturn": -0.2315, "unitMoney": ""}, {
    "x": 1449763200000,
    "y": 0.855,
    "equityReturn": -0.8121,
    "unitMoney": ""
}, {"x": 1450022400000, "y": 0.863, "equityReturn": 0.9357, "unitMoney": ""}, {
    "x": 1450108800000,
    "y": 0.871,
    "equityReturn": 0.927,
    "unitMoney": ""
}, {"x": 1450195200000, "y": 0.884, "equityReturn": 1.4925, "unitMoney": ""}, {
    "x": 1450281600000,
    "y": 0.909,
    "equityReturn": 2.8281,
    "unitMoney": ""
}, {"x": 1450368000000, "y": 0.903, "equityReturn": -0.6601, "unitMoney": ""}, {
    "x": 1450627200000,
    "y": 0.906,
    "equityReturn": 0.3322,
    "unitMoney": ""
}, {"x": 1450713600000, "y": 0.916, "equityReturn": 1.1038, "unitMoney": ""}, {
    "x": 1450800000000,
    "y": 0.902,
    "equityReturn": -1.5284,
    "unitMoney": ""
}, {"x": 1450886400000, "y": 0.909, "equityReturn": 0.7761, "unitMoney": ""}, {
    "x": 1450972800000,
    "y": 0.921,
    "equityReturn": 1.3201,
    "unitMoney": ""
}, {"x": 1451232000000, "y": 0.901, "equityReturn": -2.1716, "unitMoney": ""}, {
    "x": 1451318400000,
    "y": 0.918,
    "equityReturn": 1.8868,
    "unitMoney": ""
}, {"x": 1451404800000, "y": 0.931, "equityReturn": 1.4161, "unitMoney": ""}, {
    "x": 1451491200000,
    "y": 0.912,
    "equityReturn": -2.0408,
    "unitMoney": ""
}, {"x": 1451836800000, "y": 0.838, "equityReturn": -8.114, "unitMoney": ""}, {
    "x": 1451923200000,
    "y": 0.816,
    "equityReturn": -2.6253,
    "unitMoney": ""
}, {"x": 1452009600000, "y": 0.831, "equityReturn": 1.8382, "unitMoney": ""}, {
    "x": 1452096000000,
    "y": 0.764,
    "equityReturn": -8.0626,
    "unitMoney": ""
}, {"x": 1452182400000, "y": 0.756, "equityReturn": -1.0471, "unitMoney": ""}, {
    "x": 1452441600000,
    "y": 0.699,
    "equityReturn": -7.5397,
    "unitMoney": ""
}, {"x": 1452528000000, "y": 0.692, "equityReturn": -1.0014, "unitMoney": ""}, {
    "x": 1452614400000,
    "y": 0.671,
    "equityReturn": -3.0347,
    "unitMoney": ""
}, {"x": 1452700800000, "y": 0.701, "equityReturn": 4.4709, "unitMoney": ""}, {
    "x": 1452787200000,
    "y": 0.689,
    "equityReturn": -1.7118,
    "unitMoney": ""
}, {"x": 1453046400000, "y": 0.717, "equityReturn": 4.0639, "unitMoney": ""}, {
    "x": 1453132800000,
    "y": 0.741,
    "equityReturn": 3.3473,
    "unitMoney": ""
}, {"x": 1453219200000, "y": 0.734, "equityReturn": -0.9447, "unitMoney": ""}, {
    "x": 1453305600000,
    "y": 0.706,
    "equityReturn": -3.8147,
    "unitMoney": ""
}, {"x": 1453392000000, "y": 0.713, "equityReturn": 0.9915, "unitMoney": ""}, {
    "x": 1453651200000,
    "y": 0.725,
    "equityReturn": 1.683,
    "unitMoney": ""
}, {"x": 1453737600000, "y": 0.669, "equityReturn": -7.7241, "unitMoney": ""}, {
    "x": 1453824000000,
    "y": 0.659,
    "equityReturn": -1.4948,
    "unitMoney": ""
}, {"x": 1453910400000, "y": 0.626, "equityReturn": -5.0076, "unitMoney": ""}, {
    "x": 1453996800000,
    "y": 0.654,
    "equityReturn": 4.4728,
    "unitMoney": ""
}, {"x": 1454256000000, "y": 0.653, "equityReturn": -0.1529, "unitMoney": ""}, {
    "x": 1454342400000,
    "y": 0.683,
    "equityReturn": 4.5942,
    "unitMoney": ""
}, {"x": 1454428800000, "y": 0.686, "equityReturn": 0.4392, "unitMoney": ""}, {
    "x": 1454515200000,
    "y": 0.699,
    "equityReturn": 1.895,
    "unitMoney": ""
}, {"x": 1454601600000, "y": 0.693, "equityReturn": -0.8584, "unitMoney": ""}, {
    "x": 1455465600000,
    "y": 0.697,
    "equityReturn": 0.5772,
    "unitMoney": ""
}, {"x": 1455552000000, "y": 0.723, "equityReturn": 3.7303, "unitMoney": ""}, {
    "x": 1455638400000,
    "y": 0.727,
    "equityReturn": 0.5533,
    "unitMoney": ""
}, {"x": 1455724800000, "y": 0.735, "equityReturn": 1.1004, "unitMoney": ""}, {
    "x": 1455811200000,
    "y": 0.735,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1456070400000, "y": 0.744, "equityReturn": 1.2245, "unitMoney": ""}, {
    "x": 1456156800000,
    "y": 0.746,
    "equityReturn": 0.2688,
    "unitMoney": ""
}, {"x": 1456243200000, "y": 0.735, "equityReturn": -1.4745, "unitMoney": ""}, {
    "x": 1456329600000,
    "y": 0.679,
    "equityReturn": -7.619,
    "unitMoney": ""
}, {"x": 1456416000000, "y": 0.673, "equityReturn": -0.8837, "unitMoney": ""}, {
    "x": 1456675200000,
    "y": 0.634,
    "equityReturn": -5.7949,
    "unitMoney": ""
}, {"x": 1456761600000, "y": 0.645, "equityReturn": 1.735, "unitMoney": ""}, {
    "x": 1456848000000,
    "y": 0.672,
    "equityReturn": 4.186,
    "unitMoney": ""
}, {"x": 1456934400000, "y": 0.67, "equityReturn": -0.2976, "unitMoney": ""}, {
    "x": 1457020800000,
    "y": 0.641,
    "equityReturn": -4.3284,
    "unitMoney": ""
}, {"x": 1457280000000, "y": 0.654, "equityReturn": 2.0281, "unitMoney": ""}, {
    "x": 1457366400000,
    "y": 0.661,
    "equityReturn": 1.0703,
    "unitMoney": ""
}, {"x": 1457452800000, "y": 0.654, "equityReturn": -1.059, "unitMoney": ""}, {
    "x": 1457539200000,
    "y": 0.645,
    "equityReturn": -1.3761,
    "unitMoney": ""
}, {"x": 1457625600000, "y": 0.643, "equityReturn": -0.3101, "unitMoney": ""}, {
    "x": 1457884800000,
    "y": 0.667,
    "equityReturn": 3.7325,
    "unitMoney": ""
}, {"x": 1457971200000, "y": 0.664, "equityReturn": -0.4498, "unitMoney": ""}, {
    "x": 1458057600000,
    "y": 0.659,
    "equityReturn": -0.753,
    "unitMoney": ""
}, {"x": 1458144000000, "y": 0.686, "equityReturn": 4.0971, "unitMoney": ""}, {
    "x": 1458230400000,
    "y": 0.713,
    "equityReturn": 3.9359,
    "unitMoney": ""
}, {"x": 1458489600000, "y": 0.734, "equityReturn": 2.9453, "unitMoney": ""}, {
    "x": 1458576000000,
    "y": 0.739,
    "equityReturn": 0.6812,
    "unitMoney": ""
}, {"x": 1458662400000, "y": 0.75, "equityReturn": 1.4885, "unitMoney": ""}, {
    "x": 1458748800000,
    "y": 0.743,
    "equityReturn": -0.9333,
    "unitMoney": ""
}, {"x": 1458835200000, "y": 0.73, "equityReturn": -1.7497, "unitMoney": ""}, {
    "x": 1459094400000,
    "y": 0.732,
    "equityReturn": 0.274,
    "unitMoney": ""
}, {"x": 1459180800000, "y": 0.72, "equityReturn": -1.6393, "unitMoney": ""}, {
    "x": 1459267200000,
    "y": 0.74,
    "equityReturn": 2.7778,
    "unitMoney": ""
}, {"x": 1459353600000, "y": 0.743, "equityReturn": 0.4054, "unitMoney": ""}, {
    "x": 1459440000000,
    "y": 0.738,
    "equityReturn": -0.6729,
    "unitMoney": ""
}, {"x": 1459785600000, "y": 0.756, "equityReturn": 2.439, "unitMoney": ""}, {
    "x": 1459872000000,
    "y": 0.759,
    "equityReturn": 0.3968,
    "unitMoney": ""
}, {"x": 1459958400000, "y": 0.748, "equityReturn": -1.4493, "unitMoney": ""}, {
    "x": 1460044800000,
    "y": 0.745,
    "equityReturn": -0.4011,
    "unitMoney": ""
}, {"x": 1460304000000, "y": 0.761, "equityReturn": 2.1477, "unitMoney": ""}, {
    "x": 1460390400000,
    "y": 0.756,
    "equityReturn": -0.657,
    "unitMoney": ""
}, {"x": 1460476800000, "y": 0.766, "equityReturn": 1.3228, "unitMoney": ""}, {
    "x": 1460563200000,
    "y": 0.772,
    "equityReturn": 0.7833,
    "unitMoney": ""
}, {"x": 1460649600000, "y": 0.772, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1460908800000,
    "y": 0.762,
    "equityReturn": -1.2953,
    "unitMoney": ""
}, {"x": 1460995200000, "y": 0.762, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1461081600000,
    "y": 0.732,
    "equityReturn": -3.937,
    "unitMoney": ""
}, {"x": 1461168000000, "y": 0.727, "equityReturn": -0.6831, "unitMoney": ""}, {
    "x": 1461254400000,
    "y": 0.732,
    "equityReturn": 0.6878,
    "unitMoney": ""
}, {"x": 1461513600000, "y": 0.729, "equityReturn": -0.4098, "unitMoney": ""}, {
    "x": 1461600000000,
    "y": 0.737,
    "equityReturn": 1.0974,
    "unitMoney": ""
}, {"x": 1461686400000, "y": 0.737, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1461772800000,
    "y": 0.733,
    "equityReturn": -0.5427,
    "unitMoney": ""
}, {"x": 1461859200000, "y": 0.735, "equityReturn": 0.2729, "unitMoney": ""}, {
    "x": 1462204800000,
    "y": 0.755,
    "equityReturn": 2.7211,
    "unitMoney": ""
}, {"x": 1462291200000, "y": 0.76, "equityReturn": 0.6623, "unitMoney": ""}, {
    "x": 1462377600000,
    "y": 0.761,
    "equityReturn": 0.1316,
    "unitMoney": ""
}, {"x": 1462464000000, "y": 0.744, "equityReturn": -2.2339, "unitMoney": ""}, {
    "x": 1462723200000,
    "y": 0.726,
    "equityReturn": -2.4194,
    "unitMoney": ""
}, {"x": 1462809600000, "y": 0.729, "equityReturn": 0.4132, "unitMoney": ""}, {
    "x": 1462896000000,
    "y": 0.728,
    "equityReturn": -0.1372,
    "unitMoney": ""
}, {"x": 1462982400000, "y": 0.731, "equityReturn": 0.4121, "unitMoney": ""}, {
    "x": 1463068800000,
    "y": 0.731,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1463328000000, "y": 0.743, "equityReturn": 1.6416, "unitMoney": ""}, {
    "x": 1463414400000,
    "y": 0.742,
    "equityReturn": -0.1346,
    "unitMoney": ""
}, {"x": 1463500800000, "y": 0.727, "equityReturn": -2.0216, "unitMoney": ""}, {
    "x": 1463587200000,
    "y": 0.733,
    "equityReturn": 0.8253,
    "unitMoney": ""
}, {"x": 1463673600000, "y": 0.742, "equityReturn": 1.2278, "unitMoney": ""}, {
    "x": 1463932800000,
    "y": 0.755,
    "equityReturn": 1.752,
    "unitMoney": ""
}, {"x": 1464019200000, "y": 0.746, "equityReturn": -1.1921, "unitMoney": ""}, {
    "x": 1464105600000,
    "y": 0.744,
    "equityReturn": -0.2681,
    "unitMoney": ""
}, {"x": 1464192000000, "y": 0.755, "equityReturn": 1.4785, "unitMoney": ""}, {
    "x": 1464278400000,
    "y": 0.752,
    "equityReturn": -0.3974,
    "unitMoney": ""
}, {"x": 1464537600000, "y": 0.75, "equityReturn": -0.266, "unitMoney": ""}, {
    "x": 1464624000000,
    "y": 0.774,
    "equityReturn": 3.2,
    "unitMoney": ""
}, {"x": 1464710400000, "y": 0.78, "equityReturn": 0.7752, "unitMoney": ""}, {
    "x": 1464796800000,
    "y": 0.784,
    "equityReturn": 0.5128,
    "unitMoney": ""
}, {"x": 1464883200000, "y": 0.784, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1465142400000,
    "y": 0.787,
    "equityReturn": 0.3827,
    "unitMoney": ""
}, {"x": 1465228800000, "y": 0.786, "equityReturn": -0.1271, "unitMoney": ""}, {
    "x": 1465315200000,
    "y": 0.782,
    "equityReturn": -0.5089,
    "unitMoney": ""
}, {"x": 1465747200000, "y": 0.757, "equityReturn": -3.1969, "unitMoney": ""}, {
    "x": 1465833600000,
    "y": 0.766,
    "equityReturn": 1.1889,
    "unitMoney": ""
}, {"x": 1465920000000, "y": 0.783, "equityReturn": 2.2193, "unitMoney": ""}, {
    "x": 1466006400000,
    "y": 0.785,
    "equityReturn": 0.2554,
    "unitMoney": ""
}, {"x": 1466092800000, "y": 0.787, "equityReturn": 0.2548, "unitMoney": ""}, {
    "x": 1466352000000,
    "y": 0.793,
    "equityReturn": 0.7624,
    "unitMoney": ""
}, {"x": 1466438400000, "y": 0.788, "equityReturn": -0.6305, "unitMoney": ""}, {
    "x": 1466524800000,
    "y": 0.795,
    "equityReturn": 0.8883,
    "unitMoney": ""
}, {"x": 1466611200000, "y": 0.79, "equityReturn": -0.6289, "unitMoney": ""}, {
    "x": 1466697600000,
    "y": 0.785,
    "equityReturn": -0.6329,
    "unitMoney": ""
}, {"x": 1466956800000, "y": 0.804, "equityReturn": 2.4204, "unitMoney": ""}, {
    "x": 1467043200000,
    "y": 0.803,
    "equityReturn": -0.1244,
    "unitMoney": ""
}, {"x": 1467129600000, "y": 0.804, "equityReturn": 0.1245, "unitMoney": ""}, {
    "x": 1467216000000,
    "y": 0.803,
    "equityReturn": -0.1244,
    "unitMoney": ""
}, {"x": 1467302400000, "y": 0.799, "equityReturn": -0.4981, "unitMoney": ""}, {
    "x": 1467561600000,
    "y": 0.806,
    "equityReturn": 0.8761,
    "unitMoney": ""
}, {"x": 1467648000000, "y": 0.807, "equityReturn": 0.1241, "unitMoney": ""}, {
    "x": 1467734400000,
    "y": 0.81,
    "equityReturn": 0.3717,
    "unitMoney": ""
}, {"x": 1467820800000, "y": 0.811, "equityReturn": 0.1235, "unitMoney": ""}, {
    "x": 1467907200000,
    "y": 0.814,
    "equityReturn": 0.3699,
    "unitMoney": ""
}, {"x": 1468166400000, "y": 0.809, "equityReturn": -0.6143, "unitMoney": ""}, {
    "x": 1468252800000,
    "y": 0.814,
    "equityReturn": 0.618,
    "unitMoney": ""
}, {"x": 1468339200000, "y": 0.821, "equityReturn": 0.86, "unitMoney": ""}, {
    "x": 1468425600000,
    "y": 0.817,
    "equityReturn": -0.4872,
    "unitMoney": ""
}, {"x": 1468512000000, "y": 0.814, "equityReturn": -0.3672, "unitMoney": ""}, {
    "x": 1468771200000,
    "y": 0.809,
    "equityReturn": -0.6143,
    "unitMoney": ""
}, {"x": 1468857600000, "y": 0.813, "equityReturn": 0.4944, "unitMoney": ""}, {
    "x": 1468944000000,
    "y": 0.816,
    "equityReturn": 0.369,
    "unitMoney": ""
}, {"x": 1469030400000, "y": 0.814, "equityReturn": -0.2451, "unitMoney": ""}, {
    "x": 1469116800000,
    "y": 0.806,
    "equityReturn": -0.9828,
    "unitMoney": ""
}, {"x": 1469376000000, "y": 0.807, "equityReturn": 0.1241, "unitMoney": ""}, {
    "x": 1469462400000,
    "y": 0.816,
    "equityReturn": 1.1152,
    "unitMoney": ""
}, {"x": 1469548800000, "y": 0.786, "equityReturn": -3.6765, "unitMoney": ""}, {
    "x": 1469635200000,
    "y": 0.784,
    "equityReturn": -0.2545,
    "unitMoney": ""
}, {"x": 1469721600000, "y": 0.781, "equityReturn": -0.3827, "unitMoney": ""}, {
    "x": 1469980800000,
    "y": 0.771,
    "equityReturn": -1.2804,
    "unitMoney": ""
}, {"x": 1470067200000, "y": 0.774, "equityReturn": 0.3891, "unitMoney": ""}, {
    "x": 1470153600000,
    "y": 0.774,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1470240000000, "y": 0.777, "equityReturn": 0.3876, "unitMoney": ""}, {
    "x": 1470326400000,
    "y": 0.775,
    "equityReturn": -0.2574,
    "unitMoney": ""
}, {"x": 1470585600000, "y": 0.78, "equityReturn": 0.6452, "unitMoney": ""}, {
    "x": 1470672000000,
    "y": 0.787,
    "equityReturn": 0.8974,
    "unitMoney": ""
}, {"x": 1470758400000, "y": 0.788, "equityReturn": 0.1271, "unitMoney": ""}, {
    "x": 1470844800000,
    "y": 0.783,
    "equityReturn": -0.6345,
    "unitMoney": ""
}, {"x": 1470931200000, "y": 0.792, "equityReturn": 1.1494, "unitMoney": ""}, {
    "x": 1471190400000,
    "y": 0.805,
    "equityReturn": 1.6414,
    "unitMoney": ""
}, {"x": 1471276800000, "y": 0.799, "equityReturn": -0.7453, "unitMoney": ""}, {
    "x": 1471363200000,
    "y": 0.798,
    "equityReturn": -0.1252,
    "unitMoney": ""
}, {"x": 1471449600000, "y": 0.797, "equityReturn": -0.1253, "unitMoney": ""}, {
    "x": 1471536000000,
    "y": 0.797,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1471795200000, "y": 0.794, "equityReturn": -0.3764, "unitMoney": ""}, {
    "x": 1471881600000,
    "y": 0.795,
    "equityReturn": 0.1259,
    "unitMoney": ""
}, {"x": 1471968000000, "y": 0.799, "equityReturn": 0.5031, "unitMoney": ""}, {
    "x": 1472054400000,
    "y": 0.796,
    "equityReturn": -0.3755,
    "unitMoney": ""
}, {"x": 1472140800000, "y": 0.795, "equityReturn": -0.1256, "unitMoney": ""}, {
    "x": 1472400000000,
    "y": 0.792,
    "equityReturn": -0.3774,
    "unitMoney": ""
}, {"x": 1472486400000, "y": 0.792, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1472572800000,
    "y": 0.793,
    "equityReturn": 0.1263,
    "unitMoney": ""
}, {"x": 1472659200000, "y": 0.79, "equityReturn": -0.3783, "unitMoney": ""}, {
    "x": 1472745600000,
    "y": 0.789,
    "equityReturn": -0.1266,
    "unitMoney": ""
}, {"x": 1473004800000, "y": 0.788, "equityReturn": -0.1267, "unitMoney": ""}, {
    "x": 1473091200000,
    "y": 0.794,
    "equityReturn": 0.7614,
    "unitMoney": ""
}, {"x": 1473177600000, "y": 0.793, "equityReturn": -0.1259, "unitMoney": ""}, {
    "x": 1473264000000,
    "y": 0.796,
    "equityReturn": 0.3783,
    "unitMoney": ""
}, {"x": 1473350400000, "y": 0.789, "equityReturn": -0.8794, "unitMoney": ""}, {
    "x": 1473609600000,
    "y": 0.771,
    "equityReturn": -2.2814,
    "unitMoney": ""
}, {"x": 1473696000000, "y": 0.776, "equityReturn": 0.6485, "unitMoney": ""}, {
    "x": 1473782400000,
    "y": 0.771,
    "equityReturn": -0.6443,
    "unitMoney": ""
}, {"x": 1474214400000, "y": 0.777, "equityReturn": 0.7782, "unitMoney": ""}, {
    "x": 1474300800000,
    "y": 0.775,
    "equityReturn": -0.2574,
    "unitMoney": ""
}, {"x": 1474387200000, "y": 0.776, "equityReturn": 0.129, "unitMoney": ""}, {
    "x": 1474473600000,
    "y": 0.778,
    "equityReturn": 0.2577,
    "unitMoney": ""
}, {"x": 1474560000000, "y": 0.775, "equityReturn": -0.3856, "unitMoney": ""}, {
    "x": 1474819200000,
    "y": 0.763,
    "equityReturn": -1.5484,
    "unitMoney": ""
}, {"x": 1474905600000, "y": 0.767, "equityReturn": 0.5242, "unitMoney": ""}, {
    "x": 1474992000000,
    "y": 0.767,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1475078400000, "y": 0.77, "equityReturn": 0.3911, "unitMoney": ""}, {
    "x": 1475164800000,
    "y": 0.773,
    "equityReturn": 0.3896,
    "unitMoney": ""
}, {"x": 1476028800000, "y": 0.784, "equityReturn": 1.423, "unitMoney": ""}, {
    "x": 1476115200000,
    "y": 0.789,
    "equityReturn": 0.6378,
    "unitMoney": ""
}, {"x": 1476201600000, "y": 0.799, "equityReturn": 1.2674, "unitMoney": ""}, {
    "x": 1476288000000,
    "y": 0.798,
    "equityReturn": -0.1252,
    "unitMoney": ""
}, {"x": 1476374400000, "y": 0.795, "equityReturn": -0.3759, "unitMoney": ""}, {
    "x": 1476633600000,
    "y": 0.786,
    "equityReturn": -1.1321,
    "unitMoney": ""
}, {"x": 1476720000000, "y": 0.797, "equityReturn": 1.3995, "unitMoney": ""}, {
    "x": 1476806400000,
    "y": 0.801,
    "equityReturn": 0.5019,
    "unitMoney": ""
}, {"x": 1476892800000, "y": 0.809, "equityReturn": 0.9988, "unitMoney": ""}, {
    "x": 1476979200000,
    "y": 0.805,
    "equityReturn": -0.4944,
    "unitMoney": ""
}, {"x": 1477238400000, "y": 0.807, "equityReturn": 0.2484, "unitMoney": ""}, {
    "x": 1477324800000,
    "y": 0.806,
    "equityReturn": -0.1239,
    "unitMoney": ""
}, {"x": 1477411200000, "y": 0.802, "equityReturn": -0.4963, "unitMoney": ""}, {
    "x": 1477497600000,
    "y": 0.805,
    "equityReturn": 0.3741,
    "unitMoney": ""
}, {"x": 1477584000000, "y": 0.801, "equityReturn": -0.4969, "unitMoney": ""}, {
    "x": 1477843200000,
    "y": 0.803,
    "equityReturn": 0.2497,
    "unitMoney": ""
}, {"x": 1477929600000, "y": 0.812, "equityReturn": 1.1208, "unitMoney": ""}, {
    "x": 1478016000000,
    "y": 0.804,
    "equityReturn": -0.9852,
    "unitMoney": ""
}, {"x": 1478102400000, "y": 0.806, "equityReturn": 0.2488, "unitMoney": ""}, {
    "x": 1478188800000,
    "y": 0.805,
    "equityReturn": -0.1241,
    "unitMoney": ""
}, {"x": 1478448000000, "y": 0.802, "equityReturn": -0.3727, "unitMoney": ""}, {
    "x": 1478534400000,
    "y": 0.806,
    "equityReturn": 0.4988,
    "unitMoney": ""
}, {"x": 1478620800000, "y": 0.798, "equityReturn": -0.9926, "unitMoney": ""}, {
    "x": 1478707200000,
    "y": 0.808,
    "equityReturn": 1.2531,
    "unitMoney": ""
}, {"x": 1478793600000, "y": 0.81, "equityReturn": 0.2475, "unitMoney": ""}, {
    "x": 1479052800000,
    "y": 0.814,
    "equityReturn": 0.4938,
    "unitMoney": ""
}, {"x": 1479139200000, "y": 0.817, "equityReturn": 0.3686, "unitMoney": ""}, {
    "x": 1479225600000,
    "y": 0.818,
    "equityReturn": 0.1224,
    "unitMoney": ""
}, {"x": 1479312000000, "y": 0.818, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1479398400000,
    "y": 0.816,
    "equityReturn": -0.2445,
    "unitMoney": ""
}, {"x": 1479657600000, "y": 0.82, "equityReturn": 0.4902, "unitMoney": ""}, {
    "x": 1479744000000,
    "y": 0.826,
    "equityReturn": 0.7317,
    "unitMoney": ""
}, {"x": 1479830400000, "y": 0.823, "equityReturn": -0.3632, "unitMoney": ""}, {
    "x": 1479916800000,
    "y": 0.82,
    "equityReturn": -0.3645,
    "unitMoney": ""
}, {"x": 1480003200000, "y": 0.822, "equityReturn": 0.2439, "unitMoney": ""}, {
    "x": 1480262400000,
    "y": 0.818,
    "equityReturn": -0.4866,
    "unitMoney": ""
}, {"x": 1480348800000, "y": 0.813, "equityReturn": -0.6112, "unitMoney": ""}, {
    "x": 1480435200000,
    "y": 0.809,
    "equityReturn": -0.492,
    "unitMoney": ""
}, {"x": 1480521600000, "y": 0.812, "equityReturn": 0.3708, "unitMoney": ""}, {
    "x": 1480608000000,
    "y": 0.801,
    "equityReturn": -1.3547,
    "unitMoney": ""
}, {"x": 1480867200000, "y": 0.796, "equityReturn": -0.6242, "unitMoney": ""}, {
    "x": 1480953600000,
    "y": 0.8,
    "equityReturn": 0.5025,
    "unitMoney": ""
}, {"x": 1481040000000, "y": 0.808, "equityReturn": 1.0, "unitMoney": ""}, {
    "x": 1481126400000,
    "y": 0.807,
    "equityReturn": -0.1238,
    "unitMoney": ""
}, {"x": 1481212800000, "y": 0.804, "equityReturn": -0.3717, "unitMoney": ""}, {
    "x": 1481472000000,
    "y": 0.763,
    "equityReturn": -5.0995,
    "unitMoney": ""
}, {"x": 1481558400000, "y": 0.763, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1481644800000,
    "y": 0.76,
    "equityReturn": -0.3932,
    "unitMoney": ""
}, {"x": 1481731200000, "y": 0.764, "equityReturn": 0.5263, "unitMoney": ""}, {
    "x": 1481817600000,
    "y": 0.774,
    "equityReturn": 1.3089,
    "unitMoney": ""
}, {"x": 1482076800000, "y": 0.774, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1482163200000,
    "y": 0.777,
    "equityReturn": 0.3876,
    "unitMoney": ""
}, {"x": 1482249600000, "y": 0.786, "equityReturn": 1.1583, "unitMoney": ""}, {
    "x": 1482336000000,
    "y": 0.79,
    "equityReturn": 0.5089,
    "unitMoney": ""
}, {"x": 1482422400000, "y": 0.789, "equityReturn": -0.1266, "unitMoney": ""}, {
    "x": 1482681600000,
    "y": 0.787,
    "equityReturn": -0.2535,
    "unitMoney": ""
}, {"x": 1482768000000, "y": 0.788, "equityReturn": 0.1271, "unitMoney": ""}, {
    "x": 1482854400000,
    "y": 0.788,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1482940800000, "y": 0.789, "equityReturn": 0.1269, "unitMoney": ""}, {
    "x": 1483027200000,
    "y": 0.795,
    "equityReturn": 0.7605,
    "unitMoney": ""
}, {"x": 1483113600000, "y": 0.795, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1483372800000,
    "y": 0.799,
    "equityReturn": 0.5031,
    "unitMoney": ""
}, {"x": 1483459200000, "y": 0.803, "equityReturn": 0.5006, "unitMoney": ""}, {
    "x": 1483545600000,
    "y": 0.803,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1483632000000, "y": 0.792, "equityReturn": -1.3699, "unitMoney": ""}, {
    "x": 1483891200000,
    "y": 0.794,
    "equityReturn": 0.2525,
    "unitMoney": ""
}, {"x": 1483977600000, "y": 0.794, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1484064000000,
    "y": 0.786,
    "equityReturn": -1.0076,
    "unitMoney": ""
}, {"x": 1484150400000, "y": 0.781, "equityReturn": -0.6361, "unitMoney": ""}, {
    "x": 1484236800000,
    "y": 0.778,
    "equityReturn": -0.3841,
    "unitMoney": ""
}, {"x": 1484496000000, "y": 0.768, "equityReturn": -1.2853, "unitMoney": ""}, {
    "x": 1484582400000,
    "y": 0.772,
    "equityReturn": 0.5208,
    "unitMoney": ""
}, {"x": 1484668800000, "y": 0.771, "equityReturn": -0.1295, "unitMoney": ""}, {
    "x": 1484755200000,
    "y": 0.773,
    "equityReturn": 0.2594,
    "unitMoney": ""
}, {"x": 1484841600000, "y": 0.778, "equityReturn": 0.6468, "unitMoney": ""}, {
    "x": 1485100800000,
    "y": 0.778,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1485187200000, "y": 0.775, "equityReturn": -0.3856, "unitMoney": ""}, {
    "x": 1485273600000,
    "y": 0.779,
    "equityReturn": 0.5161,
    "unitMoney": ""
}, {"x": 1485360000000, "y": 0.783, "equityReturn": 0.5135, "unitMoney": ""}, {
    "x": 1486051200000,
    "y": 0.78,
    "equityReturn": -0.3831,
    "unitMoney": ""
}, {"x": 1486310400000, "y": 0.785, "equityReturn": 0.641, "unitMoney": ""}, {
    "x": 1486396800000,
    "y": 0.784,
    "equityReturn": -0.1274,
    "unitMoney": ""
}, {"x": 1486483200000, "y": 0.787, "equityReturn": 0.3827, "unitMoney": ""}, {
    "x": 1486569600000,
    "y": 0.789,
    "equityReturn": 0.2541,
    "unitMoney": ""
}, {"x": 1486656000000, "y": 0.788, "equityReturn": -0.1267, "unitMoney": ""}, {
    "x": 1486915200000,
    "y": 0.792,
    "equityReturn": 0.5076,
    "unitMoney": ""
}, {"x": 1487001600000, "y": 0.792, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1487088000000,
    "y": 0.789,
    "equityReturn": -0.3788,
    "unitMoney": ""
}, {"x": 1487174400000, "y": 0.791, "equityReturn": 0.2535, "unitMoney": ""}, {
    "x": 1487260800000,
    "y": 0.788,
    "equityReturn": -0.3793,
    "unitMoney": ""
}, {"x": 1487520000000, "y": 0.797, "equityReturn": 1.1421, "unitMoney": ""}, {
    "x": 1487606400000,
    "y": 0.806,
    "equityReturn": 1.1292,
    "unitMoney": ""
}, {"x": 1487692800000, "y": 0.806, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1487779200000,
    "y": 0.802,
    "equityReturn": -0.4963,
    "unitMoney": ""
}, {"x": 1487865600000, "y": 0.801, "equityReturn": -0.1247, "unitMoney": ""}, {
    "x": 1488124800000,
    "y": 0.798,
    "equityReturn": -0.3745,
    "unitMoney": ""
}, {"x": 1488211200000, "y": 0.8, "equityReturn": 0.2506, "unitMoney": ""}, {
    "x": 1488297600000,
    "y": 0.8,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1488384000000, "y": 0.797, "equityReturn": -0.375, "unitMoney": ""}, {
    "x": 1488470400000,
    "y": 0.801,
    "equityReturn": 0.5019,
    "unitMoney": ""
}, {"x": 1488729600000, "y": 0.808, "equityReturn": 0.8739, "unitMoney": ""}, {
    "x": 1488816000000,
    "y": 0.813,
    "equityReturn": 0.6188,
    "unitMoney": ""
}, {"x": 1488902400000, "y": 0.812, "equityReturn": -0.123, "unitMoney": ""}, {
    "x": 1488988800000,
    "y": 0.809,
    "equityReturn": -0.3695,
    "unitMoney": ""
}, {"x": 1489075200000, "y": 0.811, "equityReturn": 0.2472, "unitMoney": ""}, {
    "x": 1489334400000,
    "y": 0.821,
    "equityReturn": 1.233,
    "unitMoney": ""
}, {"x": 1489420800000, "y": 0.82, "equityReturn": -0.1218, "unitMoney": ""}, {
    "x": 1489507200000,
    "y": 0.821,
    "equityReturn": 0.122,
    "unitMoney": ""
}, {"x": 1489593600000, "y": 0.826, "equityReturn": 0.609, "unitMoney": ""}, {
    "x": 1489680000000,
    "y": 0.819,
    "equityReturn": -0.8475,
    "unitMoney": ""
}, {"x": 1489939200000, "y": 0.822, "equityReturn": 0.3663, "unitMoney": ""}, {
    "x": 1490025600000,
    "y": 0.827,
    "equityReturn": 0.6083,
    "unitMoney": ""
}, {"x": 1490112000000, "y": 0.827, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1490198400000,
    "y": 0.831,
    "equityReturn": 0.4837,
    "unitMoney": ""
}, {"x": 1490284800000, "y": 0.834, "equityReturn": 0.361, "unitMoney": ""}, {
    "x": 1490544000000,
    "y": 0.823,
    "equityReturn": -1.3189,
    "unitMoney": ""
}, {"x": 1490630400000, "y": 0.823, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1490716800000,
    "y": 0.818,
    "equityReturn": -0.6075,
    "unitMoney": ""
}, {"x": 1490803200000, "y": 0.806, "equityReturn": -1.467, "unitMoney": ""}, {
    "x": 1490889600000,
    "y": 0.809,
    "equityReturn": 0.3722,
    "unitMoney": ""
}, {"x": 1491321600000, "y": 0.824, "equityReturn": 1.8541, "unitMoney": ""}, {
    "x": 1491408000000,
    "y": 0.824,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1491494400000, "y": 0.831, "equityReturn": 0.8495, "unitMoney": ""}, {
    "x": 1491753600000,
    "y": 0.822,
    "equityReturn": -1.083,
    "unitMoney": ""
}, {"x": 1491840000000, "y": 0.824, "equityReturn": 0.2433, "unitMoney": ""}, {
    "x": 1491926400000,
    "y": 0.819,
    "equityReturn": -0.6068,
    "unitMoney": ""
}, {"x": 1492012800000, "y": 0.822, "equityReturn": 0.3663, "unitMoney": ""}, {
    "x": 1492099200000,
    "y": 0.812,
    "equityReturn": -1.2165,
    "unitMoney": ""
}, {"x": 1492358400000, "y": 0.805, "equityReturn": -0.8621, "unitMoney": ""}, {
    "x": 1492444800000,
    "y": 0.804,
    "equityReturn": -0.1242,
    "unitMoney": ""
}, {"x": 1492531200000, "y": 0.803, "equityReturn": -0.1244, "unitMoney": ""}, {
    "x": 1492617600000,
    "y": 0.805,
    "equityReturn": 0.2491,
    "unitMoney": ""
}, {"x": 1492704000000, "y": 0.8, "equityReturn": -0.6211, "unitMoney": ""}, {
    "x": 1492963200000,
    "y": 0.79,
    "equityReturn": -1.25,
    "unitMoney": ""
}, {"x": 1493049600000, "y": 0.794, "equityReturn": 0.5063, "unitMoney": ""}, {
    "x": 1493136000000,
    "y": 0.803,
    "equityReturn": 1.1335,
    "unitMoney": ""
}, {"x": 1493222400000, "y": 0.805, "equityReturn": 0.2491, "unitMoney": ""}, {
    "x": 1493308800000,
    "y": 0.805,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1493654400000, "y": 0.802, "equityReturn": -0.3727, "unitMoney": ""}, {
    "x": 1493740800000,
    "y": 0.797,
    "equityReturn": -0.6234,
    "unitMoney": ""
}, {"x": 1493827200000, "y": 0.793, "equityReturn": -0.5019, "unitMoney": ""}, {
    "x": 1493913600000,
    "y": 0.786,
    "equityReturn": -0.8827,
    "unitMoney": ""
}, {"x": 1494172800000, "y": 0.778, "equityReturn": -1.0178, "unitMoney": ""}, {
    "x": 1494259200000,
    "y": 0.781,
    "equityReturn": 0.3856,
    "unitMoney": ""
}, {"x": 1494345600000, "y": 0.778, "equityReturn": -0.3841, "unitMoney": ""}, {
    "x": 1494432000000,
    "y": 0.778,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1494518400000, "y": 0.784, "equityReturn": 0.7712, "unitMoney": ""}, {
    "x": 1494777600000,
    "y": 0.786,
    "equityReturn": 0.2551,
    "unitMoney": ""
}, {"x": 1494864000000, "y": 0.794, "equityReturn": 1.0178, "unitMoney": ""}, {
    "x": 1494950400000,
    "y": 0.793,
    "equityReturn": -0.1259,
    "unitMoney": ""
}, {"x": 1495036800000, "y": 0.79, "equityReturn": -0.3783, "unitMoney": ""}, {
    "x": 1495123200000,
    "y": 0.787,
    "equityReturn": -0.3797,
    "unitMoney": ""
}, {"x": 1495382400000, "y": 0.788, "equityReturn": 0.1271, "unitMoney": ""}, {
    "x": 1495468800000,
    "y": 0.786,
    "equityReturn": -0.2538,
    "unitMoney": ""
}, {"x": 1495555200000, "y": 0.784, "equityReturn": -0.2545, "unitMoney": ""}, {
    "x": 1495641600000,
    "y": 0.79,
    "equityReturn": 0.7653,
    "unitMoney": ""
}, {"x": 1495728000000, "y": 0.786, "equityReturn": -0.5063, "unitMoney": ""}, {
    "x": 1496160000000,
    "y": 0.785,
    "equityReturn": -0.1272,
    "unitMoney": ""
}, {"x": 1496246400000, "y": 0.783, "equityReturn": -0.2548, "unitMoney": ""}, {
    "x": 1496332800000,
    "y": 0.78,
    "equityReturn": -0.3831,
    "unitMoney": ""
}, {"x": 1496592000000, "y": 0.784, "equityReturn": 0.5128, "unitMoney": ""}, {
    "x": 1496678400000,
    "y": 0.789,
    "equityReturn": 0.6378,
    "unitMoney": ""
}, {"x": 1496764800000, "y": 0.804, "equityReturn": 1.9011, "unitMoney": ""}, {
    "x": 1496851200000,
    "y": 0.81,
    "equityReturn": 0.7463,
    "unitMoney": ""
}, {"x": 1496937600000, "y": 0.819, "equityReturn": 1.1111, "unitMoney": ""}, {
    "x": 1497196800000,
    "y": 0.821,
    "equityReturn": 0.2442,
    "unitMoney": ""
}, {"x": 1497283200000, "y": 0.822, "equityReturn": 0.1218, "unitMoney": ""}, {
    "x": 1497369600000,
    "y": 0.813,
    "equityReturn": -1.0949,
    "unitMoney": ""
}, {"x": 1497456000000, "y": 0.812, "equityReturn": -0.123, "unitMoney": ""}, {
    "x": 1497542400000,
    "y": 0.811,
    "equityReturn": -0.1232,
    "unitMoney": ""
}, {"x": 1497801600000, "y": 0.818, "equityReturn": 0.8631, "unitMoney": ""}, {
    "x": 1497888000000,
    "y": 0.811,
    "equityReturn": -0.8557,
    "unitMoney": ""
}, {"x": 1497974400000, "y": 0.822, "equityReturn": 1.3564, "unitMoney": ""}, {
    "x": 1498060800000,
    "y": 0.811,
    "equityReturn": -1.3382,
    "unitMoney": ""
}, {"x": 1498147200000, "y": 0.821, "equityReturn": 1.233, "unitMoney": ""}, {
    "x": 1498406400000,
    "y": 0.836,
    "equityReturn": 1.827,
    "unitMoney": ""
}, {"x": 1498492800000, "y": 0.834, "equityReturn": -0.2392, "unitMoney": ""}, {
    "x": 1498579200000,
    "y": 0.829,
    "equityReturn": -0.5995,
    "unitMoney": ""
}, {"x": 1498665600000, "y": 0.839, "equityReturn": 1.2063, "unitMoney": ""}, {
    "x": 1498752000000,
    "y": 0.837,
    "equityReturn": -0.2384,
    "unitMoney": ""
}, {"x": 1499011200000, "y": 0.832, "equityReturn": -0.5974, "unitMoney": ""}, {
    "x": 1499097600000,
    "y": 0.831,
    "equityReturn": -0.1202,
    "unitMoney": ""
}, {"x": 1499184000000, "y": 0.837, "equityReturn": 0.722, "unitMoney": ""}, {
    "x": 1499270400000,
    "y": 0.84,
    "equityReturn": 0.3584,
    "unitMoney": ""
}, {"x": 1499356800000, "y": 0.836, "equityReturn": -0.4762, "unitMoney": ""}, {
    "x": 1499616000000,
    "y": 0.828,
    "equityReturn": -0.9569,
    "unitMoney": ""
}, {"x": 1499702400000, "y": 0.826, "equityReturn": -0.2415, "unitMoney": ""}, {
    "x": 1499788800000,
    "y": 0.826,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1499875200000, "y": 0.819, "equityReturn": -0.8475, "unitMoney": ""}, {
    "x": 1499961600000,
    "y": 0.823,
    "equityReturn": 0.4884,
    "unitMoney": ""
}, {"x": 1500220800000, "y": 0.801, "equityReturn": -2.6731, "unitMoney": ""}, {
    "x": 1500307200000,
    "y": 0.803,
    "equityReturn": 0.2497,
    "unitMoney": ""
}, {"x": 1500393600000, "y": 0.814, "equityReturn": 1.3699, "unitMoney": ""}, {
    "x": 1500480000000,
    "y": 0.824,
    "equityReturn": 1.2285,
    "unitMoney": ""
}, {"x": 1500566400000, "y": 0.822, "equityReturn": -0.2427, "unitMoney": ""}, {
    "x": 1500825600000,
    "y": 0.823,
    "equityReturn": 0.1217,
    "unitMoney": ""
}, {"x": 1500912000000, "y": 0.821, "equityReturn": -0.243, "unitMoney": ""}, {
    "x": 1500998400000,
    "y": 0.815,
    "equityReturn": -0.7308,
    "unitMoney": ""
}, {"x": 1501084800000, "y": 0.822, "equityReturn": 0.8589, "unitMoney": ""}, {
    "x": 1501171200000,
    "y": 0.828,
    "equityReturn": 0.7299,
    "unitMoney": ""
}, {"x": 1501430400000, "y": 0.836, "equityReturn": 0.9662, "unitMoney": ""}, {
    "x": 1501516800000,
    "y": 0.836,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1501603200000, "y": 0.831, "equityReturn": -0.5981, "unitMoney": ""}, {
    "x": 1501689600000,
    "y": 0.828,
    "equityReturn": -0.361,
    "unitMoney": ""
}, {"x": 1501776000000, "y": 0.824, "equityReturn": -0.4831, "unitMoney": ""}, {
    "x": 1502035200000,
    "y": 0.824,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1502121600000, "y": 0.828, "equityReturn": 0.4854, "unitMoney": ""}, {
    "x": 1502208000000,
    "y": 0.83,
    "equityReturn": 0.2415,
    "unitMoney": ""
}, {"x": 1502294400000, "y": 0.833, "equityReturn": 0.3614, "unitMoney": ""}, {
    "x": 1502380800000,
    "y": 0.825,
    "equityReturn": -0.9604,
    "unitMoney": ""
}, {"x": 1502640000000, "y": 0.84, "equityReturn": 1.8182, "unitMoney": ""}, {
    "x": 1502726400000,
    "y": 0.846,
    "equityReturn": 0.7143,
    "unitMoney": ""
}, {"x": 1502812800000, "y": 0.851, "equityReturn": 0.591, "unitMoney": ""}, {
    "x": 1502899200000,
    "y": 0.851,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1502985600000, "y": 0.854, "equityReturn": 0.3525, "unitMoney": ""}, {
    "x": 1503244800000,
    "y": 0.855,
    "equityReturn": 0.1171,
    "unitMoney": ""
}, {"x": 1503331200000, "y": 0.858, "equityReturn": 0.3509, "unitMoney": ""}, {
    "x": 1503417600000,
    "y": 0.858,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1503504000000, "y": 0.855, "equityReturn": -0.3497, "unitMoney": ""}, {
    "x": 1503590400000,
    "y": 0.861,
    "equityReturn": 0.7018,
    "unitMoney": ""
}, {"x": 1503849600000, "y": 0.871, "equityReturn": 1.1614, "unitMoney": ""}, {
    "x": 1503936000000,
    "y": 0.875,
    "equityReturn": 0.4592,
    "unitMoney": ""
}, {"x": 1504022400000, "y": 0.876, "equityReturn": 0.1143, "unitMoney": ""}, {
    "x": 1504108800000,
    "y": 0.879,
    "equityReturn": 0.3425,
    "unitMoney": ""
}, {"x": 1504195200000, "y": 0.879, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1504454400000,
    "y": 0.885,
    "equityReturn": 0.6826,
    "unitMoney": ""
}, {"x": 1504540800000, "y": 0.898, "equityReturn": 1.4689, "unitMoney": ""}, {
    "x": 1504627200000,
    "y": 0.896,
    "equityReturn": -0.2227,
    "unitMoney": ""
}, {"x": 1504713600000, "y": 0.901, "equityReturn": 0.558, "unitMoney": ""}, {
    "x": 1504800000000,
    "y": 0.902,
    "equityReturn": 0.111,
    "unitMoney": ""
}, {"x": 1505059200000, "y": 0.905, "equityReturn": 0.3326, "unitMoney": ""}, {
    "x": 1505145600000,
    "y": 0.908,
    "equityReturn": 0.3315,
    "unitMoney": ""
}, {"x": 1505232000000, "y": 0.911, "equityReturn": 0.3304, "unitMoney": ""}, {
    "x": 1505318400000,
    "y": 0.91,
    "equityReturn": -0.1098,
    "unitMoney": ""
}, {"x": 1505404800000, "y": 0.912, "equityReturn": 0.2198, "unitMoney": ""}, {
    "x": 1505664000000,
    "y": 0.916,
    "equityReturn": 0.4386,
    "unitMoney": ""
}, {"x": 1505750400000, "y": 0.916, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1505836800000,
    "y": 0.92,
    "equityReturn": 0.4367,
    "unitMoney": ""
}, {"x": 1505923200000, "y": 0.911, "equityReturn": -0.9783, "unitMoney": ""}, {
    "x": 1506009600000,
    "y": 0.906,
    "equityReturn": -0.5488,
    "unitMoney": ""
}, {"x": 1506268800000, "y": 0.906, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1506355200000,
    "y": 0.911,
    "equityReturn": 0.5519,
    "unitMoney": ""
}, {"x": 1506441600000, "y": 0.919, "equityReturn": 0.8782, "unitMoney": ""}, {
    "x": 1506528000000,
    "y": 0.928,
    "equityReturn": 0.9793,
    "unitMoney": ""
}, {"x": 1506614400000, "y": 0.938, "equityReturn": 1.0776, "unitMoney": ""}, {
    "x": 1507478400000,
    "y": 0.948,
    "equityReturn": 1.0661,
    "unitMoney": ""
}, {"x": 1507564800000, "y": 0.955, "equityReturn": 0.7384, "unitMoney": ""}, {
    "x": 1507651200000,
    "y": 0.955,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1507737600000, "y": 0.957, "equityReturn": 0.2094, "unitMoney": ""}, {
    "x": 1507824000000,
    "y": 0.958,
    "equityReturn": 0.1045,
    "unitMoney": ""
}, {"x": 1508083200000, "y": 0.953, "equityReturn": -0.5219, "unitMoney": ""}, {
    "x": 1508169600000,
    "y": 0.957,
    "equityReturn": 0.4197,
    "unitMoney": ""
}, {"x": 1508256000000, "y": 0.961, "equityReturn": 0.418, "unitMoney": ""}, {
    "x": 1508342400000,
    "y": 0.959,
    "equityReturn": -0.2081,
    "unitMoney": ""
}, {"x": 1508428800000, "y": 0.965, "equityReturn": 0.6257, "unitMoney": ""}, {
    "x": 1508688000000,
    "y": 0.972,
    "equityReturn": 0.7254,
    "unitMoney": ""
}, {"x": 1508774400000, "y": 0.967, "equityReturn": -0.5144, "unitMoney": ""}, {
    "x": 1508860800000,
    "y": 0.98,
    "equityReturn": 1.3444,
    "unitMoney": ""
}, {"x": 1508947200000, "y": 0.975, "equityReturn": -0.5102, "unitMoney": ""}, {
    "x": 1509033600000,
    "y": 0.974,
    "equityReturn": -0.1026,
    "unitMoney": ""
}, {"x": 1509292800000, "y": 0.969, "equityReturn": -0.5133, "unitMoney": ""}, {
    "x": 1509379200000,
    "y": 0.973,
    "equityReturn": 0.4128,
    "unitMoney": ""
}, {"x": 1509465600000, "y": 0.965, "equityReturn": -0.8222, "unitMoney": ""}, {
    "x": 1509552000000,
    "y": 0.973,
    "equityReturn": 0.829,
    "unitMoney": ""
}, {"x": 1509638400000, "y": 0.974, "equityReturn": 0.1028, "unitMoney": ""}, {
    "x": 1509897600000,
    "y": 0.999,
    "equityReturn": 2.5667,
    "unitMoney": ""
}, {"x": 1509984000000, "y": 1.0, "equityReturn": 0.1001, "unitMoney": ""}, {
    "x": 1510070400000,
    "y": 0.993,
    "equityReturn": -0.7,
    "unitMoney": ""
}, {"x": 1510156800000, "y": 0.993, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1510243200000,
    "y": 1.011,
    "equityReturn": 1.8127,
    "unitMoney": ""
}, {"x": 1510502400000, "y": 1.017, "equityReturn": 0.5935, "unitMoney": ""}, {
    "x": 1510588800000,
    "y": 1.011,
    "equityReturn": -0.59,
    "unitMoney": ""
}, {"x": 1510675200000, "y": 1.002, "equityReturn": -0.8902, "unitMoney": ""}, {
    "x": 1510761600000,
    "y": 1.02,
    "equityReturn": 1.7964,
    "unitMoney": ""
}, {"x": 1510848000000, "y": 1.004, "equityReturn": -1.5686, "unitMoney": ""}, {
    "x": 1511107200000,
    "y": 1.026,
    "equityReturn": 2.1912,
    "unitMoney": ""
}, {"x": 1511193600000, "y": 1.037, "equityReturn": 1.0721, "unitMoney": ""}, {
    "x": 1511280000000,
    "y": 1.037,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1511366400000, "y": 1.001, "equityReturn": -3.4716, "unitMoney": ""}, {
    "x": 1511452800000,
    "y": 0.989,
    "equityReturn": -1.1988,
    "unitMoney": ""
}, {"x": 1511712000000, "y": 0.97, "equityReturn": -1.9211, "unitMoney": ""}, {
    "x": 1511798400000,
    "y": 0.991,
    "equityReturn": 2.1649,
    "unitMoney": ""
}, {"x": 1511884800000, "y": 0.989, "equityReturn": -0.2018, "unitMoney": ""}, {
    "x": 1511971200000,
    "y": 0.979,
    "equityReturn": -1.0111,
    "unitMoney": ""
}, {"x": 1512057600000, "y": 0.993, "equityReturn": 1.43, "unitMoney": ""}, {
    "x": 1512316800000,
    "y": 0.99,
    "equityReturn": -0.3021,
    "unitMoney": ""
}, {"x": 1512403200000, "y": 0.976, "equityReturn": -1.4141, "unitMoney": ""}, {
    "x": 1512489600000,
    "y": 0.987,
    "equityReturn": 1.127,
    "unitMoney": ""
}, {"x": 1512576000000, "y": 0.979, "equityReturn": -0.8105, "unitMoney": ""}, {
    "x": 1512662400000,
    "y": 0.999,
    "equityReturn": 2.0429,
    "unitMoney": ""
}, {"x": 1512921600000, "y": 1.027, "equityReturn": 2.8028, "unitMoney": ""}, {
    "x": 1513008000000,
    "y": 1.022,
    "equityReturn": -0.4869,
    "unitMoney": ""
}, {"x": 1513094400000, "y": 1.029, "equityReturn": 0.6849, "unitMoney": ""}, {
    "x": 1513180800000,
    "y": 1.036,
    "equityReturn": 0.6803,
    "unitMoney": ""
}, {"x": 1513267200000, "y": 1.025, "equityReturn": -1.0618, "unitMoney": ""}, {
    "x": 1513526400000,
    "y": 0.999,
    "equityReturn": -2.5366,
    "unitMoney": ""
}, {"x": 1513612800000, "y": 1.022, "equityReturn": 2.3023, "unitMoney": ""}, {
    "x": 1513699200000,
    "y": 1.019,
    "equityReturn": -0.2935,
    "unitMoney": ""
}, {"x": 1513785600000, "y": 1.04, "equityReturn": 2.0608, "unitMoney": ""}, {
    "x": 1513872000000,
    "y": 1.039,
    "equityReturn": -0.0962,
    "unitMoney": ""
}, {"x": 1514131200000, "y": 1.032, "equityReturn": -0.6737, "unitMoney": ""}, {
    "x": 1514217600000,
    "y": 1.033,
    "equityReturn": 0.0969,
    "unitMoney": ""
}, {"x": 1514304000000, "y": 1.02, "equityReturn": -1.2585, "unitMoney": ""}, {
    "x": 1514390400000,
    "y": 1.022,
    "equityReturn": 0.1961,
    "unitMoney": ""
}, {"x": 1514476800000, "y": 1.037, "equityReturn": 1.4677, "unitMoney": ""}, {
    "x": 1514649600000,
    "y": 1.036,
    "equityReturn": 0,
    "unitMoney": ""
}, {"x": 1514822400000, "y": 1.046, "equityReturn": 0.8679, "unitMoney": ""}, {
    "x": 1514908800000,
    "y": 1.05,
    "equityReturn": 0.3824,
    "unitMoney": ""
}, {"x": 1514995200000, "y": 1.046, "equityReturn": -0.381, "unitMoney": ""}, {
    "x": 1515081600000,
    "y": 1.049,
    "equityReturn": 0.2868,
    "unitMoney": ""
}, {"x": 1515340800000, "y": 1.047, "equityReturn": -0.1907, "unitMoney": ""}, {
    "x": 1515427200000,
    "y": 1.044,
    "equityReturn": -0.2865,
    "unitMoney": ""
}, {"x": 1515513600000, "y": 1.041, "equityReturn": -0.2874, "unitMoney": ""}, {
    "x": 1515600000000,
    "y": 1.041,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1515686400000, "y": 1.044, "equityReturn": 0.2882, "unitMoney": ""}, {
    "x": 1515945600000,
    "y": 1.033,
    "equityReturn": -1.0536,
    "unitMoney": ""
}, {"x": 1516032000000, "y": 1.029, "equityReturn": -0.3872, "unitMoney": ""}, {
    "x": 1516118400000,
    "y": 1.02,
    "equityReturn": -0.8746,
    "unitMoney": ""
}, {"x": 1516204800000, "y": 1.019, "equityReturn": -0.098, "unitMoney": ""}, {
    "x": 1516291200000,
    "y": 1.015,
    "equityReturn": -0.3925,
    "unitMoney": ""
}, {"x": 1516550400000, "y": 1.036, "equityReturn": 2.069, "unitMoney": ""}, {
    "x": 1516636800000,
    "y": 1.04,
    "equityReturn": 0.3861,
    "unitMoney": ""
}, {"x": 1516723200000, "y": 1.044, "equityReturn": 0.3846, "unitMoney": ""}, {
    "x": 1516809600000,
    "y": 1.043,
    "equityReturn": -0.0958,
    "unitMoney": ""
}, {"x": 1516896000000, "y": 1.05, "equityReturn": 0.6711, "unitMoney": ""}, {
    "x": 1517155200000,
    "y": 1.028,
    "equityReturn": -2.0952,
    "unitMoney": ""
}, {"x": 1517241600000, "y": 1.03, "equityReturn": 0.1946, "unitMoney": ""}, {
    "x": 1517328000000,
    "y": 1.021,
    "equityReturn": -0.8738,
    "unitMoney": ""
}, {"x": 1517414400000, "y": 1.008, "equityReturn": -1.2733, "unitMoney": ""}, {
    "x": 1517500800000,
    "y": 1.02,
    "equityReturn": 1.1905,
    "unitMoney": ""
}, {"x": 1517760000000, "y": 1.017, "equityReturn": -0.2941, "unitMoney": ""}, {
    "x": 1517846400000,
    "y": 0.972,
    "equityReturn": -4.4248,
    "unitMoney": ""
}, {"x": 1517932800000, "y": 0.964, "equityReturn": -0.823, "unitMoney": ""}, {
    "x": 1518019200000,
    "y": 0.979,
    "equityReturn": 1.556,
    "unitMoney": ""
}, {"x": 1518105600000, "y": 0.959, "equityReturn": -2.0429, "unitMoney": ""}, {
    "x": 1518364800000,
    "y": 0.989,
    "equityReturn": 3.1283,
    "unitMoney": ""
}, {"x": 1518451200000, "y": 0.994, "equityReturn": 0.5056, "unitMoney": ""}, {
    "x": 1518537600000,
    "y": 0.997,
    "equityReturn": 0.3018,
    "unitMoney": ""
}, {"x": 1519228800000, "y": 1.02, "equityReturn": 2.3069, "unitMoney": ""}, {
    "x": 1519315200000,
    "y": 1.013,
    "equityReturn": -0.6863,
    "unitMoney": ""
}, {"x": 1519574400000, "y": 1.028, "equityReturn": 1.4808, "unitMoney": ""}, {
    "x": 1519660800000,
    "y": 1.035,
    "equityReturn": 0.6809,
    "unitMoney": ""
}, {"x": 1519747200000, "y": 1.044, "equityReturn": 0.8696, "unitMoney": ""}, {
    "x": 1519833600000,
    "y": 1.057,
    "equityReturn": 1.2452,
    "unitMoney": ""
}, {"x": 1519920000000, "y": 1.043, "equityReturn": -1.3245, "unitMoney": ""}, {
    "x": 1520179200000,
    "y": 1.049,
    "equityReturn": 0.5753,
    "unitMoney": ""
}, {"x": 1520265600000, "y": 1.068, "equityReturn": 1.8112, "unitMoney": ""}, {
    "x": 1520352000000,
    "y": 1.056,
    "equityReturn": -1.1236,
    "unitMoney": ""
}, {"x": 1520438400000, "y": 1.066, "equityReturn": 0.947, "unitMoney": ""}, {
    "x": 1520524800000,
    "y": 1.081,
    "equityReturn": 1.4071,
    "unitMoney": ""
}, {"x": 1520784000000, "y": 1.095, "equityReturn": 1.2951, "unitMoney": ""}, {
    "x": 1520870400000,
    "y": 1.083,
    "equityReturn": -1.0959,
    "unitMoney": ""
}, {"x": 1520956800000, "y": 1.065, "equityReturn": -1.662, "unitMoney": ""}, {
    "x": 1521043200000,
    "y": 1.07,
    "equityReturn": 0.4695,
    "unitMoney": ""
}, {"x": 1521129600000, "y": 1.06, "equityReturn": -0.9346, "unitMoney": ""}, {
    "x": 1521388800000,
    "y": 1.07,
    "equityReturn": 0.9434,
    "unitMoney": ""
}, {"x": 1521475200000, "y": 1.076, "equityReturn": 0.5607, "unitMoney": ""}, {
    "x": 1521561600000,
    "y": 1.066,
    "equityReturn": -0.9294,
    "unitMoney": ""
}, {"x": 1521648000000, "y": 1.058, "equityReturn": -0.7505, "unitMoney": ""}, {
    "x": 1521734400000,
    "y": 1.023,
    "equityReturn": -3.3081,
    "unitMoney": ""
}, {"x": 1521993600000, "y": 1.045, "equityReturn": 2.1505, "unitMoney": ""}, {
    "x": 1522080000000,
    "y": 1.067,
    "equityReturn": 2.1053,
    "unitMoney": ""
}, {"x": 1522166400000, "y": 1.049, "equityReturn": -1.687, "unitMoney": ""}, {
    "x": 1522252800000,
    "y": 1.05,
    "equityReturn": 0.0953,
    "unitMoney": ""
}, {"x": 1522339200000, "y": 1.068, "equityReturn": 1.7143, "unitMoney": ""}, {
    "x": 1522598400000,
    "y": 1.077,
    "equityReturn": 0.8427,
    "unitMoney": ""
}, {"x": 1522684800000, "y": 1.073, "equityReturn": -0.3714, "unitMoney": ""}, {
    "x": 1522771200000,
    "y": 1.063,
    "equityReturn": -0.932,
    "unitMoney": ""
}, {"x": 1523203200000, "y": 1.061, "equityReturn": -0.1881, "unitMoney": ""}, {
    "x": 1523289600000,
    "y": 1.061,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1523376000000, "y": 1.064, "equityReturn": 0.2828, "unitMoney": ""}, {
    "x": 1523462400000,
    "y": 1.062,
    "equityReturn": -0.188,
    "unitMoney": ""
}, {"x": 1523548800000, "y": 1.062, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1523808000000,
    "y": 1.07,
    "equityReturn": 0.7533,
    "unitMoney": ""
}, {"x": 1523894400000, "y": 1.047, "equityReturn": -2.1495, "unitMoney": ""}, {
    "x": 1523980800000,
    "y": 1.055,
    "equityReturn": 0.7641,
    "unitMoney": ""
}, {"x": 1524067200000, "y": 1.061, "equityReturn": 0.5687, "unitMoney": ""}, {
    "x": 1524153600000,
    "y": 1.05,
    "equityReturn": -1.0368,
    "unitMoney": ""
}, {"x": 1524412800000, "y": 1.031, "equityReturn": -1.8095, "unitMoney": ""}, {
    "x": 1524499200000,
    "y": 1.049,
    "equityReturn": 1.7459,
    "unitMoney": ""
}, {"x": 1524585600000, "y": 1.059, "equityReturn": 0.9533, "unitMoney": ""}, {
    "x": 1524672000000,
    "y": 1.046,
    "equityReturn": -1.2276,
    "unitMoney": ""
}, {"x": 1524758400000, "y": 1.051, "equityReturn": 0.478, "unitMoney": ""}, {
    "x": 1525190400000,
    "y": 1.06,
    "equityReturn": 0.8563,
    "unitMoney": ""
}, {"x": 1525276800000, "y": 1.074, "equityReturn": 1.3208, "unitMoney": ""}, {
    "x": 1525363200000,
    "y": 1.072,
    "equityReturn": -0.1862,
    "unitMoney": ""
}, {"x": 1525622400000, "y": 1.095, "equityReturn": 2.1455, "unitMoney": ""}, {
    "x": 1525708800000,
    "y": 1.099,
    "equityReturn": 0.3653,
    "unitMoney": ""
}, {"x": 1525795200000, "y": 1.094, "equityReturn": -0.455, "unitMoney": ""}, {
    "x": 1525881600000,
    "y": 1.1,
    "equityReturn": 0.5484,
    "unitMoney": ""
}, {"x": 1525968000000, "y": 1.088, "equityReturn": -1.0909, "unitMoney": ""}, {
    "x": 1526227200000,
    "y": 1.094,
    "equityReturn": 0.5515,
    "unitMoney": ""
}, {"x": 1526313600000, "y": 1.109, "equityReturn": 1.3711, "unitMoney": ""}, {
    "x": 1526400000000,
    "y": 1.104,
    "equityReturn": -0.4509,
    "unitMoney": ""
}, {"x": 1526486400000, "y": 1.091, "equityReturn": -1.1775, "unitMoney": ""}, {
    "x": 1526572800000,
    "y": 1.099,
    "equityReturn": 0.7333,
    "unitMoney": ""
}, {"x": 1526832000000, "y": 1.105, "equityReturn": 0.546, "unitMoney": ""}, {
    "x": 1526918400000,
    "y": 1.112,
    "equityReturn": 0.6335,
    "unitMoney": ""
}, {"x": 1527004800000, "y": 1.095, "equityReturn": -1.5288, "unitMoney": ""}, {
    "x": 1527091200000,
    "y": 1.092,
    "equityReturn": -0.274,
    "unitMoney": ""
}, {"x": 1527177600000, "y": 1.084, "equityReturn": -0.7326, "unitMoney": ""}, {
    "x": 1527436800000,
    "y": 1.085,
    "equityReturn": 0.0923,
    "unitMoney": ""
}, {"x": 1527523200000, "y": 1.083, "equityReturn": -0.1843, "unitMoney": ""}, {
    "x": 1527609600000,
    "y": 1.073,
    "equityReturn": -0.9234,
    "unitMoney": ""
}, {"x": 1527696000000, "y": 1.107, "equityReturn": 3.1687, "unitMoney": ""}, {
    "x": 1527782400000,
    "y": 1.088,
    "equityReturn": -1.7164,
    "unitMoney": ""
}, {"x": 1528041600000, "y": 1.09, "equityReturn": 0.1838, "unitMoney": ""}, {
    "x": 1528128000000,
    "y": 1.112,
    "equityReturn": 2.0183,
    "unitMoney": ""
}, {"x": 1528214400000, "y": 1.108, "equityReturn": -0.3597, "unitMoney": ""}, {
    "x": 1528300800000,
    "y": 1.099,
    "equityReturn": -0.8123,
    "unitMoney": ""
}, {"x": 1528387200000, "y": 1.092, "equityReturn": -0.6369, "unitMoney": ""}, {
    "x": 1528646400000,
    "y": 1.083,
    "equityReturn": -0.8242,
    "unitMoney": ""
}, {"x": 1528732800000, "y": 1.098, "equityReturn": 1.385, "unitMoney": ""}, {
    "x": 1528819200000,
    "y": 1.082,
    "equityReturn": -1.4572,
    "unitMoney": ""
}, {"x": 1528905600000, "y": 1.07, "equityReturn": -1.1091, "unitMoney": ""}, {
    "x": 1528992000000,
    "y": 1.058,
    "equityReturn": -1.1215,
    "unitMoney": ""
}, {"x": 1529337600000, "y": 1.017, "equityReturn": -3.8752, "unitMoney": ""}, {
    "x": 1529424000000,
    "y": 1.037,
    "equityReturn": 1.9666,
    "unitMoney": ""
}, {"x": 1529510400000, "y": 1.016, "equityReturn": -2.0251, "unitMoney": ""}, {
    "x": 1529596800000,
    "y": 1.022,
    "equityReturn": 0.5906,
    "unitMoney": ""
}, {"x": 1529856000000, "y": 1.012, "equityReturn": -0.9785, "unitMoney": ""}, {
    "x": 1529942400000,
    "y": 1.012,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1530028800000, "y": 0.987, "equityReturn": -2.4704, "unitMoney": ""}, {
    "x": 1530115200000,
    "y": 0.978,
    "equityReturn": -0.9119,
    "unitMoney": ""
}, {"x": 1530201600000, "y": 1.015, "equityReturn": 3.7832, "unitMoney": ""}, {
    "x": 1530288000000,
    "y": 1.015,
    "equityReturn": 0,
    "unitMoney": ""
}, {"x": 1530460800000, "y": 0.991, "equityReturn": -2.3645, "unitMoney": ""}, {
    "x": 1530547200000,
    "y": 0.991,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1530633600000, "y": 0.973, "equityReturn": -1.8163, "unitMoney": ""}, {
    "x": 1530720000000,
    "y": 0.961,
    "equityReturn": -1.2333,
    "unitMoney": ""
}, {"x": 1530806400000, "y": 0.972, "equityReturn": 1.1446, "unitMoney": ""}, {
    "x": 1531065600000,
    "y": 0.998,
    "equityReturn": 2.6749,
    "unitMoney": ""
}, {"x": 1531152000000, "y": 0.998, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1531238400000,
    "y": 0.981,
    "equityReturn": -1.7034,
    "unitMoney": ""
}, {"x": 1531324800000, "y": 1.004, "equityReturn": 2.3445, "unitMoney": ""}, {
    "x": 1531411200000,
    "y": 1.01,
    "equityReturn": 0.5976,
    "unitMoney": ""
}, {"x": 1531670400000, "y": 1.009, "equityReturn": -0.099, "unitMoney": ""}, {
    "x": 1531756800000,
    "y": 1.008,
    "equityReturn": -0.0991,
    "unitMoney": ""
}, {"x": 1531843200000, "y": 1.002, "equityReturn": -0.5952, "unitMoney": ""}, {
    "x": 1531929600000,
    "y": 1.012,
    "equityReturn": 0.998,
    "unitMoney": ""
}, {"x": 1532016000000, "y": 1.016, "equityReturn": 0.3953, "unitMoney": ""}, {
    "x": 1532275200000,
    "y": 1.022,
    "equityReturn": 0.5906,
    "unitMoney": ""
}, {"x": 1532361600000, "y": 1.035, "equityReturn": 1.272, "unitMoney": ""}, {
    "x": 1532448000000,
    "y": 1.034,
    "equityReturn": -0.0966,
    "unitMoney": ""
}, {"x": 1532534400000, "y": 1.021, "equityReturn": -1.2573, "unitMoney": ""}, {
    "x": 1532620800000,
    "y": 1.016,
    "equityReturn": -0.4897,
    "unitMoney": ""
}, {"x": 1532880000000, "y": 0.996, "equityReturn": -1.9685, "unitMoney": ""}, {
    "x": 1532966400000,
    "y": 0.993,
    "equityReturn": -0.3012,
    "unitMoney": ""
}, {"x": 1533052800000, "y": 0.987, "equityReturn": -0.6042, "unitMoney": ""}, {
    "x": 1533139200000,
    "y": 0.967,
    "equityReturn": -2.0263,
    "unitMoney": ""
}, {"x": 1533225600000, "y": 0.95, "equityReturn": -1.758, "unitMoney": ""}, {
    "x": 1533484800000,
    "y": 0.933,
    "equityReturn": -1.7895,
    "unitMoney": ""
}, {"x": 1533571200000, "y": 0.959, "equityReturn": 2.7867, "unitMoney": ""}, {
    "x": 1533657600000,
    "y": 0.935,
    "equityReturn": -2.5026,
    "unitMoney": ""
}, {"x": 1533744000000, "y": 0.955, "equityReturn": 2.139, "unitMoney": ""}, {
    "x": 1533830400000,
    "y": 0.963,
    "equityReturn": 0.8377,
    "unitMoney": ""
}, {"x": 1534089600000, "y": 0.961, "equityReturn": -0.2077, "unitMoney": ""}, {
    "x": 1534176000000,
    "y": 0.957,
    "equityReturn": -0.4162,
    "unitMoney": ""
}, {"x": 1534262400000, "y": 0.933, "equityReturn": -2.5078, "unitMoney": ""}, {
    "x": 1534348800000,
    "y": 0.922,
    "equityReturn": -1.179,
    "unitMoney": ""
}, {"x": 1534435200000, "y": 0.905, "equityReturn": -1.8438, "unitMoney": ""}, {
    "x": 1534694400000,
    "y": 0.905,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1534780800000, "y": 0.921, "equityReturn": 1.768, "unitMoney": ""}, {
    "x": 1534867200000,
    "y": 0.914,
    "equityReturn": -0.76,
    "unitMoney": ""
}, {"x": 1534953600000, "y": 0.919, "equityReturn": 0.547, "unitMoney": ""}, {
    "x": 1535040000000,
    "y": 0.913,
    "equityReturn": -0.6529,
    "unitMoney": ""
}, {"x": 1535299200000, "y": 0.933, "equityReturn": 2.1906, "unitMoney": ""}, {
    "x": 1535385600000,
    "y": 0.934,
    "equityReturn": 0.1072,
    "unitMoney": ""
}, {"x": 1535472000000, "y": 0.924, "equityReturn": -1.0707, "unitMoney": ""}, {
    "x": 1535558400000,
    "y": 0.915,
    "equityReturn": -0.974,
    "unitMoney": ""
}, {"x": 1535644800000, "y": 0.904, "equityReturn": -1.2022, "unitMoney": ""}, {
    "x": 1535904000000,
    "y": 0.904,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1535990400000, "y": 0.913, "equityReturn": 0.9956, "unitMoney": ""}, {
    "x": 1536076800000,
    "y": 0.9,
    "equityReturn": -1.4239,
    "unitMoney": ""
}, {"x": 1536163200000, "y": 0.89, "equityReturn": -1.1111, "unitMoney": ""}, {
    "x": 1536249600000,
    "y": 0.889,
    "equityReturn": -0.1124,
    "unitMoney": ""
}, {"x": 1536508800000, "y": 0.869, "equityReturn": -2.2497, "unitMoney": ""}, {
    "x": 1536595200000,
    "y": 0.871,
    "equityReturn": 0.2301,
    "unitMoney": ""
}, {"x": 1536681600000, "y": 0.869, "equityReturn": -0.2296, "unitMoney": ""}, {
    "x": 1536768000000,
    "y": 0.877,
    "equityReturn": 0.9206,
    "unitMoney": ""
}, {"x": 1536854400000, "y": 0.874, "equityReturn": -0.3421, "unitMoney": ""}, {
    "x": 1537113600000,
    "y": 0.861,
    "equityReturn": -1.4874,
    "unitMoney": ""
}, {"x": 1537200000000, "y": 0.877, "equityReturn": 1.8583, "unitMoney": ""}, {
    "x": 1537286400000,
    "y": 0.889,
    "equityReturn": 1.3683,
    "unitMoney": ""
}, {"x": 1537372800000, "y": 0.888, "equityReturn": -0.1125, "unitMoney": ""}, {
    "x": 1537459200000,
    "y": 0.907,
    "equityReturn": 2.1396,
    "unitMoney": ""
}, {"x": 1537804800000, "y": 0.904, "equityReturn": -0.3308, "unitMoney": ""}, {
    "x": 1537891200000,
    "y": 0.912,
    "equityReturn": 0.885,
    "unitMoney": ""
}, {"x": 1537977600000, "y": 0.902, "equityReturn": -1.0965, "unitMoney": ""}, {
    "x": 1538064000000,
    "y": 0.917,
    "equityReturn": 1.663,
    "unitMoney": ""
}, {"x": 1538928000000, "y": 0.883, "equityReturn": -3.7077, "unitMoney": ""}, {
    "x": 1539014400000,
    "y": 0.878,
    "equityReturn": -0.5663,
    "unitMoney": ""
}, {"x": 1539100800000, "y": 0.882, "equityReturn": 0.4556, "unitMoney": ""}, {
    "x": 1539187200000,
    "y": 0.837,
    "equityReturn": -5.102,
    "unitMoney": ""
}, {"x": 1539273600000, "y": 0.845, "equityReturn": 0.9558, "unitMoney": ""}, {
    "x": 1539532800000,
    "y": 0.836,
    "equityReturn": -1.0651,
    "unitMoney": ""
}, {"x": 1539619200000, "y": 0.816, "equityReturn": -2.3923, "unitMoney": ""}, {
    "x": 1539705600000,
    "y": 0.819,
    "equityReturn": 0.3676,
    "unitMoney": ""
}, {"x": 1539792000000, "y": 0.806, "equityReturn": -1.5873, "unitMoney": ""}, {
    "x": 1539878400000,
    "y": 0.833,
    "equityReturn": 3.3499,
    "unitMoney": ""
}, {"x": 1540137600000, "y": 0.869, "equityReturn": 4.3217, "unitMoney": ""}, {
    "x": 1540224000000,
    "y": 0.85,
    "equityReturn": -2.1864,
    "unitMoney": ""
}, {"x": 1540310400000, "y": 0.844, "equityReturn": -0.7059, "unitMoney": ""}, {
    "x": 1540396800000,
    "y": 0.837,
    "equityReturn": -0.8294,
    "unitMoney": ""
}, {"x": 1540483200000, "y": 0.831, "equityReturn": -0.7168, "unitMoney": ""}, {
    "x": 1540742400000,
    "y": 0.821,
    "equityReturn": -1.2034,
    "unitMoney": ""
}, {"x": 1540828800000, "y": 0.827, "equityReturn": 0.7308, "unitMoney": ""}, {
    "x": 1540915200000,
    "y": 0.833,
    "equityReturn": 0.7255,
    "unitMoney": ""
}, {"x": 1541001600000, "y": 0.844, "equityReturn": 1.3205, "unitMoney": ""}, {
    "x": 1541088000000,
    "y": 0.873,
    "equityReturn": 3.436,
    "unitMoney": ""
}, {"x": 1541347200000, "y": 0.867, "equityReturn": -0.6873, "unitMoney": ""}, {
    "x": 1541433600000,
    "y": 0.862,
    "equityReturn": -0.5767,
    "unitMoney": ""
}, {"x": 1541520000000, "y": 0.859, "equityReturn": -0.348, "unitMoney": ""}, {
    "x": 1541606400000,
    "y": 0.85,
    "equityReturn": -1.0477,
    "unitMoney": ""
}, {"x": 1541692800000, "y": 0.848, "equityReturn": -0.2353, "unitMoney": ""}, {
    "x": 1541952000000,
    "y": 0.867,
    "equityReturn": 2.2406,
    "unitMoney": ""
}, {"x": 1542038400000, "y": 0.875, "equityReturn": 0.9227, "unitMoney": ""}, {
    "x": 1542124800000,
    "y": 0.867,
    "equityReturn": -0.9143,
    "unitMoney": ""
}, {"x": 1542211200000, "y": 0.878, "equityReturn": 1.2687, "unitMoney": ""}, {
    "x": 1542297600000,
    "y": 0.888,
    "equityReturn": 1.139,
    "unitMoney": ""
}, {"x": 1542556800000, "y": 0.884, "equityReturn": -0.4505, "unitMoney": ""}, {
    "x": 1542643200000,
    "y": 0.86,
    "equityReturn": -2.7149,
    "unitMoney": ""
}, {"x": 1542729600000, "y": 0.861, "equityReturn": 0.1163, "unitMoney": ""}, {
    "x": 1542816000000,
    "y": 0.86,
    "equityReturn": -0.1161,
    "unitMoney": ""
}, {"x": 1542902400000, "y": 0.837, "equityReturn": -2.6744, "unitMoney": ""}, {
    "x": 1543161600000,
    "y": 0.833,
    "equityReturn": -0.4779,
    "unitMoney": ""
}, {"x": 1543248000000, "y": 0.833, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1543334400000,
    "y": 0.847,
    "equityReturn": 1.6807,
    "unitMoney": ""
}, {"x": 1543420800000, "y": 0.835, "equityReturn": -1.4168, "unitMoney": ""}, {
    "x": 1543507200000,
    "y": 0.844,
    "equityReturn": 1.0778,
    "unitMoney": ""
}, {"x": 1543766400000, "y": 0.867, "equityReturn": 2.7251, "unitMoney": ""}, {
    "x": 1543852800000,
    "y": 0.868,
    "equityReturn": 0.1153,
    "unitMoney": ""
}, {"x": 1543939200000, "y": 0.866, "equityReturn": -0.2304, "unitMoney": ""}, {
    "x": 1544025600000,
    "y": 0.851,
    "equityReturn": -1.7321,
    "unitMoney": ""
}, {"x": 1544112000000, "y": 0.852, "equityReturn": 0.1175, "unitMoney": ""}, {
    "x": 1544371200000,
    "y": 0.849,
    "equityReturn": -0.3521,
    "unitMoney": ""
}, {"x": 1544457600000, "y": 0.859, "equityReturn": 1.1779, "unitMoney": ""}, {
    "x": 1544544000000,
    "y": 0.858,
    "equityReturn": -0.1164,
    "unitMoney": ""
}, {"x": 1544630400000, "y": 0.865, "equityReturn": 0.8159, "unitMoney": ""}, {
    "x": 1544716800000,
    "y": 0.848,
    "equityReturn": -1.9653,
    "unitMoney": ""
}, {"x": 1544976000000, "y": 0.841, "equityReturn": -0.8255, "unitMoney": ""}, {
    "x": 1545062400000,
    "y": 0.832,
    "equityReturn": -1.0702,
    "unitMoney": ""
}, {"x": 1545148800000, "y": 0.823, "equityReturn": -1.0817, "unitMoney": ""}, {
    "x": 1545235200000,
    "y": 0.825,
    "equityReturn": 0.243,
    "unitMoney": ""
}, {"x": 1545321600000, "y": 0.819, "equityReturn": -0.7273, "unitMoney": ""}, {
    "x": 1545580800000,
    "y": 0.828,
    "equityReturn": 1.0989,
    "unitMoney": ""
}, {"x": 1545667200000, "y": 0.822, "equityReturn": -0.7246, "unitMoney": ""}, {
    "x": 1545753600000,
    "y": 0.818,
    "equityReturn": -0.4866,
    "unitMoney": ""
}, {"x": 1545840000000, "y": 0.803, "equityReturn": -1.8337, "unitMoney": ""}, {
    "x": 1545926400000,
    "y": 0.802,
    "equityReturn": -0.1245,
    "unitMoney": ""
}, {"x": 1546185600000, "y": 0.802, "equityReturn": 0, "unitMoney": ""}, {
    "x": 1546358400000,
    "y": 0.792,
    "equityReturn": -1.2469,
    "unitMoney": ""
}, {"x": 1546444800000, "y": 0.784, "equityReturn": -1.0101, "unitMoney": ""}, {
    "x": 1546531200000,
    "y": 0.799,
    "equityReturn": 1.9133,
    "unitMoney": ""
}, {"x": 1546790400000, "y": 0.815, "equityReturn": 2.0025, "unitMoney": ""}, {
    "x": 1546876800000,
    "y": 0.818,
    "equityReturn": 0.3681,
    "unitMoney": ""
}, {"x": 1546963200000, "y": 0.821, "equityReturn": 0.3667, "unitMoney": ""}, {
    "x": 1547049600000,
    "y": 0.819,
    "equityReturn": -0.2436,
    "unitMoney": ""
}, {"x": 1547136000000, "y": 0.829, "equityReturn": 1.221, "unitMoney": ""}, {
    "x": 1547395200000,
    "y": 0.821,
    "equityReturn": -0.965,
    "unitMoney": ""
}, {"x": 1547481600000, "y": 0.831, "equityReturn": 1.218, "unitMoney": ""}, {
    "x": 1547568000000,
    "y": 0.825,
    "equityReturn": -0.722,
    "unitMoney": ""
}, {"x": 1547654400000, "y": 0.816, "equityReturn": -1.0909, "unitMoney": ""}, {
    "x": 1547740800000,
    "y": 0.821,
    "equityReturn": 0.6127,
    "unitMoney": ""
}, {"x": 1548000000000, "y": 0.833, "equityReturn": 1.4616, "unitMoney": ""}, {
    "x": 1548086400000,
    "y": 0.829,
    "equityReturn": -0.4802,
    "unitMoney": ""
}, {"x": 1548172800000, "y": 0.831, "equityReturn": 0.2413, "unitMoney": ""}, {
    "x": 1548259200000,
    "y": 0.837,
    "equityReturn": 0.722,
    "unitMoney": ""
}, {"x": 1548345600000, "y": 0.843, "equityReturn": 0.7168, "unitMoney": ""}, {
    "x": 1548604800000,
    "y": 0.841,
    "equityReturn": -0.2372,
    "unitMoney": ""
}, {"x": 1548691200000, "y": 0.833, "equityReturn": -0.9512, "unitMoney": ""}, {
    "x": 1548777600000,
    "y": 0.829,
    "equityReturn": -0.4802,
    "unitMoney": ""
}, {"x": 1548864000000, "y": 0.828, "equityReturn": -0.1206, "unitMoney": ""}, {
    "x": 1548950400000,
    "y": 0.846,
    "equityReturn": 2.1739,
    "unitMoney": ""
}, {"x": 1549814400000, "y": 0.863, "equityReturn": 2.0095, "unitMoney": ""}, {
    "x": 1549900800000,
    "y": 0.878,
    "equityReturn": 1.7381,
    "unitMoney": ""
}, {"x": 1549987200000, "y": 0.89, "equityReturn": 1.3667, "unitMoney": ""}, {
    "x": 1550073600000,
    "y": 0.889,
    "equityReturn": -0.1124,
    "unitMoney": ""
}, {"x": 1550160000000, "y": 0.879, "equityReturn": -1.1249, "unitMoney": ""}, {
    "x": 1550419200000,
    "y": 0.903,
    "equityReturn": 2.7304,
    "unitMoney": ""
}, {"x": 1550505600000, "y": 0.898, "equityReturn": -0.5537, "unitMoney": ""}, {
    "x": 1550592000000,
    "y": 0.894,
    "equityReturn": -0.4454,
    "unitMoney": ""
}, {"x": 1550678400000, "y": 0.891, "equityReturn": -0.3356, "unitMoney": ""}, {
    "x": 1550764800000,
    "y": 0.909,
    "equityReturn": 2.0202,
    "unitMoney": ""
}, {"x": 1551024000000, "y": 0.951, "equityReturn": 4.6205, "unitMoney": ""}, {
    "x": 1551110400000,
    "y": 0.945,
    "equityReturn": -0.6309,
    "unitMoney": ""
}, {"x": 1551196800000, "y": 0.938, "equityReturn": -0.7407, "unitMoney": ""}, {
    "x": 1551283200000,
    "y": 0.941,
    "equityReturn": 0.3198,
    "unitMoney": ""
}, {"x": 1551369600000, "y": 0.945, "equityReturn": 0.4251, "unitMoney": ""}, {
    "x": 1551628800000,
    "y": 0.957,
    "equityReturn": 1.2698,
    "unitMoney": ""
}, {"x": 1551715200000, "y": 0.973, "equityReturn": 1.6719, "unitMoney": ""}, {
    "x": 1551801600000,
    "y": 0.984,
    "equityReturn": 1.1305,
    "unitMoney": ""
}, {"x": 1551888000000, "y": 0.985, "equityReturn": 0.1016, "unitMoney": ""}, {
    "x": 1551974400000,
    "y": 0.964,
    "equityReturn": -2.132,
    "unitMoney": ""
}, {"x": 1552233600000, "y": 0.999, "equityReturn": 3.6307, "unitMoney": ""}, {
    "x": 1552320000000,
    "y": 1.012,
    "equityReturn": 1.3013,
    "unitMoney": ""
}, {"x": 1552406400000, "y": 1.0, "equityReturn": -1.1858, "unitMoney": ""}, {
    "x": 1552492800000,
    "y": 0.983,
    "equityReturn": -1.7,
    "unitMoney": ""
}, {"x": 1552579200000, "y": 0.993, "equityReturn": 1.0173, "unitMoney": ""}, {
    "x": 1552838400000,
    "y": 1.016,
    "equityReturn": 2.3162,
    "unitMoney": ""
}, {"x": 1552924800000, "y": 1.014, "equityReturn": -0.1969, "unitMoney": ""}, {
    "x": 1553011200000,
    "y": 1.008,
    "equityReturn": -0.5917,
    "unitMoney": ""
}, {"x": 1553097600000, "y": 1.017, "equityReturn": 0.8929, "unitMoney": ""}, {
    "x": 1553184000000,
    "y": 1.019,
    "equityReturn": 0.1967,
    "unitMoney": ""
}, {"x": 1553443200000, "y": 1.004, "equityReturn": -1.472, "unitMoney": ""}, {
    "x": 1553529600000,
    "y": 0.986,
    "equityReturn": -1.7928,
    "unitMoney": ""
}, {"x": 1553616000000, "y": 0.996, "equityReturn": 1.0142, "unitMoney": ""}, {
    "x": 1553702400000,
    "y": 0.992,
    "equityReturn": -0.4016,
    "unitMoney": ""
}, {"x": 1553788800000, "y": 1.017, "equityReturn": 2.5202, "unitMoney": ""}, {
    "x": 1554048000000,
    "y": 1.046,
    "equityReturn": 2.8515,
    "unitMoney": ""
}, {"x": 1554134400000, "y": 1.048, "equityReturn": 0.1912, "unitMoney": ""}, {
    "x": 1554220800000,
    "y": 1.069,
    "equityReturn": 2.0038,
    "unitMoney": ""
}, {"x": 1554307200000, "y": 1.073, "equityReturn": 0.3742, "unitMoney": ""}, {
    "x": 1554652800000,
    "y": 1.071,
    "equityReturn": -0.1864,
    "unitMoney": ""
}, {"x": 1554739200000, "y": 1.068, "equityReturn": -0.2801, "unitMoney": ""}, {
    "x": 1554825600000,
    "y": 1.081,
    "equityReturn": 1.2172,
    "unitMoney": ""
}, {"x": 1554912000000, "y": 1.06, "equityReturn": -1.9426, "unitMoney": ""}, {
    "x": 1554998400000,
    "y": 1.064,
    "equityReturn": 0.3774,
    "unitMoney": ""
}, {"x": 1555257600000, "y": 1.061, "equityReturn": -0.282, "unitMoney": ""}, {
    "x": 1555344000000,
    "y": 1.081,
    "equityReturn": 1.885,
    "unitMoney": ""
}, {"x": 1555430400000, "y": 1.086, "equityReturn": 0.4625, "unitMoney": ""}, {
    "x": 1555516800000,
    "y": 1.087,
    "equityReturn": 0.0921,
    "unitMoney": ""
}, {"x": 1555603200000, "y": 1.099, "equityReturn": 1.104, "unitMoney": ""}, {
    "x": 1555862400000,
    "y": 1.087,
    "equityReturn": -1.0919,
    "unitMoney": ""
}, {"x": 1555948800000, "y": 1.074, "equityReturn": -1.196, "unitMoney": ""}, {
    "x": 1556035200000,
    "y": 1.081,
    "equityReturn": 0.6518,
    "unitMoney": ""
}, {"x": 1556121600000, "y": 1.056, "equityReturn": -2.3127, "unitMoney": ""}, {
    "x": 1556208000000,
    "y": 1.048,
    "equityReturn": -0.7576,
    "unitMoney": ""
}, {"x": 1556467200000, "y": 1.04, "equityReturn": -0.7634, "unitMoney": ""}, {
    "x": 1556553600000,
    "y": 1.042,
    "equityReturn": 0.1923,
    "unitMoney": ""
}, {"x": 1557072000000, "y": 0.984, "equityReturn": -5.5662, "unitMoney": ""}, {
    "x": 1557158400000,
    "y": 0.991,
    "equityReturn": 0.7114,
    "unitMoney": ""
}, {"x": 1557244800000, "y": 0.986, "equityReturn": -0.5045, "unitMoney": ""}, {
    "x": 1557331200000,
    "y": 0.969,
    "equityReturn": -1.7241,
    "unitMoney": ""
}, {"x": 1557417600000, "y": 1.002, "equityReturn": 3.4056, "unitMoney": ""}, {
    "x": 1557676800000,
    "y": 0.997,
    "equityReturn": -0.499,
    "unitMoney": ""
}, {"x": 1557763200000, "y": 0.992, "equityReturn": -0.5015, "unitMoney": ""}, {
    "x": 1557849600000,
    "y": 1.014,
    "equityReturn": 2.2177,
    "unitMoney": ""
}, {"x": 1557936000000, "y": 1.02, "equityReturn": 0.5917, "unitMoney": ""}, {
    "x": 1558022400000,
    "y": 0.997,
    "equityReturn": -2.2549,
    "unitMoney": ""
}, {"x": 1558281600000, "y": 0.983, "equityReturn": -1.4042, "unitMoney": ""}, {
    "x": 1558368000000,
    "y": 0.996,
    "equityReturn": 1.3225,
    "unitMoney": ""
}, {"x": 1558454400000, "y": 0.993, "equityReturn": -0.3012, "unitMoney": ""}, {
    "x": 1558540800000,
    "y": 0.969,
    "equityReturn": -2.4169,
    "unitMoney": ""
}, {"x": 1558627200000, "y": 0.967, "equityReturn": -0.2064, "unitMoney": ""}, {
    "x": 1558886400000,
    "y": 0.981,
    "equityReturn": 1.4478,
    "unitMoney": ""
}, {"x": 1558972800000, "y": 0.983, "equityReturn": 0.2039, "unitMoney": ""}, {
    "x": 1559059200000,
    "y": 0.983,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1559145600000, "y": 0.976, "equityReturn": -0.7121, "unitMoney": ""}, {
    "x": 1559232000000,
    "y": 0.973,
    "equityReturn": -0.3074,
    "unitMoney": ""
}, {"x": 1559491200000, "y": 0.974, "equityReturn": 0.1028, "unitMoney": ""}, {
    "x": 1559577600000,
    "y": 0.965,
    "equityReturn": -0.924,
    "unitMoney": ""
}, {"x": 1559664000000, "y": 0.966, "equityReturn": 0.1036, "unitMoney": ""}, {
    "x": 1559750400000,
    "y": 0.953,
    "equityReturn": -1.3458,
    "unitMoney": ""
}, {"x": 1560096000000, "y": 0.963, "equityReturn": 1.0493, "unitMoney": ""}, {
    "x": 1560182400000,
    "y": 0.991,
    "equityReturn": 2.9076,
    "unitMoney": ""
}, {"x": 1560268800000, "y": 0.984, "equityReturn": -0.7064, "unitMoney": ""}, {
    "x": 1560355200000,
    "y": 0.984,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1560441600000, "y": 0.976, "equityReturn": -0.813, "unitMoney": ""}, {
    "x": 1560700800000,
    "y": 0.973,
    "equityReturn": -0.3074,
    "unitMoney": ""
}, {"x": 1560787200000, "y": 0.973, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1560873600000,
    "y": 0.99,
    "equityReturn": 1.7472,
    "unitMoney": ""
}, {"x": 1560960000000, "y": 1.004, "equityReturn": 1.4141, "unitMoney": ""}, {
    "x": 1561046400000,
    "y": 1.008,
    "equityReturn": 0.3984,
    "unitMoney": ""
}, {"x": 1561305600000, "y": 1.007, "equityReturn": -0.0992, "unitMoney": ""}, {
    "x": 1561392000000,
    "y": 0.999,
    "equityReturn": -0.7944,
    "unitMoney": ""
}, {"x": 1561478400000, "y": 0.999, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1561564800000,
    "y": 1.011,
    "equityReturn": 1.2012,
    "unitMoney": ""
}, {"x": 1561651200000, "y": 1.005, "equityReturn": -0.5935, "unitMoney": ""}, {
    "x": 1561824000000,
    "y": 1.005,
    "equityReturn": 0,
    "unitMoney": ""
}, {"x": 1561910400000, "y": 1.031, "equityReturn": 2.5871, "unitMoney": ""}, {
    "x": 1561996800000,
    "y": 1.039,
    "equityReturn": 0.7759,
    "unitMoney": ""
}, {"x": 1562083200000, "y": 1.029, "equityReturn": -0.9625, "unitMoney": ""}, {
    "x": 1562169600000,
    "y": 1.026,
    "equityReturn": -0.2915,
    "unitMoney": ""
}, {"x": 1562256000000, "y": 1.036, "equityReturn": 0.9747, "unitMoney": ""}, {
    "x": 1562515200000,
    "y": 1.016,
    "equityReturn": -1.9305,
    "unitMoney": ""
}, {"x": 1562601600000, "y": 1.012, "equityReturn": -0.3937, "unitMoney": ""}, {
    "x": 1562688000000,
    "y": 1.008,
    "equityReturn": -0.3953,
    "unitMoney": ""
}, {"x": 1562774400000, "y": 1.01, "equityReturn": 0.1984, "unitMoney": ""}, {
    "x": 1562860800000,
    "y": 1.011,
    "equityReturn": 0.099,
    "unitMoney": ""
}, {"x": 1563120000000, "y": 1.011, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1563206400000,
    "y": 1.013,
    "equityReturn": 0.1978,
    "unitMoney": ""
}, {"x": 1563292800000, "y": 1.01, "equityReturn": -0.2962, "unitMoney": ""}, {
    "x": 1563379200000,
    "y": 0.996,
    "equityReturn": -1.3861,
    "unitMoney": ""
}, {"x": 1563465600000, "y": 1.002, "equityReturn": 0.6024, "unitMoney": ""}, {
    "x": 1563724800000,
    "y": 1.004,
    "equityReturn": 0.1996,
    "unitMoney": ""
}, {"x": 1563811200000, "y": 1.014, "equityReturn": 0.996, "unitMoney": ""}, {
    "x": 1563897600000,
    "y": 1.03,
    "equityReturn": 1.5779,
    "unitMoney": ""
}, {"x": 1563984000000, "y": 1.032, "equityReturn": 0.1942, "unitMoney": ""}, {
    "x": 1564070400000,
    "y": 1.036,
    "equityReturn": 0.3876,
    "unitMoney": ""
}, {"x": 1564329600000, "y": 1.037, "equityReturn": 0.0965, "unitMoney": ""}, {
    "x": 1564416000000,
    "y": 1.037,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1564502400000, "y": 1.033, "equityReturn": -0.3857, "unitMoney": ""}, {
    "x": 1564588800000,
    "y": 1.024,
    "equityReturn": -0.8712,
    "unitMoney": ""
}, {"x": 1564675200000, "y": 1.013, "equityReturn": -1.0742, "unitMoney": ""}, {
    "x": 1564934400000,
    "y": 0.997,
    "equityReturn": -1.5795,
    "unitMoney": ""
}, {"x": 1565020800000, "y": 0.986, "equityReturn": -1.1033, "unitMoney": ""}, {
    "x": 1565107200000,
    "y": 0.983,
    "equityReturn": -0.3043,
    "unitMoney": ""
}, {"x": 1565193600000, "y": 0.991, "equityReturn": 0.8138, "unitMoney": ""}, {
    "x": 1565280000000,
    "y": 0.984,
    "equityReturn": -0.7064,
    "unitMoney": ""
}, {"x": 1565539200000, "y": 1.009, "equityReturn": 2.5407, "unitMoney": ""}, {
    "x": 1565625600000,
    "y": 1.007,
    "equityReturn": -0.1982,
    "unitMoney": ""
}, {"x": 1565712000000, "y": 1.012, "equityReturn": 0.4965, "unitMoney": ""}, {
    "x": 1565798400000,
    "y": 1.013,
    "equityReturn": 0.0988,
    "unitMoney": ""
}, {"x": 1565884800000, "y": 1.027, "equityReturn": 1.382, "unitMoney": ""}, {
    "x": 1566144000000,
    "y": 1.055,
    "equityReturn": 2.7264,
    "unitMoney": ""
}, {"x": 1566230400000, "y": 1.052, "equityReturn": -0.2844, "unitMoney": ""}, {
    "x": 1566316800000,
    "y": 1.055,
    "equityReturn": 0.2852,
    "unitMoney": ""
}, {"x": 1566403200000, "y": 1.057, "equityReturn": 0.1896, "unitMoney": ""}, {
    "x": 1566489600000,
    "y": 1.055,
    "equityReturn": -0.1892,
    "unitMoney": ""
}, {"x": 1566748800000, "y": 1.053, "equityReturn": -0.1896, "unitMoney": ""}, {
    "x": 1566835200000,
    "y": 1.067,
    "equityReturn": 1.3295,
    "unitMoney": ""
}, {"x": 1566921600000, "y": 1.063, "equityReturn": -0.3749, "unitMoney": ""}, {
    "x": 1567008000000,
    "y": 1.067,
    "equityReturn": 0.3763,
    "unitMoney": ""
}, {"x": 1567094400000, "y": 1.068, "equityReturn": 0.0937, "unitMoney": ""}, {
    "x": 1567353600000,
    "y": 1.088,
    "equityReturn": 1.8727,
    "unitMoney": ""
}, {"x": 1567440000000, "y": 1.096, "equityReturn": 0.7353, "unitMoney": ""}, {
    "x": 1567526400000,
    "y": 1.095,
    "equityReturn": -0.0912,
    "unitMoney": ""
}, {"x": 1567612800000, "y": 1.108, "equityReturn": 1.1872, "unitMoney": ""}, {
    "x": 1567699200000,
    "y": 1.108,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1567958400000, "y": 1.128, "equityReturn": 1.8051, "unitMoney": ""}, {
    "x": 1568044800000,
    "y": 1.131,
    "equityReturn": 0.266,
    "unitMoney": ""
}, {"x": 1568131200000, "y": 1.114, "equityReturn": -1.5031, "unitMoney": ""}, {
    "x": 1568217600000,
    "y": 1.12,
    "equityReturn": 0.5386,
    "unitMoney": ""
}, {"x": 1568563200000, "y": 1.119, "equityReturn": -0.0893, "unitMoney": ""}, {
    "x": 1568649600000,
    "y": 1.097,
    "equityReturn": -1.966,
    "unitMoney": ""
}, {"x": 1568736000000, "y": 1.1, "equityReturn": 0.2735, "unitMoney": ""}, {
    "x": 1568822400000,
    "y": 1.117,
    "equityReturn": 1.5455,
    "unitMoney": ""
}, {"x": 1568908800000, "y": 1.122, "equityReturn": 0.4476, "unitMoney": ""}, {
    "x": 1569168000000,
    "y": 1.106,
    "equityReturn": -1.426,
    "unitMoney": ""
}, {"x": 1569254400000, "y": 1.114, "equityReturn": 0.7233, "unitMoney": ""}, {
    "x": 1569340800000,
    "y": 1.098,
    "equityReturn": -1.4363,
    "unitMoney": ""
}, {"x": 1569427200000, "y": 1.078, "equityReturn": -1.8215, "unitMoney": ""}, {
    "x": 1569513600000,
    "y": 1.085,
    "equityReturn": 0.6494,
    "unitMoney": ""
}, {"x": 1569772800000, "y": 1.075, "equityReturn": -0.9217, "unitMoney": ""}, {
    "x": 1570464000000,
    "y": 1.074,
    "equityReturn": -0.093,
    "unitMoney": ""
}, {"x": 1570550400000, "y": 1.08, "equityReturn": 0.5587, "unitMoney": ""}, {
    "x": 1570636800000,
    "y": 1.092,
    "equityReturn": 1.1111,
    "unitMoney": ""
}, {"x": 1570723200000, "y": 1.091, "equityReturn": -0.0916, "unitMoney": ""}, {
    "x": 1570982400000,
    "y": 1.104,
    "equityReturn": 1.1916,
    "unitMoney": ""
}, {"x": 1571068800000, "y": 1.086, "equityReturn": -1.6304, "unitMoney": ""}, {
    "x": 1571155200000,
    "y": 1.082,
    "equityReturn": -0.3683,
    "unitMoney": ""
}, {"x": 1571241600000, "y": 1.083, "equityReturn": 0.0924, "unitMoney": ""}, {
    "x": 1571328000000,
    "y": 1.074,
    "equityReturn": -0.831,
    "unitMoney": ""
}, {"x": 1571587200000, "y": 1.075, "equityReturn": 0.0931, "unitMoney": ""}, {
    "x": 1571673600000,
    "y": 1.077,
    "equityReturn": 0.186,
    "unitMoney": ""
}, {"x": 1571760000000, "y": 1.069, "equityReturn": -0.7428, "unitMoney": ""}, {
    "x": 1571846400000,
    "y": 1.069,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1571932800000, "y": 1.078, "equityReturn": 0.8419, "unitMoney": ""}, {
    "x": 1572192000000,
    "y": 1.087,
    "equityReturn": 0.8349,
    "unitMoney": ""
}, {"x": 1572278400000, "y": 1.087, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1572364800000,
    "y": 1.085,
    "equityReturn": -0.184,
    "unitMoney": ""
}, {"x": 1572451200000, "y": 1.086, "equityReturn": 0.0922, "unitMoney": ""}, {
    "x": 1572537600000,
    "y": 1.101,
    "equityReturn": 1.3812,
    "unitMoney": ""
}, {"x": 1572796800000, "y": 1.11, "equityReturn": 0.8174, "unitMoney": ""}, {
    "x": 1572883200000,
    "y": 1.12,
    "equityReturn": 0.9009,
    "unitMoney": ""
}, {"x": 1572969600000, "y": 1.114, "equityReturn": -0.5357, "unitMoney": ""}, {
    "x": 1573056000000,
    "y": 1.123,
    "equityReturn": 0.8079,
    "unitMoney": ""
}, {"x": 1573142400000, "y": 1.118, "equityReturn": -0.4452, "unitMoney": ""}, {
    "x": 1573401600000,
    "y": 1.098,
    "equityReturn": -1.7889,
    "unitMoney": ""
}, {"x": 1573488000000, "y": 1.101, "equityReturn": 0.2732, "unitMoney": ""}, {
    "x": 1573574400000,
    "y": 1.105,
    "equityReturn": 0.3633,
    "unitMoney": ""
}, {"x": 1573660800000, "y": 1.115, "equityReturn": 0.905, "unitMoney": ""}, {
    "x": 1573747200000,
    "y": 1.115,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1574006400000, "y": 1.119, "equityReturn": 0.3587, "unitMoney": ""}, {
    "x": 1574092800000,
    "y": 1.143,
    "equityReturn": 2.1448,
    "unitMoney": ""
}, {"x": 1574179200000, "y": 1.135, "equityReturn": -0.6999, "unitMoney": ""}, {
    "x": 1574265600000,
    "y": 1.135,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1574352000000, "y": 1.125, "equityReturn": -0.8811, "unitMoney": ""}, {
    "x": 1574611200000,
    "y": 1.118,
    "equityReturn": -0.6222,
    "unitMoney": ""
}, {"x": 1574697600000, "y": 1.126, "equityReturn": 0.7156, "unitMoney": ""}, {
    "x": 1574784000000,
    "y": 1.123,
    "equityReturn": -0.2664,
    "unitMoney": ""
}, {"x": 1574870400000, "y": 1.119, "equityReturn": -0.3562, "unitMoney": ""}, {
    "x": 1574956800000,
    "y": 1.112,
    "equityReturn": -0.6256,
    "unitMoney": ""
}, {"x": 1575216000000, "y": 1.117, "equityReturn": 0.4496, "unitMoney": ""}, {
    "x": 1575302400000,
    "y": 1.121,
    "equityReturn": 0.3581,
    "unitMoney": ""
}, {"x": 1575388800000, "y": 1.12, "equityReturn": -0.0892, "unitMoney": ""}, {
    "x": 1575475200000,
    "y": 1.129,
    "equityReturn": 0.8036,
    "unitMoney": ""
}, {"x": 1575561600000, "y": 1.149, "equityReturn": 1.7715, "unitMoney": ""}, {
    "x": 1575820800000,
    "y": 1.152,
    "equityReturn": 0.2611,
    "unitMoney": ""
}, {"x": 1575907200000, "y": 1.162, "equityReturn": 0.8681, "unitMoney": ""}, {
    "x": 1575993600000,
    "y": 1.15,
    "equityReturn": -1.0327,
    "unitMoney": ""
}, {"x": 1576080000000, "y": 1.15, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1576166400000,
    "y": 1.163,
    "equityReturn": 1.1304,
    "unitMoney": ""
}, {"x": 1576425600000, "y": 1.186, "equityReturn": 1.9776, "unitMoney": ""}, {
    "x": 1576512000000,
    "y": 1.2,
    "equityReturn": 1.1804,
    "unitMoney": ""
}, {"x": 1576598400000, "y": 1.202, "equityReturn": 0.1667, "unitMoney": ""}, {
    "x": 1576684800000,
    "y": 1.197,
    "equityReturn": -0.416,
    "unitMoney": ""
}, {"x": 1576771200000, "y": 1.195, "equityReturn": -0.1671, "unitMoney": ""}, {
    "x": 1577030400000,
    "y": 1.182,
    "equityReturn": -1.0879,
    "unitMoney": ""
}, {"x": 1577116800000, "y": 1.2, "equityReturn": 1.5228, "unitMoney": ""}, {
    "x": 1577203200000,
    "y": 1.203,
    "equityReturn": 0.25,
    "unitMoney": ""
}, {"x": 1577289600000, "y": 1.21, "equityReturn": 0.5819, "unitMoney": ""}, {
    "x": 1577376000000,
    "y": 1.205,
    "equityReturn": -0.4132,
    "unitMoney": ""
}, {"x": 1577635200000, "y": 1.218, "equityReturn": 1.0788, "unitMoney": ""}, {
    "x": 1577721600000,
    "y": 1.223,
    "equityReturn": 0.4105,
    "unitMoney": ""
}, {"x": 1577894400000, "y": 1.239, "equityReturn": 1.3083, "unitMoney": ""}, {
    "x": 1577980800000,
    "y": 1.241,
    "equityReturn": 0.1614,
    "unitMoney": ""
}, {"x": 1578240000000, "y": 1.246, "equityReturn": 0.4029, "unitMoney": ""}, {
    "x": 1578326400000,
    "y": 1.27,
    "equityReturn": 1.9262,
    "unitMoney": ""
}, {"x": 1578412800000, "y": 1.259, "equityReturn": -0.8661, "unitMoney": ""}, {
    "x": 1578499200000,
    "y": 1.274,
    "equityReturn": 1.1914,
    "unitMoney": ""
}, {"x": 1578585600000, "y": 1.273, "equityReturn": -0.0785, "unitMoney": ""}, {
    "x": 1578844800000,
    "y": 1.287,
    "equityReturn": 1.0998,
    "unitMoney": ""
}, {"x": 1578931200000, "y": 1.281, "equityReturn": -0.4662, "unitMoney": ""}, {
    "x": 1579017600000,
    "y": 1.273,
    "equityReturn": -0.6245,
    "unitMoney": ""
}, {"x": 1579104000000, "y": 1.274, "equityReturn": 0.0786, "unitMoney": ""}, {
    "x": 1579190400000,
    "y": 1.276,
    "equityReturn": 0.157,
    "unitMoney": ""
}, {"x": 1579449600000, "y": 1.281, "equityReturn": 0.3918, "unitMoney": ""}, {
    "x": 1579536000000,
    "y": 1.267,
    "equityReturn": -1.0929,
    "unitMoney": ""
}, {"x": 1579622400000, "y": 1.276, "equityReturn": 0.7103, "unitMoney": ""}, {
    "x": 1579708800000,
    "y": 1.243,
    "equityReturn": -2.5862,
    "unitMoney": ""
}, {"x": 1580659200000, "y": 1.157, "equityReturn": -6.9187, "unitMoney": ""}, {
    "x": 1580745600000,
    "y": 1.205,
    "equityReturn": 4.1487,
    "unitMoney": ""
}, {"x": 1580832000000, "y": 1.221, "equityReturn": 1.3278, "unitMoney": ""}, {
    "x": 1580918400000,
    "y": 1.251,
    "equityReturn": 2.457,
    "unitMoney": ""
}, {"x": 1581004800000, "y": 1.27, "equityReturn": 1.5188, "unitMoney": ""}, {
    "x": 1581264000000,
    "y": 1.277,
    "equityReturn": 0.5512,
    "unitMoney": ""
}, {"x": 1581350400000, "y": 1.279, "equityReturn": 0.1566, "unitMoney": ""}, {
    "x": 1581436800000,
    "y": 1.307,
    "equityReturn": 2.1892,
    "unitMoney": ""
}, {"x": 1581523200000, "y": 1.296, "equityReturn": -0.8416, "unitMoney": ""}, {
    "x": 1581609600000,
    "y": 1.299,
    "equityReturn": 0.2315,
    "unitMoney": ""
}, {"x": 1581868800000, "y": 1.34, "equityReturn": 3.1563, "unitMoney": ""}, {
    "x": 1581955200000,
    "y": 1.354,
    "equityReturn": 1.0448,
    "unitMoney": ""
}, {"x": 1582041600000, "y": 1.35, "equityReturn": -0.2954, "unitMoney": ""}, {
    "x": 1582128000000,
    "y": 1.373,
    "equityReturn": 1.7037,
    "unitMoney": ""
}, {"x": 1582214400000, "y": 1.393, "equityReturn": 1.4567, "unitMoney": ""}, {
    "x": 1582473600000,
    "y": 1.401,
    "equityReturn": 0.5743,
    "unitMoney": ""
}, {"x": 1582560000000, "y": 1.39, "equityReturn": -0.7852, "unitMoney": ""}, {
    "x": 1582646400000,
    "y": 1.345,
    "equityReturn": -3.2374,
    "unitMoney": ""
}, {"x": 1582732800000, "y": 1.367, "equityReturn": 1.6357, "unitMoney": ""}, {
    "x": 1582819200000,
    "y": 1.31,
    "equityReturn": -4.1697,
    "unitMoney": ""
}, {"x": 1583078400000, "y": 1.353, "equityReturn": 3.2824, "unitMoney": ""}, {
    "x": 1583164800000,
    "y": 1.364,
    "equityReturn": 0.813,
    "unitMoney": ""
}, {"x": 1583251200000, "y": 1.369, "equityReturn": 0.3666, "unitMoney": ""}, {
    "x": 1583337600000,
    "y": 1.39,
    "equityReturn": 1.534,
    "unitMoney": ""
}, {"x": 1583424000000, "y": 1.38, "equityReturn": -0.7194, "unitMoney": ""}, {
    "x": 1583683200000,
    "y": 1.329,
    "equityReturn": -3.6957,
    "unitMoney": ""
}, {"x": 1583769600000, "y": 1.354, "equityReturn": 1.8811, "unitMoney": ""}, {
    "x": 1583856000000,
    "y": 1.343,
    "equityReturn": -0.8124,
    "unitMoney": ""
}, {"x": 1583942400000, "y": 1.309, "equityReturn": -2.5316, "unitMoney": ""}, {
    "x": 1584028800000,
    "y": 1.294,
    "equityReturn": -1.1459,
    "unitMoney": ""
}, {"x": 1584288000000, "y": 1.237, "equityReturn": -4.4049, "unitMoney": ""}, {
    "x": 1584374400000,
    "y": 1.235,
    "equityReturn": -0.1617,
    "unitMoney": ""
}, {"x": 1584460800000, "y": 1.22, "equityReturn": -1.2146, "unitMoney": ""}, {
    "x": 1584547200000,
    "y": 1.224,
    "equityReturn": 0.3279,
    "unitMoney": ""
}, {"x": 1584633600000, "y": 1.245, "equityReturn": 1.7157, "unitMoney": ""}, {
    "x": 1584892800000,
    "y": 1.201,
    "equityReturn": -3.5341,
    "unitMoney": ""
}, {"x": 1584979200000, "y": 1.221, "equityReturn": 1.6653, "unitMoney": ""}, {
    "x": 1585065600000,
    "y": 1.254,
    "equityReturn": 2.7027,
    "unitMoney": ""
}, {"x": 1585152000000, "y": 1.247, "equityReturn": -0.5582, "unitMoney": ""}, {
    "x": 1585238400000,
    "y": 1.244,
    "equityReturn": -0.2406,
    "unitMoney": ""
}, {"x": 1585497600000, "y": 1.232, "equityReturn": -0.9646, "unitMoney": ""}, {
    "x": 1585584000000,
    "y": 1.236,
    "equityReturn": 0.3247,
    "unitMoney": ""
}, {"x": 1585670400000, "y": 1.233, "equityReturn": -0.2427, "unitMoney": ""}, {
    "x": 1585756800000,
    "y": 1.253,
    "equityReturn": 1.6221,
    "unitMoney": ""
}, {"x": 1585843200000, "y": 1.253, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1586188800000,
    "y": 1.286,
    "equityReturn": 2.6337,
    "unitMoney": ""
}, {"x": 1586275200000, "y": 1.29, "equityReturn": 0.311, "unitMoney": ""}, {
    "x": 1586361600000,
    "y": 1.296,
    "equityReturn": 0.4651,
    "unitMoney": ""
}, {"x": 1586448000000, "y": 1.286, "equityReturn": -0.7716, "unitMoney": ""}, {
    "x": 1586707200000,
    "y": 1.288,
    "equityReturn": 0.1555,
    "unitMoney": ""
}, {"x": 1586793600000, "y": 1.314, "equityReturn": 2.0186, "unitMoney": ""}, {
    "x": 1586880000000,
    "y": 1.306,
    "equityReturn": -0.6088,
    "unitMoney": ""
}, {"x": 1586966400000, "y": 1.316, "equityReturn": 0.7657, "unitMoney": ""}, {
    "x": 1587052800000,
    "y": 1.323,
    "equityReturn": 0.5319,
    "unitMoney": ""
}, {"x": 1587312000000, "y": 1.339, "equityReturn": 1.2094, "unitMoney": ""}, {
    "x": 1587398400000,
    "y": 1.333,
    "equityReturn": -0.4481,
    "unitMoney": ""
}, {"x": 1587484800000, "y": 1.343, "equityReturn": 0.7502, "unitMoney": ""}, {
    "x": 1587571200000,
    "y": 1.344,
    "equityReturn": 0.0745,
    "unitMoney": ""
}, {"x": 1587657600000, "y": 1.333, "equityReturn": -0.8185, "unitMoney": ""}, {
    "x": 1587916800000,
    "y": 1.339,
    "equityReturn": 0.4501,
    "unitMoney": ""
}, {"x": 1588003200000, "y": 1.352, "equityReturn": 0.9709, "unitMoney": ""}, {
    "x": 1588089600000,
    "y": 1.371,
    "equityReturn": 1.4053,
    "unitMoney": ""
}, {"x": 1588176000000, "y": 1.387, "equityReturn": 1.167, "unitMoney": ""}, {
    "x": 1588694400000,
    "y": 1.403,
    "equityReturn": 1.1536,
    "unitMoney": ""
}, {"x": 1588780800000, "y": 1.403, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1588867200000,
    "y": 1.408,
    "equityReturn": 0.3564,
    "unitMoney": ""
}, {"x": 1589126400000, "y": 1.404, "equityReturn": -0.2841, "unitMoney": ""}, {
    "x": 1589212800000,
    "y": 1.411,
    "equityReturn": 0.4986,
    "unitMoney": ""
}, {"x": 1589299200000, "y": 1.418, "equityReturn": 0.4961, "unitMoney": ""}, {
    "x": 1589385600000,
    "y": 1.402,
    "equityReturn": -1.1283,
    "unitMoney": ""
}, {"x": 1589472000000, "y": 1.401, "equityReturn": -0.0713, "unitMoney": ""}, {
    "x": 1589731200000,
    "y": 1.411,
    "equityReturn": 0.7138,
    "unitMoney": ""
}, {"x": 1589817600000, "y": 1.44, "equityReturn": 2.0553, "unitMoney": ""}, {
    "x": 1589904000000,
    "y": 1.425,
    "equityReturn": -1.0417,
    "unitMoney": ""
}, {"x": 1589990400000, "y": 1.406, "equityReturn": -1.3333, "unitMoney": ""}, {
    "x": 1590076800000,
    "y": 1.385,
    "equityReturn": -1.4936,
    "unitMoney": ""
}, {"x": 1590336000000, "y": 1.389, "equityReturn": 0.2888, "unitMoney": ""}, {
    "x": 1590422400000,
    "y": 1.409,
    "equityReturn": 1.4399,
    "unitMoney": ""
}, {"x": 1590508800000, "y": 1.403, "equityReturn": -0.4258, "unitMoney": ""}, {
    "x": 1590595200000,
    "y": 1.405,
    "equityReturn": 0.1426,
    "unitMoney": ""
}, {"x": 1590681600000, "y": 1.421, "equityReturn": 1.1388, "unitMoney": ""}, {
    "x": 1590940800000,
    "y": 1.456,
    "equityReturn": 2.4631,
    "unitMoney": ""
}, {"x": 1591027200000, "y": 1.453, "equityReturn": -0.206, "unitMoney": ""}, {
    "x": 1591113600000,
    "y": 1.45,
    "equityReturn": -0.2065,
    "unitMoney": ""
}, {"x": 1591200000000, "y": 1.454, "equityReturn": 0.2759, "unitMoney": ""}, {
    "x": 1591286400000,
    "y": 1.457,
    "equityReturn": 0.2063,
    "unitMoney": ""
}, {"x": 1591545600000, "y": 1.471, "equityReturn": 0.9609, "unitMoney": ""}, {
    "x": 1591632000000,
    "y": 1.477,
    "equityReturn": 0.4079,
    "unitMoney": ""
}, {"x": 1591718400000, "y": 1.482, "equityReturn": 0.3385, "unitMoney": ""}, {
    "x": 1591804800000,
    "y": 1.472,
    "equityReturn": -0.6748,
    "unitMoney": ""
}, {"x": 1591891200000, "y": 1.484, "equityReturn": 0.8152, "unitMoney": ""}, {
    "x": 1592150400000,
    "y": 1.474,
    "equityReturn": -0.6739,
    "unitMoney": ""
}, {"x": 1592236800000, "y": 1.497, "equityReturn": 1.5604, "unitMoney": ""}, {
    "x": 1592323200000,
    "y": 1.494,
    "equityReturn": -0.2004,
    "unitMoney": ""
}, {"x": 1592409600000, "y": 1.492, "equityReturn": -0.1339, "unitMoney": ""}, {
    "x": 1592496000000,
    "y": 1.507,
    "equityReturn": 1.0054,
    "unitMoney": ""
}, {"x": 1592755200000, "y": 1.503, "equityReturn": -0.2654, "unitMoney": ""}, {
    "x": 1592841600000,
    "y": 1.522,
    "equityReturn": 1.2641,
    "unitMoney": ""
}, {"x": 1592928000000, "y": 1.532, "equityReturn": 0.657, "unitMoney": ""}, {
    "x": 1593360000000,
    "y": 1.53,
    "equityReturn": -0.1305,
    "unitMoney": ""
}, {"x": 1593446400000, "y": 1.562, "equityReturn": 2.0915, "unitMoney": ""}, {
    "x": 1593532800000,
    "y": 1.577,
    "equityReturn": 0.9603,
    "unitMoney": ""
}, {"x": 1593619200000, "y": 1.603, "equityReturn": 1.6487, "unitMoney": ""}, {
    "x": 1593705600000,
    "y": 1.61,
    "equityReturn": 0.4367,
    "unitMoney": ""
}, {"x": 1593964800000, "y": 1.651, "equityReturn": 2.5466, "unitMoney": ""}, {
    "x": 1594051200000,
    "y": 1.685,
    "equityReturn": 2.0594,
    "unitMoney": ""
}, {"x": 1594137600000, "y": 1.717, "equityReturn": 1.8991, "unitMoney": ""}, {
    "x": 1594224000000,
    "y": 1.77,
    "equityReturn": 3.0868,
    "unitMoney": ""
}, {"x": 1594310400000, "y": 1.782, "equityReturn": 0.678, "unitMoney": ""}, {
    "x": 1594569600000,
    "y": 1.83,
    "equityReturn": 2.6936,
    "unitMoney": ""
}, {"x": 1594656000000, "y": 1.813, "equityReturn": -0.929, "unitMoney": ""}, {
    "x": 1594742400000,
    "y": 1.817,
    "equityReturn": 0.2206,
    "unitMoney": ""
}, {"x": 1594828800000, "y": 1.735, "equityReturn": -4.5129, "unitMoney": ""}, {
    "x": 1594915200000,
    "y": 1.78,
    "equityReturn": 2.5937,
    "unitMoney": ""
}, {"x": 1595174400000, "y": 1.859, "equityReturn": 4.4382, "unitMoney": ""}, {
    "x": 1595260800000,
    "y": 1.891,
    "equityReturn": 1.7214,
    "unitMoney": ""
}, {"x": 1595347200000, "y": 1.891, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1595433600000,
    "y": 1.909,
    "equityReturn": 0.9519,
    "unitMoney": ""
}, {"x": 1595520000000, "y": 1.861, "equityReturn": -2.5144, "unitMoney": ""}, {
    "x": 1595779200000,
    "y": 1.897,
    "equityReturn": 1.9344,
    "unitMoney": ""
}, {"x": 1595865600000, "y": 1.9, "equityReturn": 0.1581, "unitMoney": ""}, {
    "x": 1595952000000,
    "y": 1.957,
    "equityReturn": 3.0,
    "unitMoney": ""
}, {"x": 1596038400000, "y": 1.961, "equityReturn": 0.2044, "unitMoney": ""}, {
    "x": 1596124800000,
    "y": 1.98,
    "equityReturn": 0.9689,
    "unitMoney": ""
}, {"x": 1596384000000, "y": 2.016, "equityReturn": 1.8182, "unitMoney": ""}, {
    "x": 1596470400000,
    "y": 2.009,
    "equityReturn": -0.3472,
    "unitMoney": ""
}, {"x": 1596556800000, "y": 2.027, "equityReturn": 0.896, "unitMoney": ""}, {
    "x": 1596643200000,
    "y": 2.031,
    "equityReturn": 0.1973,
    "unitMoney": ""
}, {"x": 1596729600000, "y": 2.023, "equityReturn": -0.3939, "unitMoney": ""}, {
    "x": 1596988800000,
    "y": 2.03,
    "equityReturn": 0.346,
    "unitMoney": ""
}, {"x": 1597075200000, "y": 1.987, "equityReturn": -2.1182, "unitMoney": ""}, {
    "x": 1597161600000,
    "y": 1.943,
    "equityReturn": -2.2144,
    "unitMoney": ""
}, {"x": 1597248000000, "y": 1.952, "equityReturn": 0.4632, "unitMoney": ""}, {
    "x": 1597334400000,
    "y": 1.982,
    "equityReturn": 1.5369,
    "unitMoney": ""
}, {"x": 1597593600000, "y": 2.01, "equityReturn": 1.4127, "unitMoney": ""}, {
    "x": 1597680000000,
    "y": 2.045,
    "equityReturn": 1.7413,
    "unitMoney": ""
}, {"x": 1597766400000, "y": 2.02, "equityReturn": -1.2225, "unitMoney": ""}, {
    "x": 1597852800000,
    "y": 1.986,
    "equityReturn": -1.6832,
    "unitMoney": ""
}, {"x": 1597939200000, "y": 2.014, "equityReturn": 1.4099, "unitMoney": ""}, {
    "x": 1598198400000,
    "y": 2.038,
    "equityReturn": 1.19,
    "unitMoney": ""
}, {"x": 1598284800000, "y": 2.038, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1598371200000,
    "y": 2.053,
    "equityReturn": 0.74,
    "unitMoney": ""
}, {"x": 1598457600000, "y": 2.066, "equityReturn": 0.63, "unitMoney": ""}, {
    "x": 1598544000000,
    "y": 2.13,
    "equityReturn": 3.1,
    "unitMoney": ""
}, {"x": 1598803200000, "y": 2.133, "equityReturn": 0.14, "unitMoney": ""}, {
    "x": 1598889600000,
    "y": 2.14,
    "equityReturn": 0.33,
    "unitMoney": ""
}, {"x": 1598976000000, "y": 2.143, "equityReturn": 0.14, "unitMoney": ""}, {
    "x": 1599062400000,
    "y": 2.12,
    "equityReturn": -1.07,
    "unitMoney": ""
}, {"x": 1599148800000, "y": 2.104, "equityReturn": -0.75, "unitMoney": ""}, {
    "x": 1599408000000,
    "y": 2.037,
    "equityReturn": -3.18,
    "unitMoney": ""
}, {"x": 1599494400000, "y": 2.031, "equityReturn": -0.29, "unitMoney": ""}, {
    "x": 1599580800000,
    "y": 1.973,
    "equityReturn": -2.86,
    "unitMoney": ""
}, {"x": 1599667200000, "y": 1.963, "equityReturn": -0.51, "unitMoney": ""}, {
    "x": 1599753600000,
    "y": 1.977,
    "equityReturn": 0.71,
    "unitMoney": ""
}, {"x": 1600012800000, "y": 1.993, "equityReturn": 0.81, "unitMoney": ""}, {
    "x": 1600099200000,
    "y": 2.024,
    "equityReturn": 1.56,
    "unitMoney": ""
}, {"x": 1600185600000, "y": 2.015, "equityReturn": -0.44, "unitMoney": ""}, {
    "x": 1600272000000,
    "y": 2.025,
    "equityReturn": 0.5,
    "unitMoney": ""
}, {"x": 1600358400000, "y": 2.049, "equityReturn": 1.19, "unitMoney": ""}, {
    "x": 1600617600000,
    "y": 2.033,
    "equityReturn": -0.78,
    "unitMoney": ""
}, {"x": 1600704000000, "y": 2.006, "equityReturn": -1.33, "unitMoney": ""}, {
    "x": 1600790400000,
    "y": 2.017,
    "equityReturn": 0.55,
    "unitMoney": ""
}, {"x": 1600876800000, "y": 1.969, "equityReturn": -2.38, "unitMoney": ""}, {
    "x": 1600963200000,
    "y": 1.98,
    "equityReturn": 0.56,
    "unitMoney": ""
}, {"x": 1601222400000, "y": 1.993, "equityReturn": 0.66, "unitMoney": ""}, {
    "x": 1601308800000,
    "y": 2.017,
    "equityReturn": 1.2,
    "unitMoney": ""
}, {"x": 1601395200000, "y": 2.006, "equityReturn": -0.55, "unitMoney": ""}, {
    "x": 1602172800000,
    "y": 2.044,
    "equityReturn": 1.89,
    "unitMoney": ""
}, {"x": 1602432000000, "y": 2.108, "equityReturn": 3.13, "unitMoney": ""}, {
    "x": 1602518400000,
    "y": 2.124,
    "equityReturn": 0.76,
    "unitMoney": ""
}, {"x": 1602604800000, "y": 2.147, "equityReturn": 1.08, "unitMoney": ""}, {
    "x": 1602691200000,
    "y": 2.134,
    "equityReturn": -0.61,
    "unitMoney": ""
}, {"x": 1602777600000, "y": 2.112, "equityReturn": -1.03, "unitMoney": ""}, {
    "x": 1603036800000,
    "y": 2.099,
    "equityReturn": -0.62,
    "unitMoney": ""
}, {"x": 1603123200000, "y": 2.113, "equityReturn": 0.67, "unitMoney": ""}, {
    "x": 1603209600000,
    "y": 2.096,
    "equityReturn": -0.8,
    "unitMoney": ""
}, {"x": 1603296000000, "y": 2.066, "equityReturn": -1.43, "unitMoney": ""}, {
    "x": 1603382400000,
    "y": 2.023,
    "equityReturn": -2.08,
    "unitMoney": ""
}, {"x": 1603641600000, "y": 2.039, "equityReturn": 0.79, "unitMoney": ""}, {
    "x": 1603728000000,
    "y": 2.055,
    "equityReturn": 0.78,
    "unitMoney": ""
}, {"x": 1603814400000, "y": 2.065, "equityReturn": 0.49, "unitMoney": ""}, {
    "x": 1603900800000,
    "y": 2.068,
    "equityReturn": 0.15,
    "unitMoney": ""
}, {"x": 1603987200000, "y": 2.042, "equityReturn": -1.26, "unitMoney": ""}, {
    "x": 1604246400000,
    "y": 2.072,
    "equityReturn": 1.47,
    "unitMoney": ""
}, {"x": 1604332800000, "y": 2.11, "equityReturn": 1.83, "unitMoney": ""}, {
    "x": 1604419200000,
    "y": 2.142,
    "equityReturn": 1.52,
    "unitMoney": ""
}, {"x": 1604505600000, "y": 2.156, "equityReturn": 0.65, "unitMoney": ""}, {
    "x": 1604592000000,
    "y": 2.126,
    "equityReturn": -1.39,
    "unitMoney": ""
}, {"x": 1604851200000, "y": 2.157, "equityReturn": 1.46, "unitMoney": ""}, {
    "x": 1604937600000,
    "y": 2.142,
    "equityReturn": -0.7,
    "unitMoney": ""
}, {"x": 1605024000000, "y": 2.126, "equityReturn": -0.75, "unitMoney": ""}, {
    "x": 1605110400000,
    "y": 2.13,
    "equityReturn": 0.19,
    "unitMoney": ""
}, {"x": 1605196800000, "y": 2.12, "equityReturn": -0.47, "unitMoney": ""}, {
    "x": 1605456000000,
    "y": 2.134,
    "equityReturn": 0.66,
    "unitMoney": ""
}, {"x": 1605542400000, "y": 2.123, "equityReturn": -0.52, "unitMoney": ""}, {
    "x": 1605628800000,
    "y": 2.125,
    "equityReturn": 0.09,
    "unitMoney": ""
}, {"x": 1605715200000, "y": 2.152, "equityReturn": 1.27, "unitMoney": ""}, {
    "x": 1605801600000,
    "y": 2.161,
    "equityReturn": 0.42,
    "unitMoney": ""
}, {"x": 1606060800000, "y": 2.164, "equityReturn": 0.14, "unitMoney": ""}, {
    "x": 1606147200000,
    "y": 2.154,
    "equityReturn": -0.46,
    "unitMoney": ""
}, {"x": 1606233600000, "y": 2.123, "equityReturn": -1.44, "unitMoney": ""}, {
    "x": 1606320000000,
    "y": 2.13,
    "equityReturn": 0.33,
    "unitMoney": ""
}, {"x": 1606406400000, "y": 2.146, "equityReturn": 0.75, "unitMoney": ""}, {
    "x": 1606665600000,
    "y": 2.15,
    "equityReturn": 0.19,
    "unitMoney": ""
}, {"x": 1606752000000, "y": 2.163, "equityReturn": 0.6, "unitMoney": ""}, {
    "x": 1606838400000,
    "y": 2.169,
    "equityReturn": 0.28,
    "unitMoney": ""
}, {"x": 1606924800000, "y": 2.155, "equityReturn": -0.65, "unitMoney": ""}, {
    "x": 1607011200000,
    "y": 2.175,
    "equityReturn": 0.93,
    "unitMoney": ""
}, {"x": 1607270400000, "y": 2.166, "equityReturn": -0.41, "unitMoney": ""}, {
    "x": 1607356800000,
    "y": 2.165,
    "equityReturn": -0.05,
    "unitMoney": ""
}, {"x": 1607443200000, "y": 2.141, "equityReturn": -1.11, "unitMoney": ""}, {
    "x": 1607529600000,
    "y": 2.152,
    "equityReturn": 0.51,
    "unitMoney": ""
}, {"x": 1607616000000, "y": 2.125, "equityReturn": -1.25, "unitMoney": ""}, {
    "x": 1607875200000,
    "y": 2.136,
    "equityReturn": 0.52,
    "unitMoney": ""
}, {"x": 1607961600000, "y": 2.126, "equityReturn": -0.47, "unitMoney": ""}, {
    "x": 1608048000000,
    "y": 2.133,
    "equityReturn": 0.33,
    "unitMoney": ""
}, {"x": 1608134400000, "y": 2.136, "equityReturn": 0.14, "unitMoney": ""}, {
    "x": 1608220800000,
    "y": 2.13,
    "equityReturn": -0.28,
    "unitMoney": ""
}, {"x": 1608480000000, "y": 2.156, "equityReturn": 1.22, "unitMoney": ""}, {
    "x": 1608566400000,
    "y": 2.126,
    "equityReturn": -1.39,
    "unitMoney": ""
}, {"x": 1608652800000, "y": 2.155, "equityReturn": 1.36, "unitMoney": ""}, {
    "x": 1608739200000,
    "y": 2.149,
    "equityReturn": -0.28,
    "unitMoney": ""
}, {"x": 1608825600000, "y": 2.157, "equityReturn": 0.37, "unitMoney": ""}, {
    "x": 1609084800000,
    "y": 2.172,
    "equityReturn": 0.7,
    "unitMoney": ""
}, {"x": 1609171200000, "y": 2.175, "equityReturn": 0.14, "unitMoney": ""}, {
    "x": 1609257600000,
    "y": 2.177,
    "equityReturn": 0.09,
    "unitMoney": ""
}, {"x": 1609344000000, "y": 2.201, "equityReturn": 1.1, "unitMoney": ""}, {
    "x": 1609689600000,
    "y": 2.234,
    "equityReturn": 1.5,
    "unitMoney": ""
}, {"x": 1609776000000, "y": 2.276, "equityReturn": 1.88, "unitMoney": ""}, {
    "x": 1609862400000,
    "y": 2.276,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1609948800000, "y": 2.281, "equityReturn": 0.22, "unitMoney": ""}, {
    "x": 1610035200000,
    "y": 2.279,
    "equityReturn": -0.09,
    "unitMoney": ""
}, {"x": 1610294400000, "y": 2.264, "equityReturn": -0.66, "unitMoney": ""}, {
    "x": 1610380800000,
    "y": 2.283,
    "equityReturn": 0.84,
    "unitMoney": ""
}, {"x": 1610467200000, "y": 2.277, "equityReturn": -0.26, "unitMoney": ""}, {
    "x": 1610553600000,
    "y": 2.268,
    "equityReturn": -0.4,
    "unitMoney": ""
}, {"x": 1610640000000, "y": 2.275, "equityReturn": 0.31, "unitMoney": ""}, {
    "x": 1610899200000,
    "y": 2.318,
    "equityReturn": 1.89,
    "unitMoney": ""
}, {"x": 1610985600000, "y": 2.309, "equityReturn": -0.39, "unitMoney": ""}, {
    "x": 1611072000000,
    "y": 2.323,
    "equityReturn": 0.61,
    "unitMoney": ""
}, {"x": 1611158400000, "y": 2.376, "equityReturn": 2.28, "unitMoney": ""}, {
    "x": 1611244800000,
    "y": 2.371,
    "equityReturn": -0.21,
    "unitMoney": ""
}, {"x": 1611504000000, "y": 2.363, "equityReturn": -0.34, "unitMoney": ""}, {
    "x": 1611590400000,
    "y": 2.347,
    "equityReturn": -0.68,
    "unitMoney": ""
}, {"x": 1611676800000, "y": 2.358, "equityReturn": 0.47, "unitMoney": ""}, {
    "x": 1611763200000,
    "y": 2.307,
    "equityReturn": -2.16,
    "unitMoney": ""
}, {"x": 1611849600000, "y": 2.334, "equityReturn": 1.17, "unitMoney": ""}, {
    "x": 1612108800000,
    "y": 2.363,
    "equityReturn": 1.24,
    "unitMoney": ""
}, {"x": 1612195200000, "y": 2.404, "equityReturn": 1.74, "unitMoney": ""}, {
    "x": 1612281600000,
    "y": 2.415,
    "equityReturn": 0.46,
    "unitMoney": ""
}, {"x": 1612368000000, "y": 2.414, "equityReturn": -0.04, "unitMoney": ""}, {
    "x": 1612454400000,
    "y": 2.387,
    "equityReturn": -1.12,
    "unitMoney": ""
}, {"x": 1612713600000, "y": 2.451, "equityReturn": 2.68, "unitMoney": ""}, {
    "x": 1612800000000,
    "y": 2.492,
    "equityReturn": 1.67,
    "unitMoney": ""
}, {"x": 1612886400000, "y": 2.544, "equityReturn": 2.09, "unitMoney": ""}, {
    "x": 1613577600000,
    "y": 2.548,
    "equityReturn": 0.16,
    "unitMoney": ""
}, {"x": 1613664000000, "y": 2.544, "equityReturn": -0.16, "unitMoney": ""}, {
    "x": 1613923200000,
    "y": 2.496,
    "equityReturn": -1.89,
    "unitMoney": ""
}, {"x": 1614009600000, "y": 2.526, "equityReturn": 1.2, "unitMoney": ""}, {
    "x": 1614096000000,
    "y": 2.482,
    "equityReturn": -1.74,
    "unitMoney": ""
}, {"x": 1614182400000, "y": 2.484, "equityReturn": 0.08, "unitMoney": ""}, {
    "x": 1614268800000,
    "y": 2.422,
    "equityReturn": -2.5,
    "unitMoney": ""
}, {"x": 1614528000000, "y": 2.48, "equityReturn": 2.39, "unitMoney": ""}, {
    "x": 1614614400000,
    "y": 2.462,
    "equityReturn": -0.73,
    "unitMoney": ""
}, {"x": 1614700800000, "y": 2.483, "equityReturn": 0.85, "unitMoney": ""}, {
    "x": 1614787200000,
    "y": 2.417,
    "equityReturn": -2.66,
    "unitMoney": ""
}, {"x": 1614873600000, "y": 2.406, "equityReturn": -0.46, "unitMoney": ""}, {
    "x": 1615132800000,
    "y": 2.332,
    "equityReturn": -3.08,
    "unitMoney": ""
}, {"x": 1615219200000, "y": 2.287, "equityReturn": -1.93, "unitMoney": ""}, {
    "x": 1615305600000,
    "y": 2.297,
    "equityReturn": 0.44,
    "unitMoney": ""
}, {"x": 1615392000000, "y": 2.331, "equityReturn": 1.48, "unitMoney": ""}, {
    "x": 1615478400000,
    "y": 2.339,
    "equityReturn": 0.34,
    "unitMoney": ""
}, {"x": 1615737600000, "y": 2.305, "equityReturn": -1.45, "unitMoney": ""}, {
    "x": 1615824000000,
    "y": 2.33,
    "equityReturn": 1.08,
    "unitMoney": ""
}, {"x": 1615910400000, "y": 2.344, "equityReturn": 0.6, "unitMoney": ""}, {
    "x": 1615996800000,
    "y": 2.355,
    "equityReturn": 0.47,
    "unitMoney": ""
}, {"x": 1616083200000, "y": 2.312, "equityReturn": -1.83, "unitMoney": ""}, {
    "x": 1616342400000,
    "y": 2.346,
    "equityReturn": 1.47,
    "unitMoney": ""
}, {"x": 1616428800000, "y": 2.313, "equityReturn": -1.41, "unitMoney": ""}, {
    "x": 1616515200000,
    "y": 2.262,
    "equityReturn": -2.2,
    "unitMoney": ""
}, {"x": 1616601600000, "y": 2.261, "equityReturn": -0.04, "unitMoney": ""}, {
    "x": 1616688000000,
    "y": 2.298,
    "equityReturn": 1.64,
    "unitMoney": ""
}, {"x": 1616947200000, "y": 2.304, "equityReturn": 0.26, "unitMoney": ""}, {
    "x": 1617033600000,
    "y": 2.308,
    "equityReturn": 0.17,
    "unitMoney": ""
}, {"x": 1617120000000, "y": 2.298, "equityReturn": -0.43, "unitMoney": ""}, {
    "x": 1617206400000,
    "y": 2.323,
    "equityReturn": 1.09,
    "unitMoney": ""
}, {"x": 1617292800000, "y": 2.329, "equityReturn": 0.26, "unitMoney": ""}, {
    "x": 1617638400000,
    "y": 2.32,
    "equityReturn": -0.39,
    "unitMoney": ""
}, {"x": 1617724800000, "y": 2.303, "equityReturn": -0.73, "unitMoney": ""}, {
    "x": 1617811200000,
    "y": 2.303,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1617897600000, "y": 2.302, "equityReturn": -0.04, "unitMoney": ""}, {
    "x": 1618156800000,
    "y": 2.263,
    "equityReturn": -1.69,
    "unitMoney": ""
}, {"x": 1618243200000, "y": 2.267, "equityReturn": 0.18, "unitMoney": ""}, {
    "x": 1618329600000,
    "y": 2.286,
    "equityReturn": 0.84,
    "unitMoney": ""
}, {"x": 1618416000000, "y": 2.263, "equityReturn": -1.01, "unitMoney": ""}, {
    "x": 1618502400000,
    "y": 2.267,
    "equityReturn": 0.18,
    "unitMoney": ""
}, {"x": 1618761600000, "y": 2.302, "equityReturn": 1.54, "unitMoney": ""}, {
    "x": 1618848000000,
    "y": 2.306,
    "equityReturn": 0.17,
    "unitMoney": ""
}, {"x": 1618934400000, "y": 2.3, "equityReturn": -0.26, "unitMoney": ""}, {
    "x": 1619020800000,
    "y": 2.318,
    "equityReturn": 0.78,
    "unitMoney": ""
}, {"x": 1619107200000, "y": 2.329, "equityReturn": 0.47, "unitMoney": ""}, {
    "x": 1619366400000,
    "y": 2.317,
    "equityReturn": -0.52,
    "unitMoney": ""
}, {"x": 1619452800000, "y": 2.321, "equityReturn": 0.17, "unitMoney": ""}, {
    "x": 1619539200000,
    "y": 2.337,
    "equityReturn": 0.69,
    "unitMoney": ""
}, {"x": 1619625600000, "y": 2.328, "equityReturn": -0.39, "unitMoney": ""}, {
    "x": 1619712000000,
    "y": 2.327,
    "equityReturn": -0.04,
    "unitMoney": ""
}, {"x": 1620230400000, "y": 2.307, "equityReturn": -0.86, "unitMoney": ""}, {
    "x": 1620316800000,
    "y": 2.263,
    "equityReturn": -1.91,
    "unitMoney": ""
}, {"x": 1620576000000, "y": 2.246, "equityReturn": -0.75, "unitMoney": ""}, {
    "x": 1620662400000,
    "y": 2.24,
    "equityReturn": -0.27,
    "unitMoney": ""
}, {"x": 1620748800000, "y": 2.248, "equityReturn": 0.36, "unitMoney": ""}, {
    "x": 1620835200000,
    "y": 2.245,
    "equityReturn": -0.13,
    "unitMoney": ""
}, {"x": 1620921600000, "y": 2.276, "equityReturn": 1.38, "unitMoney": ""}, {
    "x": 1621180800000,
    "y": 2.304,
    "equityReturn": 1.23,
    "unitMoney": ""
}, {"x": 1621267200000, "y": 2.314, "equityReturn": 0.43, "unitMoney": ""}, {
    "x": 1621353600000,
    "y": 2.32,
    "equityReturn": 0.26,
    "unitMoney": ""
}, {"x": 1621440000000, "y": 2.336, "equityReturn": 0.69, "unitMoney": ""}, {
    "x": 1621526400000,
    "y": 2.336,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1621785600000, "y": 2.358, "equityReturn": 0.94, "unitMoney": ""}, {
    "x": 1621872000000,
    "y": 2.396,
    "equityReturn": 1.61,
    "unitMoney": ""
}, {"x": 1621958400000, "y": 2.398, "equityReturn": 0.08, "unitMoney": ""}, {
    "x": 1622044800000,
    "y": 2.441,
    "equityReturn": 1.79,
    "unitMoney": ""
}, {"x": 1622131200000, "y": 2.411, "equityReturn": -1.23, "unitMoney": ""}, {
    "x": 1622390400000,
    "y": 2.433,
    "equityReturn": 0.91,
    "unitMoney": ""
}, {"x": 1622476800000, "y": 2.439, "equityReturn": 0.25, "unitMoney": ""}, {
    "x": 1622563200000,
    "y": 2.407,
    "equityReturn": -1.31,
    "unitMoney": ""
}, {"x": 1622649600000, "y": 2.398, "equityReturn": -0.37, "unitMoney": ""}, {
    "x": 1622736000000,
    "y": 2.416,
    "equityReturn": 0.75,
    "unitMoney": ""
}, {"x": 1622995200000, "y": 2.436, "equityReturn": 0.83, "unitMoney": ""}, {
    "x": 1623081600000,
    "y": 2.413,
    "equityReturn": -0.94,
    "unitMoney": ""
}, {"x": 1623168000000, "y": 2.42, "equityReturn": 0.29, "unitMoney": ""}, {
    "x": 1623254400000,
    "y": 2.424,
    "equityReturn": 0.17,
    "unitMoney": ""
}, {"x": 1623340800000, "y": 2.411, "equityReturn": -0.54, "unitMoney": ""}, {
    "x": 1623686400000,
    "y": 2.421,
    "equityReturn": 0.41,
    "unitMoney": ""
}, {"x": 1623772800000, "y": 2.378, "equityReturn": -1.78, "unitMoney": ""}, {
    "x": 1623859200000,
    "y": 2.429,
    "equityReturn": 2.14,
    "unitMoney": ""
}, {"x": 1623945600000, "y": 2.422, "equityReturn": -0.29, "unitMoney": ""}, {
    "x": 1624204800000,
    "y": 2.428,
    "equityReturn": 0.25,
    "unitMoney": ""
}, {"x": 1624291200000, "y": 2.425, "equityReturn": -0.12, "unitMoney": ""}, {
    "x": 1624377600000,
    "y": 2.439,
    "equityReturn": 0.58,
    "unitMoney": ""
}, {"x": 1624464000000, "y": 2.441, "equityReturn": 0.08, "unitMoney": ""}, {
    "x": 1624550400000,
    "y": 2.473,
    "equityReturn": 1.31,
    "unitMoney": ""
}, {"x": 1624809600000, "y": 2.5, "equityReturn": 1.09, "unitMoney": ""}, {
    "x": 1624896000000,
    "y": 2.489,
    "equityReturn": -0.44,
    "unitMoney": ""
}, {"x": 1624982400000, "y": 2.52, "equityReturn": 1.25, "unitMoney": ""}, {
    "x": 1625068800000,
    "y": 2.499,
    "equityReturn": -0.83,
    "unitMoney": ""
}, {"x": 1625155200000, "y": 2.448, "equityReturn": -2.04, "unitMoney": ""}, {
    "x": 1625414400000,
    "y": 2.451,
    "equityReturn": 0.12,
    "unitMoney": ""
}, {"x": 1625500800000, "y": 2.434, "equityReturn": -0.69, "unitMoney": ""}, {
    "x": 1625587200000,
    "y": 2.448,
    "equityReturn": 0.58,
    "unitMoney": ""
}, {"x": 1625673600000, "y": 2.434, "equityReturn": -0.57, "unitMoney": ""}, {
    "x": 1625760000000,
    "y": 2.399,
    "equityReturn": -1.44,
    "unitMoney": ""
}, {"x": 1626019200000, "y": 2.399, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1626105600000,
    "y": 2.416,
    "equityReturn": 0.71,
    "unitMoney": ""
}, {"x": 1626192000000, "y": 2.39, "equityReturn": -1.08, "unitMoney": ""}, {
    "x": 1626278400000,
    "y": 2.403,
    "equityReturn": 0.54,
    "unitMoney": ""
}, {"x": 1626364800000, "y": 2.38, "equityReturn": -0.96, "unitMoney": ""}, {
    "x": 1626624000000,
    "y": 2.373,
    "equityReturn": -0.29,
    "unitMoney": ""
}, {"x": 1626710400000, "y": 2.373, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1626796800000,
    "y": 2.387,
    "equityReturn": 0.59,
    "unitMoney": ""
}, {"x": 1626883200000, "y": 2.406, "equityReturn": 0.8, "unitMoney": ""}, {
    "x": 1626969600000,
    "y": 2.384,
    "equityReturn": -0.91,
    "unitMoney": ""
}, {"x": 1627228800000, "y": 2.329, "equityReturn": -2.31, "unitMoney": ""}, {
    "x": 1627315200000,
    "y": 2.295,
    "equityReturn": -1.46,
    "unitMoney": ""
}, {"x": 1627401600000, "y": 2.272, "equityReturn": -1.0, "unitMoney": ""}, {
    "x": 1627488000000,
    "y": 2.33,
    "equityReturn": 2.55,
    "unitMoney": ""
}, {"x": 1627574400000, "y": 2.328, "equityReturn": -0.09, "unitMoney": ""}, {
    "x": 1627833600000,
    "y": 2.342,
    "equityReturn": 0.6,
    "unitMoney": ""
}, {"x": 1627920000000, "y": 2.313, "equityReturn": -1.24, "unitMoney": ""}, {
    "x": 1628006400000,
    "y": 2.326,
    "equityReturn": 0.56,
    "unitMoney": ""
}, {"x": 1628092800000, "y": 2.305, "equityReturn": -0.9, "unitMoney": ""}, {
    "x": 1628179200000,
    "y": 2.306,
    "equityReturn": 0.04,
    "unitMoney": ""
}, {"x": 1628438400000, "y": 2.344, "equityReturn": 1.65, "unitMoney": ""}, {
    "x": 1628524800000,
    "y": 2.381,
    "equityReturn": 1.58,
    "unitMoney": ""
}, {"x": 1628611200000, "y": 2.377, "equityReturn": -0.17, "unitMoney": ""}, {
    "x": 1628697600000,
    "y": 2.39,
    "equityReturn": 0.55,
    "unitMoney": ""
}, {"x": 1628784000000, "y": 2.371, "equityReturn": -0.79, "unitMoney": ""}, {
    "x": 1629043200000,
    "y": 2.371,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1629129600000, "y": 2.307, "equityReturn": -2.7, "unitMoney": ""}, {
    "x": 1629216000000,
    "y": 2.302,
    "equityReturn": -0.22,
    "unitMoney": ""
}, {"x": 1629302400000, "y": 2.329, "equityReturn": 1.17, "unitMoney": ""}, {
    "x": 1629388800000,
    "y": 2.335,
    "equityReturn": 0.26,
    "unitMoney": ""
}, {"x": 1629648000000, "y": 2.385, "equityReturn": 2.14, "unitMoney": ""}, {
    "x": 1629734400000,
    "y": 2.392,
    "equityReturn": 0.29,
    "unitMoney": ""
}, {"x": 1629820800000, "y": 2.366, "equityReturn": -1.09, "unitMoney": ""}, {
    "x": 1629907200000,
    "y": 2.334,
    "equityReturn": -1.35,
    "unitMoney": ""
}, {"x": 1629993600000, "y": 2.322, "equityReturn": -0.51, "unitMoney": ""}, {
    "x": 1630252800000,
    "y": 2.332,
    "equityReturn": 0.43,
    "unitMoney": ""
}, {"x": 1630339200000, "y": 2.311, "equityReturn": -0.9, "unitMoney": ""}, {
    "x": 1630425600000,
    "y": 2.324,
    "equityReturn": 0.56,
    "unitMoney": ""
}, {"x": 1630512000000, "y": 2.31, "equityReturn": -0.6, "unitMoney": ""}, {
    "x": 1630598400000,
    "y": 2.301,
    "equityReturn": -0.39,
    "unitMoney": ""
}, {"x": 1630857600000, "y": 2.335, "equityReturn": 1.48, "unitMoney": ""}, {
    "x": 1630944000000,
    "y": 2.339,
    "equityReturn": 0.17,
    "unitMoney": ""
}, {"x": 1631030400000, "y": 2.346, "equityReturn": 0.3, "unitMoney": ""}, {
    "x": 1631116800000,
    "y": 2.322,
    "equityReturn": -1.02,
    "unitMoney": ""
}, {"x": 1631203200000, "y": 2.327, "equityReturn": 0.22, "unitMoney": ""}, {
    "x": 1631462400000,
    "y": 2.321,
    "equityReturn": -0.26,
    "unitMoney": ""
}, {"x": 1631548800000, "y": 2.294, "equityReturn": -1.16, "unitMoney": ""}, {
    "x": 1631635200000,
    "y": 2.27,
    "equityReturn": -1.05,
    "unitMoney": ""
}, {"x": 1631721600000, "y": 2.241, "equityReturn": -1.28, "unitMoney": ""}, {
    "x": 1631808000000,
    "y": 2.248,
    "equityReturn": 0.31,
    "unitMoney": ""
}, {"x": 1632240000000, "y": 2.243, "equityReturn": -0.22, "unitMoney": ""}, {
    "x": 1632326400000,
    "y": 2.285,
    "equityReturn": 1.87,
    "unitMoney": ""
}, {"x": 1632412800000, "y": 2.283, "equityReturn": -0.09, "unitMoney": ""}, {
    "x": 1632672000000,
    "y": 2.256,
    "equityReturn": -1.18,
    "unitMoney": ""
}, {"x": 1632758400000, "y": 2.258, "equityReturn": 0.09, "unitMoney": ""}, {
    "x": 1632844800000,
    "y": 2.216,
    "equityReturn": -1.86,
    "unitMoney": ""
}, {"x": 1632931200000, "y": 2.23, "equityReturn": 0.63, "unitMoney": ""}, {
    "x": 1633622400000,
    "y": 2.254,
    "equityReturn": 1.08,
    "unitMoney": ""
}, {"x": 1633881600000, "y": 2.289, "equityReturn": 1.55, "unitMoney": ""}, {
    "x": 1633968000000,
    "y": 2.238,
    "equityReturn": -2.23,
    "unitMoney": ""
}, {"x": 1634054400000, "y": 2.268, "equityReturn": 1.34, "unitMoney": ""}, {
    "x": 1634140800000,
    "y": 2.273,
    "equityReturn": 0.22,
    "unitMoney": ""
}, {"x": 1634227200000, "y": 2.264, "equityReturn": -0.4, "unitMoney": ""}, {
    "x": 1634486400000,
    "y": 2.251,
    "equityReturn": -0.57,
    "unitMoney": ""
}, {"x": 1634572800000, "y": 2.269, "equityReturn": 0.8, "unitMoney": ""}, {
    "x": 1634659200000,
    "y": 2.244,
    "equityReturn": -1.1,
    "unitMoney": ""
}, {"x": 1634745600000, "y": 2.237, "equityReturn": -0.31, "unitMoney": ""}, {
    "x": 1634832000000,
    "y": 2.248,
    "equityReturn": 0.49,
    "unitMoney": ""
}, {"x": 1635091200000, "y": 2.262, "equityReturn": 0.62, "unitMoney": ""}, {
    "x": 1635177600000,
    "y": 2.26,
    "equityReturn": -0.09,
    "unitMoney": ""
}, {"x": 1635264000000, "y": 2.221, "equityReturn": -1.73, "unitMoney": ""}, {
    "x": 1635350400000,
    "y": 2.216,
    "equityReturn": -0.23,
    "unitMoney": ""
}, {"x": 1635436800000, "y": 2.254, "equityReturn": 1.71, "unitMoney": ""}, {
    "x": 1635696000000,
    "y": 2.293,
    "equityReturn": 1.73,
    "unitMoney": ""
}, {"x": 1635782400000, "y": 2.286, "equityReturn": -0.31, "unitMoney": ""}, {
    "x": 1635868800000,
    "y": 2.292,
    "equityReturn": 0.26,
    "unitMoney": ""
}, {"x": 1635955200000, "y": 2.337, "equityReturn": 1.96, "unitMoney": ""}, {
    "x": 1636041600000,
    "y": 2.342,
    "equityReturn": 0.21,
    "unitMoney": ""
}, {"x": 1636300800000, "y": 2.343, "equityReturn": 0.04, "unitMoney": ""}, {
    "x": 1636387200000,
    "y": 2.359,
    "equityReturn": 0.68,
    "unitMoney": ""
}, {"x": 1636473600000, "y": 2.359, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1636560000000,
    "y": 2.372,
    "equityReturn": 0.55,
    "unitMoney": ""
}, {"x": 1636646400000, "y": 2.391, "equityReturn": 0.8, "unitMoney": ""}, {
    "x": 1636905600000,
    "y": 2.412,
    "equityReturn": 0.88,
    "unitMoney": ""
}, {"x": 1636992000000, "y": 2.403, "equityReturn": -0.37, "unitMoney": ""}, {
    "x": 1637078400000,
    "y": 2.414,
    "equityReturn": 0.46,
    "unitMoney": ""
}, {"x": 1637164800000, "y": 2.402, "equityReturn": -0.5, "unitMoney": ""}, {
    "x": 1637251200000,
    "y": 2.433,
    "equityReturn": 1.29,
    "unitMoney": ""
}, {"x": 1637510400000, "y": 2.479, "equityReturn": 1.89, "unitMoney": ""}, {
    "x": 1637596800000,
    "y": 2.496,
    "equityReturn": 0.69,
    "unitMoney": ""
}, {"x": 1637683200000, "y": 2.484, "equityReturn": -0.48, "unitMoney": ""}, {
    "x": 1637769600000,
    "y": 2.463,
    "equityReturn": -0.85,
    "unitMoney": ""
}, {"x": 1637856000000, "y": 2.445, "equityReturn": -0.73, "unitMoney": ""}, {
    "x": 1638115200000,
    "y": 2.437,
    "equityReturn": -0.33,
    "unitMoney": ""
}, {"x": 1638201600000, "y": 2.454, "equityReturn": 0.7, "unitMoney": ""}, {
    "x": 1638288000000,
    "y": 2.435,
    "equityReturn": -0.77,
    "unitMoney": ""
}, {"x": 1638374400000, "y": 2.413, "equityReturn": -0.9, "unitMoney": ""}, {
    "x": 1638460800000,
    "y": 2.43,
    "equityReturn": 0.7,
    "unitMoney": ""
}, {"x": 1638720000000, "y": 2.402, "equityReturn": -1.15, "unitMoney": ""}, {
    "x": 1638806400000,
    "y": 2.39,
    "equityReturn": -0.5,
    "unitMoney": ""
}, {"x": 1638892800000, "y": 2.429, "equityReturn": 1.63, "unitMoney": ""}, {
    "x": 1638979200000,
    "y": 2.454,
    "equityReturn": 1.03,
    "unitMoney": ""
}, {"x": 1639065600000, "y": 2.426, "equityReturn": -1.14, "unitMoney": ""}, {
    "x": 1639324800000,
    "y": 2.435,
    "equityReturn": 0.37,
    "unitMoney": ""
}, {"x": 1639411200000, "y": 2.437, "equityReturn": 0.08, "unitMoney": ""}, {
    "x": 1639497600000,
    "y": 2.421,
    "equityReturn": -0.66,
    "unitMoney": ""
}, {"x": 1639584000000, "y": 2.462, "equityReturn": 1.69, "unitMoney": ""}, {
    "x": 1639670400000,
    "y": 2.435,
    "equityReturn": -1.1,
    "unitMoney": ""
}, {"x": 1639929600000, "y": 2.408, "equityReturn": -1.11, "unitMoney": ""}, {
    "x": 1640016000000,
    "y": 2.456,
    "equityReturn": 1.99,
    "unitMoney": ""
}, {"x": 1640102400000, "y": 2.507, "equityReturn": 2.08, "unitMoney": ""}, {
    "x": 1640188800000,
    "y": 2.499,
    "equityReturn": -0.32,
    "unitMoney": ""
}, {"x": 1640275200000, "y": 2.514, "equityReturn": 0.6, "unitMoney": ""}, {
    "x": 1640534400000,
    "y": 2.522,
    "equityReturn": 0.32,
    "unitMoney": ""
}, {"x": 1640620800000, "y": 2.513, "equityReturn": -0.36, "unitMoney": ""}, {
    "x": 1640707200000,
    "y": 2.49,
    "equityReturn": -0.92,
    "unitMoney": ""
}, {"x": 1640793600000, "y": 2.548, "equityReturn": 2.33, "unitMoney": ""}, {
    "x": 1640880000000,
    "y": 2.578,
    "equityReturn": 1.18,
    "unitMoney": ""
}, {"x": 1641225600000, "y": 2.59, "equityReturn": 0.47, "unitMoney": ""}, {
    "x": 1641312000000,
    "y": 2.546,
    "equityReturn": -1.7,
    "unitMoney": ""
}, {"x": 1641398400000, "y": 2.52, "equityReturn": -1.02, "unitMoney": ""}, {
    "x": 1641484800000,
    "y": 2.497,
    "equityReturn": -0.91,
    "unitMoney": ""
}, {"x": 1641744000000, "y": 2.513, "equityReturn": 0.64, "unitMoney": ""}, {
    "x": 1641830400000,
    "y": 2.449,
    "equityReturn": -2.55,
    "unitMoney": ""
}, {"x": 1641916800000, "y": 2.461, "equityReturn": 0.49, "unitMoney": ""}, {
    "x": 1642003200000,
    "y": 2.41,
    "equityReturn": -2.07,
    "unitMoney": ""
}, {"x": 1642089600000, "y": 2.448, "equityReturn": 1.58, "unitMoney": ""}, {
    "x": 1642348800000,
    "y": 2.498,
    "equityReturn": 2.04,
    "unitMoney": ""
}, {"x": 1642435200000, "y": 2.492, "equityReturn": -0.24, "unitMoney": ""}, {
    "x": 1642521600000,
    "y": 2.469,
    "equityReturn": -0.92,
    "unitMoney": ""
}, {"x": 1642608000000, "y": 2.455, "equityReturn": -0.57, "unitMoney": ""}, {
    "x": 1642694400000,
    "y": 2.425,
    "equityReturn": -1.22,
    "unitMoney": ""
}, {"x": 1642953600000, "y": 2.413, "equityReturn": -0.49, "unitMoney": ""}, {
    "x": 1643040000000,
    "y": 2.325,
    "equityReturn": -3.65,
    "unitMoney": ""
}, {"x": 1643126400000, "y": 2.325, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1643212800000,
    "y": 2.276,
    "equityReturn": -2.11,
    "unitMoney": ""
}, {"x": 1643299200000, "y": 2.255, "equityReturn": -0.92, "unitMoney": ""}, {
    "x": 1644163200000,
    "y": 2.277,
    "equityReturn": 0.98,
    "unitMoney": ""
}, {"x": 1644249600000, "y": 2.265, "equityReturn": -0.53, "unitMoney": ""}, {
    "x": 1644336000000,
    "y": 2.283,
    "equityReturn": 0.79,
    "unitMoney": ""
}, {"x": 1644422400000, "y": 2.29, "equityReturn": 0.31, "unitMoney": ""}, {
    "x": 1644508800000,
    "y": 2.251,
    "equityReturn": -1.7,
    "unitMoney": ""
}, {"x": 1644768000000, "y": 2.241, "equityReturn": -0.44, "unitMoney": ""}, {
    "x": 1644854400000,
    "y": 2.27,
    "equityReturn": 1.29,
    "unitMoney": ""
}, {"x": 1644940800000, "y": 2.265, "equityReturn": -0.22, "unitMoney": ""}, {
    "x": 1645027200000,
    "y": 2.261,
    "equityReturn": -0.18,
    "unitMoney": ""
}, {"x": 1645113600000, "y": 2.266, "equityReturn": 0.22, "unitMoney": ""}, {
    "x": 1645372800000,
    "y": 2.274,
    "equityReturn": 0.35,
    "unitMoney": ""
}, {"x": 1645459200000, "y": 2.238, "equityReturn": -1.58, "unitMoney": ""}, {
    "x": 1645545600000,
    "y": 2.279,
    "equityReturn": 1.83,
    "unitMoney": ""
}, {"x": 1645632000000, "y": 2.236, "equityReturn": -1.89, "unitMoney": ""}, {
    "x": 1645718400000,
    "y": 2.271,
    "equityReturn": 1.57,
    "unitMoney": ""
}, {"x": 1645977600000, "y": 2.251, "equityReturn": -0.88, "unitMoney": ""}, {
    "x": 1646064000000,
    "y": 2.247,
    "equityReturn": -0.18,
    "unitMoney": ""
}, {"x": 1646150400000, "y": 2.241, "equityReturn": -0.27, "unitMoney": ""}, {
    "x": 1646236800000,
    "y": 2.227,
    "equityReturn": -0.62,
    "unitMoney": ""
}, {"x": 1646323200000, "y": 2.219, "equityReturn": -0.36, "unitMoney": ""}, {
    "x": 1646582400000,
    "y": 2.152,
    "equityReturn": -3.02,
    "unitMoney": ""
}, {"x": 1646668800000, "y": 2.097, "equityReturn": -2.56, "unitMoney": ""}, {
    "x": 1646755200000,
    "y": 2.068,
    "equityReturn": -1.38,
    "unitMoney": ""
}, {"x": 1646841600000, "y": 2.1, "equityReturn": 1.55, "unitMoney": ""}, {
    "x": 1646928000000,
    "y": 2.117,
    "equityReturn": 0.81,
    "unitMoney": ""
}, {"x": 1647187200000, "y": 2.057, "equityReturn": -2.83, "unitMoney": ""}, {
    "x": 1647273600000,
    "y": 1.969,
    "equityReturn": -4.28,
    "unitMoney": ""
}, {"x": 1647360000000, "y": 2.021, "equityReturn": 2.64, "unitMoney": ""}, {
    "x": 1647446400000,
    "y": 2.049,
    "equityReturn": 1.39,
    "unitMoney": ""
}, {"x": 1647532800000, "y": 2.054, "equityReturn": 0.24, "unitMoney": ""}, {
    "x": 1647792000000,
    "y": 2.061,
    "equityReturn": 0.34,
    "unitMoney": ""
}, {"x": 1647878400000, "y": 2.056, "equityReturn": -0.24, "unitMoney": ""}, {
    "x": 1647964800000,
    "y": 2.071,
    "equityReturn": 0.73,
    "unitMoney": ""
}, {"x": 1648051200000, "y": 2.042, "equityReturn": -1.4, "unitMoney": ""}, {
    "x": 1648137600000,
    "y": 2.017,
    "equityReturn": -1.22,
    "unitMoney": ""
}, {"x": 1648396800000, "y": 2.017, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1648483200000,
    "y": 2.01,
    "equityReturn": -0.35,
    "unitMoney": ""
}, {"x": 1648569600000, "y": 2.038, "equityReturn": 1.39, "unitMoney": ""}, {
    "x": 1648656000000,
    "y": 2.023,
    "equityReturn": -0.74,
    "unitMoney": ""
}, {"x": 1648742400000, "y": 2.029, "equityReturn": 0.3, "unitMoney": ""}, {
    "x": 1649174400000,
    "y": 2.033,
    "equityReturn": 0.2,
    "unitMoney": ""
}, {"x": 1649260800000, "y": 1.986, "equityReturn": -2.31, "unitMoney": ""}, {
    "x": 1649347200000,
    "y": 1.979,
    "equityReturn": -0.35,
    "unitMoney": ""
}, {"x": 1649606400000, "y": 1.944, "equityReturn": -1.77, "unitMoney": ""}, {
    "x": 1649692800000,
    "y": 1.962,
    "equityReturn": 0.93,
    "unitMoney": ""
}, {"x": 1649779200000, "y": 1.936, "equityReturn": -1.33, "unitMoney": ""}, {
    "x": 1649865600000,
    "y": 1.953,
    "equityReturn": 0.88,
    "unitMoney": ""
}, {"x": 1649952000000, "y": 1.958, "equityReturn": 0.26, "unitMoney": ""}, {
    "x": 1650211200000,
    "y": 1.97,
    "equityReturn": 0.61,
    "unitMoney": ""
}, {"x": 1650297600000, "y": 1.976, "equityReturn": 0.3, "unitMoney": ""}, {
    "x": 1650384000000,
    "y": 1.961,
    "equityReturn": -0.76,
    "unitMoney": ""
}, {"x": 1650470400000, "y": 1.914, "equityReturn": -2.4, "unitMoney": ""}, {
    "x": 1650556800000,
    "y": 1.898,
    "equityReturn": -0.84,
    "unitMoney": ""
}, {"x": 1650816000000, "y": 1.831, "equityReturn": -3.53, "unitMoney": ""}, {
    "x": 1650902400000,
    "y": 1.814,
    "equityReturn": -0.93,
    "unitMoney": ""
}, {"x": 1650988800000, "y": 1.872, "equityReturn": 3.2, "unitMoney": ""}, {
    "x": 1651075200000,
    "y": 1.855,
    "equityReturn": -0.91,
    "unitMoney": ""
}, {"x": 1651161600000, "y": 1.93, "equityReturn": 4.04, "unitMoney": ""}, {
    "x": 1651680000000,
    "y": 1.953,
    "equityReturn": 1.19,
    "unitMoney": ""
}, {"x": 1651766400000, "y": 1.92, "equityReturn": -1.69, "unitMoney": ""}, {
    "x": 1652025600000,
    "y": 1.92,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1652112000000, "y": 1.951, "equityReturn": 1.61, "unitMoney": ""}, {
    "x": 1652198400000,
    "y": 1.95,
    "equityReturn": -0.05,
    "unitMoney": ""
}, {"x": 1652284800000, "y": 1.966, "equityReturn": 0.82, "unitMoney": ""}, {
    "x": 1652371200000,
    "y": 1.977,
    "equityReturn": 0.56,
    "unitMoney": ""
}, {"x": 1652630400000, "y": 1.965, "equityReturn": -0.61, "unitMoney": ""}, {
    "x": 1652716800000,
    "y": 1.971,
    "equityReturn": 0.31,
    "unitMoney": ""
}, {"x": 1652803200000, "y": 1.968, "equityReturn": -0.15, "unitMoney": ""}, {
    "x": 1652889600000,
    "y": 1.971,
    "equityReturn": 0.15,
    "unitMoney": ""
}, {"x": 1652976000000, "y": 2.0, "equityReturn": 1.47, "unitMoney": ""}, {
    "x": 1653235200000,
    "y": 1.999,
    "equityReturn": -0.05,
    "unitMoney": ""
}, {"x": 1653321600000, "y": 1.943, "equityReturn": -2.8, "unitMoney": ""}, {
    "x": 1653408000000,
    "y": 1.965,
    "equityReturn": 1.13,
    "unitMoney": ""
}, {"x": 1653494400000, "y": 1.978, "equityReturn": 0.66, "unitMoney": ""}, {
    "x": 1653580800000,
    "y": 1.97,
    "equityReturn": -0.4,
    "unitMoney": ""
}, {"x": 1653840000000, "y": 1.985, "equityReturn": 0.76, "unitMoney": ""}, {
    "x": 1653926400000,
    "y": 2.011,
    "equityReturn": 1.31,
    "unitMoney": ""
}, {"x": 1654012800000, "y": 2.017, "equityReturn": 0.3, "unitMoney": ""}, {
    "x": 1654099200000,
    "y": 2.037,
    "equityReturn": 0.99,
    "unitMoney": ""
}, {"x": 1654444800000, "y": 2.081, "equityReturn": 2.16, "unitMoney": ""}, {
    "x": 1654531200000,
    "y": 2.073,
    "equityReturn": -0.38,
    "unitMoney": ""
}, {"x": 1654617600000, "y": 2.085, "equityReturn": 0.58, "unitMoney": ""}, {
    "x": 1654704000000,
    "y": 2.055,
    "equityReturn": -1.44,
    "unitMoney": ""
}, {"x": 1654790400000, "y": 2.088, "equityReturn": 1.61, "unitMoney": ""}, {
    "x": 1655049600000,
    "y": 2.065,
    "equityReturn": -1.1,
    "unitMoney": ""
}, {"x": 1655136000000, "y": 2.052, "equityReturn": -0.63, "unitMoney": ""}, {
    "x": 1655222400000,
    "y": 2.063,
    "equityReturn": 0.54,
    "unitMoney": ""
}, {"x": 1655308800000, "y": 2.077, "equityReturn": 0.68, "unitMoney": ""}, {
    "x": 1655395200000,
    "y": 2.097,
    "equityReturn": 0.96,
    "unitMoney": ""
}, {"x": 1655654400000, "y": 2.109, "equityReturn": 0.57, "unitMoney": ""}, {
    "x": 1655740800000,
    "y": 2.095,
    "equityReturn": -0.66,
    "unitMoney": ""
}, {"x": 1655827200000, "y": 2.051, "equityReturn": -2.1, "unitMoney": ""}, {
    "x": 1655913600000,
    "y": 2.073,
    "equityReturn": 1.07,
    "unitMoney": ""
}, {"x": 1656000000000, "y": 2.083, "equityReturn": 0.48, "unitMoney": ""}, {
    "x": 1656259200000,
    "y": 2.108,
    "equityReturn": 1.2,
    "unitMoney": ""
}, {"x": 1656345600000, "y": 2.126, "equityReturn": 0.85, "unitMoney": ""}, {
    "x": 1656432000000,
    "y": 2.106,
    "equityReturn": -0.94,
    "unitMoney": ""
}, {"x": 1656518400000, "y": 2.126, "equityReturn": 0.95, "unitMoney": ""}, {
    "x": 1656604800000,
    "y": 2.112,
    "equityReturn": -0.66,
    "unitMoney": ""
}, {"x": 1656864000000, "y": 2.118, "equityReturn": 0.28, "unitMoney": ""}, {
    "x": 1656950400000,
    "y": 2.1,
    "equityReturn": -0.85,
    "unitMoney": ""
}, {"x": 1657036800000, "y": 2.07, "equityReturn": -1.43, "unitMoney": ""}, {
    "x": 1657123200000,
    "y": 2.062,
    "equityReturn": -0.39,
    "unitMoney": ""
}, {"x": 1657209600000, "y": 2.066, "equityReturn": 0.19, "unitMoney": ""}, {
    "x": 1657468800000,
    "y": 2.037,
    "equityReturn": -1.4,
    "unitMoney": ""
}, {"x": 1657555200000, "y": 2.013, "equityReturn": -1.18, "unitMoney": ""}, {
    "x": 1657641600000,
    "y": 2.011,
    "equityReturn": -0.1,
    "unitMoney": ""
}, {"x": 1657728000000, "y": 2.014, "equityReturn": 0.15, "unitMoney": ""}, {
    "x": 1657814400000,
    "y": 1.992,
    "equityReturn": -1.09,
    "unitMoney": ""
}, {"x": 1658073600000, "y": 2.001, "equityReturn": 0.45, "unitMoney": ""}, {
    "x": 1658160000000,
    "y": 2.018,
    "equityReturn": 0.85,
    "unitMoney": ""
}, {"x": 1658246400000, "y": 2.029, "equityReturn": 0.55, "unitMoney": ""}, {
    "x": 1658332800000,
    "y": 2.032,
    "equityReturn": 0.15,
    "unitMoney": ""
}, {"x": 1658419200000, "y": 2.018, "equityReturn": -0.69, "unitMoney": ""}, {
    "x": 1658678400000,
    "y": 2.002,
    "equityReturn": -0.79,
    "unitMoney": ""
}, {"x": 1658764800000, "y": 2.017, "equityReturn": 0.75, "unitMoney": ""}, {
    "x": 1658851200000,
    "y": 2.031,
    "equityReturn": 0.69,
    "unitMoney": ""
}, {"x": 1658937600000, "y": 2.032, "equityReturn": 0.05, "unitMoney": ""}, {
    "x": 1659024000000,
    "y": 2.01,
    "equityReturn": -1.08,
    "unitMoney": ""
}, {"x": 1659283200000, "y": 2.025, "equityReturn": 0.75, "unitMoney": ""}, {
    "x": 1659369600000,
    "y": 1.998,
    "equityReturn": -1.33,
    "unitMoney": ""
}, {"x": 1659456000000, "y": 1.989, "equityReturn": -0.45, "unitMoney": ""}, {
    "x": 1659542400000,
    "y": 2.006,
    "equityReturn": 0.85,
    "unitMoney": ""
}, {"x": 1659628800000, "y": 2.065, "equityReturn": 2.94, "unitMoney": ""}, {
    "x": 1659888000000,
    "y": 2.061,
    "equityReturn": -0.19,
    "unitMoney": ""
}, {"x": 1659974400000, "y": 2.071, "equityReturn": 0.49, "unitMoney": ""}, {
    "x": 1660060800000,
    "y": 2.054,
    "equityReturn": -0.82,
    "unitMoney": ""
}, {"x": 1660147200000, "y": 2.081, "equityReturn": 1.31, "unitMoney": ""}, {
    "x": 1660233600000,
    "y": 2.082,
    "equityReturn": 0.05,
    "unitMoney": ""
}, {"x": 1660492800000, "y": 2.057, "equityReturn": -1.2, "unitMoney": ""}, {
    "x": 1660579200000,
    "y": 2.051,
    "equityReturn": -0.29,
    "unitMoney": ""
}, {"x": 1660665600000, "y": 2.056, "equityReturn": 0.24, "unitMoney": ""}, {
    "x": 1660752000000,
    "y": 2.031,
    "equityReturn": -1.22,
    "unitMoney": ""
}, {"x": 1660838400000, "y": 2.008, "equityReturn": -1.13, "unitMoney": ""}, {
    "x": 1661097600000,
    "y": 2.024,
    "equityReturn": 0.8,
    "unitMoney": ""
}, {"x": 1661184000000, "y": 2.02, "equityReturn": -0.2, "unitMoney": ""}, {
    "x": 1661270400000,
    "y": 1.971,
    "equityReturn": -2.43,
    "unitMoney": ""
}, {"x": 1661356800000, "y": 1.985, "equityReturn": 0.71, "unitMoney": ""}, {
    "x": 1661443200000,
    "y": 1.976,
    "equityReturn": -0.45,
    "unitMoney": ""
}, {"x": 1661702400000, "y": 1.972, "equityReturn": -0.2, "unitMoney": ""}, {
    "x": 1661788800000,
    "y": 1.967,
    "equityReturn": -0.25,
    "unitMoney": ""
}, {"x": 1661875200000, "y": 1.961, "equityReturn": -0.31, "unitMoney": ""}, {
    "x": 1661961600000,
    "y": 1.951,
    "equityReturn": -0.51,
    "unitMoney": ""
}, {"x": 1662048000000, "y": 1.955, "equityReturn": 0.21, "unitMoney": ""}, {
    "x": 1662307200000,
    "y": 1.961,
    "equityReturn": 0.31,
    "unitMoney": ""
}, {"x": 1662393600000, "y": 1.97, "equityReturn": 0.46, "unitMoney": ""}, {
    "x": 1662480000000,
    "y": 1.974,
    "equityReturn": 0.2,
    "unitMoney": ""
}, {"x": 1662566400000, "y": 1.985, "equityReturn": 0.56, "unitMoney": ""}, {
    "x": 1662652800000,
    "y": 1.986,
    "equityReturn": 0.05,
    "unitMoney": ""
}, {"x": 1662998400000, "y": 2.004, "equityReturn": 0.91, "unitMoney": ""}, {
    "x": 1663084800000,
    "y": 1.988,
    "equityReturn": -0.8,
    "unitMoney": ""
}, {"x": 1663171200000, "y": 1.975, "equityReturn": -0.65, "unitMoney": ""}, {
    "x": 1663257600000,
    "y": 1.941,
    "equityReturn": -1.72,
    "unitMoney": ""
}, {"x": 1663516800000, "y": 1.935, "equityReturn": -0.31, "unitMoney": ""}, {
    "x": 1663603200000,
    "y": 1.93,
    "equityReturn": -0.26,
    "unitMoney": ""
}, {"x": 1663689600000, "y": 1.919, "equityReturn": -0.57, "unitMoney": ""}, {
    "x": 1663776000000,
    "y": 1.918,
    "equityReturn": -0.05,
    "unitMoney": ""
}, {"x": 1663862400000, "y": 1.905, "equityReturn": -0.68, "unitMoney": ""}, {
    "x": 1664121600000,
    "y": 1.875,
    "equityReturn": -1.57,
    "unitMoney": ""
}, {"x": 1664208000000, "y": 1.901, "equityReturn": 1.39, "unitMoney": ""}, {
    "x": 1664294400000,
    "y": 1.874,
    "equityReturn": -1.42,
    "unitMoney": ""
}, {"x": 1664380800000, "y": 1.891, "equityReturn": 0.91, "unitMoney": ""}, {
    "x": 1664467200000,
    "y": 1.893,
    "equityReturn": 0.11,
    "unitMoney": ""
}, {"x": 1665331200000, "y": 1.858, "equityReturn": -1.85, "unitMoney": ""}, {
    "x": 1665417600000,
    "y": 1.853,
    "equityReturn": -0.27,
    "unitMoney": ""
}, {"x": 1665504000000, "y": 1.875, "equityReturn": 1.19, "unitMoney": ""}, {
    "x": 1665590400000,
    "y": 1.874,
    "equityReturn": -0.05,
    "unitMoney": ""
}, {"x": 1665676800000, "y": 1.911, "equityReturn": 1.97, "unitMoney": ""}, {
    "x": 1665936000000,
    "y": 1.933,
    "equityReturn": 1.15,
    "unitMoney": ""
}, {"x": 1666022400000, "y": 1.941, "equityReturn": 0.41, "unitMoney": ""}, {
    "x": 1666108800000,
    "y": 1.916,
    "equityReturn": -1.29,
    "unitMoney": ""
}, {"x": 1666195200000, "y": 1.909, "equityReturn": -0.37, "unitMoney": ""}, {
    "x": 1666281600000,
    "y": 1.909,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1666540800000, "y": 1.904, "equityReturn": -0.26, "unitMoney": ""}, {
    "x": 1666627200000,
    "y": 1.9,
    "equityReturn": -0.21,
    "unitMoney": ""
}, {"x": 1666713600000, "y": 1.915, "equityReturn": 0.79, "unitMoney": ""}, {
    "x": 1666800000000,
    "y": 1.915,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1666886400000, "y": 1.882, "equityReturn": -1.72, "unitMoney": ""}, {
    "x": 1667145600000,
    "y": 1.869,
    "equityReturn": -0.69,
    "unitMoney": ""
}, {"x": 1667232000000, "y": 1.897, "equityReturn": 1.5, "unitMoney": ""}, {
    "x": 1667318400000,
    "y": 1.906,
    "equityReturn": 0.47,
    "unitMoney": ""
}, {"x": 1667404800000, "y": 1.903, "equityReturn": -0.16, "unitMoney": ""}, {
    "x": 1667491200000,
    "y": 1.935,
    "equityReturn": 1.68,
    "unitMoney": ""
}, {"x": 1667750400000, "y": 1.929, "equityReturn": -0.31, "unitMoney": ""}, {
    "x": 1667836800000,
    "y": 1.922,
    "equityReturn": -0.36,
    "unitMoney": ""
}, {"x": 1667923200000, "y": 1.917, "equityReturn": -0.26, "unitMoney": ""}, {
    "x": 1668009600000,
    "y": 1.905,
    "equityReturn": -0.63,
    "unitMoney": ""
}, {"x": 1668096000000, "y": 1.942, "equityReturn": 1.94, "unitMoney": ""}, {
    "x": 1668355200000,
    "y": 1.954,
    "equityReturn": 0.62,
    "unitMoney": ""
}, {"x": 1668441600000, "y": 1.977, "equityReturn": 1.18, "unitMoney": ""}, {
    "x": 1668528000000,
    "y": 1.966,
    "equityReturn": -0.56,
    "unitMoney": ""
}, {"x": 1668614400000, "y": 1.977, "equityReturn": 0.56, "unitMoney": ""}, {
    "x": 1668700800000,
    "y": 1.98,
    "equityReturn": 0.15,
    "unitMoney": ""
}, {"x": 1668960000000, "y": 1.965, "equityReturn": -0.76, "unitMoney": ""}, {
    "x": 1669046400000,
    "y": 1.963,
    "equityReturn": -0.1,
    "unitMoney": ""
}, {"x": 1669132800000, "y": 1.967, "equityReturn": 0.2, "unitMoney": ""}, {
    "x": 1669219200000,
    "y": 1.966,
    "equityReturn": -0.05,
    "unitMoney": ""
}, {"x": 1669305600000, "y": 1.978, "equityReturn": 0.61, "unitMoney": ""}, {
    "x": 1669564800000,
    "y": 1.963,
    "equityReturn": -0.76,
    "unitMoney": ""
}, {"x": 1669651200000, "y": 1.997, "equityReturn": 1.73, "unitMoney": ""}, {
    "x": 1669737600000,
    "y": 2.003,
    "equityReturn": 0.3,
    "unitMoney": ""
}, {"x": 1669824000000, "y": 2.02, "equityReturn": 0.85, "unitMoney": ""}, {
    "x": 1669910400000,
    "y": 2.01,
    "equityReturn": -0.5,
    "unitMoney": ""
}, {"x": 1670169600000, "y": 2.039, "equityReturn": 1.44, "unitMoney": ""}, {
    "x": 1670256000000,
    "y": 2.042,
    "equityReturn": 0.15,
    "unitMoney": ""
}, {"x": 1670342400000, "y": 2.03, "equityReturn": -0.59, "unitMoney": ""}, {
    "x": 1670428800000,
    "y": 2.029,
    "equityReturn": -0.05,
    "unitMoney": ""
}, {"x": 1670515200000, "y": 2.037, "equityReturn": 0.39, "unitMoney": ""}, {
    "x": 1670774400000,
    "y": 2.018,
    "equityReturn": -0.93,
    "unitMoney": ""
}, {"x": 1670860800000, "y": 2.017, "equityReturn": -0.05, "unitMoney": ""}, {
    "x": 1670947200000,
    "y": 2.013,
    "equityReturn": -0.2,
    "unitMoney": ""
}, {"x": 1671033600000, "y": 2.003, "equityReturn": -0.5, "unitMoney": ""}, {
    "x": 1671120000000,
    "y": 1.998,
    "equityReturn": -0.25,
    "unitMoney": ""
}, {"x": 1671379200000, "y": 1.972, "equityReturn": -1.3, "unitMoney": ""}, {
    "x": 1671465600000,
    "y": 1.955,
    "equityReturn": -0.86,
    "unitMoney": ""
}, {"x": 1671552000000, "y": 1.963, "equityReturn": 0.41, "unitMoney": ""}, {
    "x": 1671638400000,
    "y": 1.957,
    "equityReturn": -0.31,
    "unitMoney": ""
}, {"x": 1671724800000, "y": 1.954, "equityReturn": -0.15, "unitMoney": ""}, {
    "x": 1671984000000,
    "y": 1.98,
    "equityReturn": 1.33,
    "unitMoney": ""
}, {"x": 1672070400000, "y": 2.004, "equityReturn": 1.21, "unitMoney": ""}, {
    "x": 1672156800000,
    "y": 1.998,
    "equityReturn": -0.3,
    "unitMoney": ""
}, {"x": 1672243200000, "y": 2.001, "equityReturn": 0.15, "unitMoney": ""}, {
    "x": 1672329600000,
    "y": 2.011,
    "equityReturn": 0.5,
    "unitMoney": ""
}, {"x": 1672416000000, "y": 2.011, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1672675200000,
    "y": 2.045,
    "equityReturn": 1.69,
    "unitMoney": ""
}, {"x": 1672761600000, "y": 2.056, "equityReturn": 0.54, "unitMoney": ""}, {
    "x": 1672848000000,
    "y": 2.075,
    "equityReturn": 0.92,
    "unitMoney": ""
}, {"x": 1672934400000, "y": 2.065, "equityReturn": -0.48, "unitMoney": ""}, {
    "x": 1673193600000,
    "y": 2.073,
    "equityReturn": 0.39,
    "unitMoney": ""
}, {"x": 1673280000000, "y": 2.074, "equityReturn": 0.05, "unitMoney": ""}, {
    "x": 1673366400000,
    "y": 2.061,
    "equityReturn": -0.63,
    "unitMoney": ""
}, {"x": 1673452800000, "y": 2.064, "equityReturn": 0.15, "unitMoney": ""}, {
    "x": 1673539200000,
    "y": 2.08,
    "equityReturn": 0.78,
    "unitMoney": ""
}, {"x": 1673798400000, "y": 2.079, "equityReturn": -0.05, "unitMoney": ""}, {
    "x": 1673884800000,
    "y": 2.084,
    "equityReturn": 0.24,
    "unitMoney": ""
}, {"x": 1673971200000, "y": 2.088, "equityReturn": 0.19, "unitMoney": ""}, {
    "x": 1674057600000,
    "y": 2.109,
    "equityReturn": 1.01,
    "unitMoney": ""
}, {"x": 1674144000000, "y": 2.137, "equityReturn": 1.33, "unitMoney": ""}, {
    "x": 1675008000000,
    "y": 2.136,
    "equityReturn": -0.05,
    "unitMoney": ""
}, {"x": 1675094400000, "y": 2.131, "equityReturn": -0.23, "unitMoney": ""}, {
    "x": 1675180800000,
    "y": 2.153,
    "equityReturn": 1.03,
    "unitMoney": ""
}, {"x": 1675267200000, "y": 2.167, "equityReturn": 0.65, "unitMoney": ""}, {
    "x": 1675353600000,
    "y": 2.175,
    "equityReturn": 0.37,
    "unitMoney": ""
}, {"x": 1675612800000, "y": 2.168, "equityReturn": -0.32, "unitMoney": ""}, {
    "x": 1675699200000,
    "y": 2.185,
    "equityReturn": 0.78,
    "unitMoney": ""
}, {"x": 1675785600000, "y": 2.183, "equityReturn": -0.09, "unitMoney": ""}, {
    "x": 1675872000000,
    "y": 2.202,
    "equityReturn": 0.87,
    "unitMoney": ""
}, {"x": 1675958400000, "y": 2.191, "equityReturn": -0.5, "unitMoney": ""}, {
    "x": 1676217600000,
    "y": 2.225,
    "equityReturn": 1.55,
    "unitMoney": ""
}, {"x": 1676304000000, "y": 2.22, "equityReturn": -0.22, "unitMoney": ""}, {
    "x": 1676390400000,
    "y": 2.22,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1676476800000, "y": 2.209, "equityReturn": -0.5, "unitMoney": ""}, {
    "x": 1676563200000,
    "y": 2.203,
    "equityReturn": -0.27,
    "unitMoney": ""
}, {"x": 1676822400000, "y": 2.253, "equityReturn": 2.27, "unitMoney": ""}, {
    "x": 1676908800000,
    "y": 2.247,
    "equityReturn": -0.27,
    "unitMoney": ""
}, {"x": 1676995200000, "y": 2.235, "equityReturn": -0.53, "unitMoney": ""}, {
    "x": 1677081600000,
    "y": 2.233,
    "equityReturn": -0.09,
    "unitMoney": ""
}, {"x": 1677168000000, "y": 2.222, "equityReturn": -0.49, "unitMoney": ""}, {
    "x": 1677427200000,
    "y": 2.221,
    "equityReturn": -0.05,
    "unitMoney": ""
}, {"x": 1677513600000, "y": 2.231, "equityReturn": 0.45, "unitMoney": ""}, {
    "x": 1677600000000,
    "y": 2.254,
    "equityReturn": 1.03,
    "unitMoney": ""
}, {"x": 1677686400000, "y": 2.259, "equityReturn": 0.22, "unitMoney": ""}, {
    "x": 1677772800000,
    "y": 2.255,
    "equityReturn": -0.18,
    "unitMoney": ""
}, {"x": 1678032000000, "y": 2.266, "equityReturn": 0.49, "unitMoney": ""}, {
    "x": 1678118400000,
    "y": 2.245,
    "equityReturn": -0.93,
    "unitMoney": ""
}, {"x": 1678204800000, "y": 2.238, "equityReturn": -0.31, "unitMoney": ""}, {
    "x": 1678291200000,
    "y": 2.237,
    "equityReturn": -0.04,
    "unitMoney": ""
}, {"x": 1678377600000, "y": 2.226, "equityReturn": -0.49, "unitMoney": ""}, {
    "x": 1678636800000,
    "y": 2.266,
    "equityReturn": 1.8,
    "unitMoney": ""
}, {"x": 1678723200000, "y": 2.247, "equityReturn": -0.84, "unitMoney": ""}, {
    "x": 1678809600000,
    "y": 2.266,
    "equityReturn": 0.85,
    "unitMoney": ""
}, {"x": 1678896000000, "y": 2.238, "equityReturn": -1.24, "unitMoney": ""}, {
    "x": 1678982400000,
    "y": 2.257,
    "equityReturn": 0.85,
    "unitMoney": ""
}, {"x": 1679241600000, "y": 2.244, "equityReturn": -0.58, "unitMoney": ""}, {
    "x": 1679328000000,
    "y": 2.255,
    "equityReturn": 0.49,
    "unitMoney": ""
}, {"x": 1679414400000, "y": 2.268, "equityReturn": 0.58, "unitMoney": ""}, {
    "x": 1679500800000,
    "y": 2.267,
    "equityReturn": -0.04,
    "unitMoney": ""
}, {"x": 1679587200000, "y": 2.26, "equityReturn": -0.31, "unitMoney": ""}, {
    "x": 1679846400000,
    "y": 2.269,
    "equityReturn": 0.4,
    "unitMoney": ""
}, {"x": 1679932800000, "y": 2.261, "equityReturn": -0.35, "unitMoney": ""}, {
    "x": 1680019200000,
    "y": 2.25,
    "equityReturn": -0.49,
    "unitMoney": ""
}, {"x": 1680105600000, "y": 2.269, "equityReturn": 0.84, "unitMoney": ""}, {
    "x": 1680192000000,
    "y": 2.276,
    "equityReturn": 0.31,
    "unitMoney": ""
}, {"x": 1680451200000, "y": 2.317, "equityReturn": 1.8, "unitMoney": ""}, {
    "x": 1680537600000,
    "y": 2.331,
    "equityReturn": 0.6,
    "unitMoney": ""
}, {"x": 1680710400000, "y": 2.338, "equityReturn": 0.3, "unitMoney": ""}, {
    "x": 1680796800000,
    "y": 2.351,
    "equityReturn": 0.56,
    "unitMoney": ""
}, {"x": 1681056000000, "y": 2.33, "equityReturn": -0.89, "unitMoney": ""}, {
    "x": 1681142400000,
    "y": 2.347,
    "equityReturn": 0.73,
    "unitMoney": ""
}, {"x": 1681228800000, "y": 2.386, "equityReturn": 1.66, "unitMoney": ""}, {
    "x": 1681315200000,
    "y": 2.364,
    "equityReturn": -0.92,
    "unitMoney": ""
}, {"x": 1681401600000, "y": 2.362, "equityReturn": -0.08, "unitMoney": ""}, {
    "x": 1681660800000,
    "y": 2.38,
    "equityReturn": 0.76,
    "unitMoney": ""
}, {"x": 1681747200000, "y": 2.396, "equityReturn": 0.67, "unitMoney": ""}, {
    "x": 1681833600000,
    "y": 2.389,
    "equityReturn": -0.29,
    "unitMoney": ""
}, {"x": 1681920000000, "y": 2.392, "equityReturn": 0.13, "unitMoney": ""}, {
    "x": 1682006400000,
    "y": 2.345,
    "equityReturn": -1.96,
    "unitMoney": ""
}, {"x": 1682265600000, "y": 2.331, "equityReturn": -0.6, "unitMoney": ""}, {
    "x": 1682352000000,
    "y": 2.336,
    "equityReturn": 0.21,
    "unitMoney": ""
}, {"x": 1682438400000, "y": 2.322, "equityReturn": -0.6, "unitMoney": ""}, {
    "x": 1682524800000,
    "y": 2.336,
    "equityReturn": 0.6,
    "unitMoney": ""
}, {"x": 1682611200000, "y": 2.347, "equityReturn": 0.47, "unitMoney": ""}, {
    "x": 1683129600000,
    "y": 2.373,
    "equityReturn": 1.11,
    "unitMoney": ""
}, {"x": 1683216000000, "y": 2.351, "equityReturn": -0.93, "unitMoney": ""}, {
    "x": 1683475200000,
    "y": 2.383,
    "equityReturn": 1.36,
    "unitMoney": ""
}, {"x": 1683561600000, "y": 2.367, "equityReturn": -0.67, "unitMoney": ""}, {
    "x": 1683648000000,
    "y": 2.35,
    "equityReturn": -0.72,
    "unitMoney": ""
}, {"x": 1683734400000, "y": 2.34, "equityReturn": -0.43, "unitMoney": ""}, {
    "x": 1683820800000,
    "y": 2.321,
    "equityReturn": -0.81,
    "unitMoney": ""
}, {"x": 1684080000000, "y": 2.339, "equityReturn": 0.78, "unitMoney": ""}, {
    "x": 1684166400000,
    "y": 2.328,
    "equityReturn": -0.47,
    "unitMoney": ""
}, {"x": 1684252800000, "y": 2.314, "equityReturn": -0.6, "unitMoney": ""}, {
    "x": 1684339200000,
    "y": 2.327,
    "equityReturn": 0.56,
    "unitMoney": ""
}, {"x": 1684425600000, "y": 2.328, "equityReturn": 0.04, "unitMoney": ""}, {
    "x": 1684684800000,
    "y": 2.34,
    "equityReturn": 0.52,
    "unitMoney": ""
}, {"x": 1684771200000, "y": 2.311, "equityReturn": -1.24, "unitMoney": ""}, {
    "x": 1684857600000,
    "y": 2.287,
    "equityReturn": -1.04,
    "unitMoney": ""
}, {"x": 1684944000000, "y": 2.28, "equityReturn": -0.31, "unitMoney": ""}, {
    "x": 1685030400000,
    "y": 2.3,
    "equityReturn": 0.88,
    "unitMoney": ""
}, {"x": 1685289600000, "y": 2.309, "equityReturn": 0.39, "unitMoney": ""}, {
    "x": 1685376000000,
    "y": 2.307,
    "equityReturn": -0.09,
    "unitMoney": ""
}, {"x": 1685462400000, "y": 2.292, "equityReturn": -0.65, "unitMoney": ""}, {
    "x": 1685548800000,
    "y": 2.299,
    "equityReturn": 0.31,
    "unitMoney": ""
}, {"x": 1685635200000, "y": 2.3, "equityReturn": 0.04, "unitMoney": ""}, {
    "x": 1685894400000,
    "y": 2.299,
    "equityReturn": -0.04,
    "unitMoney": ""
}, {"x": 1685980800000, "y": 2.291, "equityReturn": -0.35, "unitMoney": ""}, {
    "x": 1686067200000,
    "y": 2.293,
    "equityReturn": 0.09,
    "unitMoney": ""
}, {"x": 1686153600000, "y": 2.298, "equityReturn": 0.22, "unitMoney": ""}, {
    "x": 1686240000000,
    "y": 2.306,
    "equityReturn": 0.35,
    "unitMoney": ""
}, {"x": 1686499200000, "y": 2.308, "equityReturn": 0.09, "unitMoney": ""}, {
    "x": 1686585600000,
    "y": 2.298,
    "equityReturn": -0.43,
    "unitMoney": ""
}, {"x": 1686672000000, "y": 2.301, "equityReturn": 0.13, "unitMoney": ""}, {
    "x": 1686758400000,
    "y": 2.317,
    "equityReturn": 0.7,
    "unitMoney": ""
}, {"x": 1686844800000, "y": 2.325, "equityReturn": 0.35, "unitMoney": ""}, {
    "x": 1687104000000,
    "y": 2.323,
    "equityReturn": -0.09,
    "unitMoney": ""
}, {"x": 1687190400000, "y": 2.318, "equityReturn": -0.22, "unitMoney": ""}, {
    "x": 1687276800000,
    "y": 2.292,
    "equityReturn": -1.12,
    "unitMoney": ""
}, {"x": 1687708800000, "y": 2.265, "equityReturn": -1.18, "unitMoney": ""}, {
    "x": 1687795200000,
    "y": 2.291,
    "equityReturn": 1.15,
    "unitMoney": ""
}, {"x": 1687881600000, "y": 2.295, "equityReturn": 0.17, "unitMoney": ""}, {
    "x": 1687968000000,
    "y": 2.302,
    "equityReturn": 0.31,
    "unitMoney": ""
}, {"x": 1688054400000, "y": 2.311, "equityReturn": 0.39, "unitMoney": ""}, {
    "x": 1688313600000,
    "y": 2.312,
    "equityReturn": 0.04,
    "unitMoney": ""
}, {"x": 1688400000000, "y": 2.306, "equityReturn": -0.26, "unitMoney": ""}, {
    "x": 1688486400000,
    "y": 2.303,
    "equityReturn": -0.13,
    "unitMoney": ""
}, {"x": 1688572800000, "y": 2.283, "equityReturn": -0.87, "unitMoney": ""}, {
    "x": 1688659200000,
    "y": 2.279,
    "equityReturn": -0.18,
    "unitMoney": ""
}, {"x": 1688918400000, "y": 2.283, "equityReturn": 0.18, "unitMoney": ""}, {
    "x": 1689004800000,
    "y": 2.3,
    "equityReturn": 0.74,
    "unitMoney": ""
}, {"x": 1689091200000, "y": 2.294, "equityReturn": -0.26, "unitMoney": ""}, {
    "x": 1689177600000,
    "y": 2.308,
    "equityReturn": 0.61,
    "unitMoney": ""
}, {"x": 1689264000000, "y": 2.314, "equityReturn": 0.26, "unitMoney": ""}, {
    "x": 1689523200000,
    "y": 2.304,
    "equityReturn": -0.43,
    "unitMoney": ""
}, {"x": 1689609600000, "y": 2.301, "equityReturn": -0.13, "unitMoney": ""}, {
    "x": 1689696000000,
    "y": 2.311,
    "equityReturn": 0.43,
    "unitMoney": ""
}, {"x": 1689782400000, "y": 2.299, "equityReturn": -0.52, "unitMoney": ""}, {
    "x": 1689868800000,
    "y": 2.298,
    "equityReturn": -0.04,
    "unitMoney": ""
}, {"x": 1690128000000, "y": 2.3, "equityReturn": 0.09, "unitMoney": ""}, {
    "x": 1690214400000,
    "y": 2.322,
    "equityReturn": 0.96,
    "unitMoney": ""
}, {"x": 1690300800000, "y": 2.322, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1690387200000,
    "y": 2.32,
    "equityReturn": -0.09,
    "unitMoney": ""
}, {"x": 1690473600000, "y": 2.339, "equityReturn": 0.82, "unitMoney": ""}, {
    "x": 1690732800000,
    "y": 2.333,
    "equityReturn": -0.26,
    "unitMoney": ""
}, {"x": 1690819200000, "y": 2.324, "equityReturn": -0.39, "unitMoney": ""}, {
    "x": 1690905600000,
    "y": 2.306,
    "equityReturn": -0.77,
    "unitMoney": ""
}, {"x": 1690992000000, "y": 2.316, "equityReturn": 0.43, "unitMoney": ""}, {
    "x": 1691078400000,
    "y": 2.318,
    "equityReturn": 0.09,
    "unitMoney": ""
}, {"x": 1691337600000, "y": 2.306, "equityReturn": -0.52, "unitMoney": ""}, {
    "x": 1691424000000,
    "y": 2.315,
    "equityReturn": 0.39,
    "unitMoney": ""
}, {"x": 1691510400000, "y": 2.305, "equityReturn": -0.43, "unitMoney": ""}, {
    "x": 1691596800000,
    "y": 2.31,
    "equityReturn": 0.22,
    "unitMoney": ""
}, {"x": 1691683200000, "y": 2.272, "equityReturn": -1.65, "unitMoney": ""}, {
    "x": 1691942400000,
    "y": 2.277,
    "equityReturn": 0.22,
    "unitMoney": ""
}, {"x": 1692028800000, "y": 2.28, "equityReturn": 0.13, "unitMoney": ""}, {
    "x": 1692115200000,
    "y": 2.261,
    "equityReturn": -0.83,
    "unitMoney": ""
}, {"x": 1692201600000, "y": 2.268, "equityReturn": 0.31, "unitMoney": ""}, {
    "x": 1692288000000,
    "y": 2.243,
    "equityReturn": -1.1,
    "unitMoney": ""
}, {"x": 1692547200000, "y": 2.227, "equityReturn": -0.71, "unitMoney": ""}, {
    "x": 1692633600000,
    "y": 2.242,
    "equityReturn": 0.67,
    "unitMoney": ""
}, {"x": 1692720000000, "y": 2.22, "equityReturn": -0.98, "unitMoney": ""}, {
    "x": 1692806400000,
    "y": 2.238,
    "equityReturn": 0.81,
    "unitMoney": ""
}, {"x": 1692892800000, "y": 2.236, "equityReturn": -0.09, "unitMoney": ""}, {
    "x": 1693152000000,
    "y": 2.248,
    "equityReturn": 0.54,
    "unitMoney": ""
}, {"x": 1693238400000, "y": 2.272, "equityReturn": 1.07, "unitMoney": ""}, {
    "x": 1693324800000,
    "y": 2.269,
    "equityReturn": -0.13,
    "unitMoney": ""
}, {"x": 1693411200000, "y": 2.266, "equityReturn": -0.13, "unitMoney": ""}, {
    "x": 1693497600000,
    "y": 2.274,
    "equityReturn": 0.35,
    "unitMoney": ""
}, {"x": 1693756800000, "y": 2.289, "equityReturn": 0.66, "unitMoney": ""}, {
    "x": 1693843200000,
    "y": 2.275,
    "equityReturn": -0.61,
    "unitMoney": ""
}, {"x": 1693929600000, "y": 2.266, "equityReturn": -0.4, "unitMoney": ""}, {
    "x": 1694016000000,
    "y": 2.243,
    "equityReturn": -1.02,
    "unitMoney": ""
}, {"x": 1694102400000, "y": 2.24, "equityReturn": -0.13, "unitMoney": ""}, {
    "x": 1694361600000,
    "y": 2.254,
    "equityReturn": 0.62,
    "unitMoney": ""
}, {"x": 1694448000000, "y": 2.256, "equityReturn": 0.09, "unitMoney": ""}, {
    "x": 1694534400000,
    "y": 2.251,
    "equityReturn": -0.22,
    "unitMoney": ""
}, {"x": 1694620800000, "y": 2.262, "equityReturn": 0.49, "unitMoney": ""}, {
    "x": 1694707200000,
    "y": 2.26,
    "equityReturn": -0.09,
    "unitMoney": ""
}, {"x": 1694966400000, "y": 2.262, "equityReturn": 0.09, "unitMoney": ""}, {
    "x": 1695052800000,
    "y": 2.267,
    "equityReturn": 0.22,
    "unitMoney": ""
}, {"x": 1695139200000, "y": 2.263, "equityReturn": -0.18, "unitMoney": ""}, {
    "x": 1695225600000,
    "y": 2.247,
    "equityReturn": -0.71,
    "unitMoney": ""
}, {"x": 1695312000000, "y": 2.255, "equityReturn": 0.36, "unitMoney": ""}, {
    "x": 1695571200000,
    "y": 2.255,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1695657600000, "y": 2.242, "equityReturn": -0.58, "unitMoney": ""}, {
    "x": 1695744000000,
    "y": 2.246,
    "equityReturn": 0.18,
    "unitMoney": ""
}, {"x": 1695830400000, "y": 2.241, "equityReturn": -0.22, "unitMoney": ""}, {
    "x": 1696780800000,
    "y": 2.237,
    "equityReturn": -0.18,
    "unitMoney": ""
}, {"x": 1696867200000, "y": 2.22, "equityReturn": -0.76, "unitMoney": ""}, {
    "x": 1696953600000,
    "y": 2.225,
    "equityReturn": 0.23,
    "unitMoney": ""
}, {"x": 1697040000000, "y": 2.238, "equityReturn": 0.58, "unitMoney": ""}, {
    "x": 1697126400000,
    "y": 2.222,
    "equityReturn": -0.71,
    "unitMoney": ""
}, {"x": 1697385600000, "y": 2.213, "equityReturn": -0.41, "unitMoney": ""}, {
    "x": 1697472000000,
    "y": 2.204,
    "equityReturn": -0.41,
    "unitMoney": ""
}, {"x": 1697558400000, "y": 2.181, "equityReturn": -1.04, "unitMoney": ""}, {
    "x": 1697644800000,
    "y": 2.154,
    "equityReturn": -1.24,
    "unitMoney": ""
}, {"x": 1697731200000, "y": 2.14, "equityReturn": -0.65, "unitMoney": ""}, {
    "x": 1697990400000,
    "y": 2.116,
    "equityReturn": -1.12,
    "unitMoney": ""
}, {"x": 1698076800000, "y": 2.123, "equityReturn": 0.33, "unitMoney": ""}, {
    "x": 1698163200000,
    "y": 2.127,
    "equityReturn": 0.19,
    "unitMoney": ""
}, {"x": 1698249600000, "y": 2.131, "equityReturn": 0.19, "unitMoney": ""}, {
    "x": 1698336000000,
    "y": 2.151,
    "equityReturn": 0.94,
    "unitMoney": ""
}, {"x": 1698595200000, "y": 2.161, "equityReturn": 0.46, "unitMoney": ""}, {
    "x": 1698681600000,
    "y": 2.164,
    "equityReturn": 0.14,
    "unitMoney": ""
}, {"x": 1698768000000, "y": 2.164, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1698854400000,
    "y": 2.155,
    "equityReturn": -0.42,
    "unitMoney": ""
}, {"x": 1698940800000, "y": 2.165, "equityReturn": 0.46, "unitMoney": ""}, {
    "x": 1699200000000,
    "y": 2.169,
    "equityReturn": 0.18,
    "unitMoney": ""
}, {"x": 1699286400000, "y": 2.17, "equityReturn": 0.05, "unitMoney": ""}, {
    "x": 1699372800000,
    "y": 2.17,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1699459200000, "y": 2.162, "equityReturn": -0.37, "unitMoney": ""}, {
    "x": 1699545600000,
    "y": 2.164,
    "equityReturn": 0.09,
    "unitMoney": ""
}, {"x": 1699804800000, "y": 2.164, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1699891200000,
    "y": 2.17,
    "equityReturn": 0.28,
    "unitMoney": ""
}, {"x": 1699977600000, "y": 2.183, "equityReturn": 0.6, "unitMoney": ""}, {
    "x": 1700064000000,
    "y": 2.175,
    "equityReturn": -0.37,
    "unitMoney": ""
}, {"x": 1700150400000, "y": 2.182, "equityReturn": 0.32, "unitMoney": ""}, {
    "x": 1700409600000,
    "y": 2.18,
    "equityReturn": -0.09,
    "unitMoney": ""
}, {"x": 1700496000000, "y": 2.178, "equityReturn": -0.09, "unitMoney": ""}, {
    "x": 1700582400000,
    "y": 2.162,
    "equityReturn": -0.73,
    "unitMoney": ""
}, {"x": 1700668800000, "y": 2.171, "equityReturn": 0.42, "unitMoney": ""}, {
    "x": 1700755200000,
    "y": 2.163,
    "equityReturn": -0.37,
    "unitMoney": ""
}, {"x": 1701014400000, "y": 2.156, "equityReturn": -0.32, "unitMoney": ""}, {
    "x": 1701100800000,
    "y": 2.166,
    "equityReturn": 0.46,
    "unitMoney": ""
}, {"x": 1701187200000, "y": 2.158, "equityReturn": -0.37, "unitMoney": ""}, {
    "x": 1701273600000,
    "y": 2.162,
    "equityReturn": 0.19,
    "unitMoney": ""
}, {"x": 1701360000000, "y": 2.162, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1701619200000,
    "y": 2.159,
    "equityReturn": -0.14,
    "unitMoney": ""
}, {"x": 1701705600000, "y": 2.126, "equityReturn": -1.53, "unitMoney": ""}, {
    "x": 1701792000000,
    "y": 2.12,
    "equityReturn": -0.28,
    "unitMoney": ""
}, {"x": 1701878400000, "y": 2.131, "equityReturn": 0.52, "unitMoney": ""}, {
    "x": 1701964800000,
    "y": 2.132,
    "equityReturn": 0.05,
    "unitMoney": ""
}, {"x": 1702224000000, "y": 2.144, "equityReturn": 0.56, "unitMoney": ""}, {
    "x": 1702310400000,
    "y": 2.15,
    "equityReturn": 0.28,
    "unitMoney": ""
}, {"x": 1702396800000, "y": 2.129, "equityReturn": -0.98, "unitMoney": ""}, {
    "x": 1702483200000,
    "y": 2.128,
    "equityReturn": -0.05,
    "unitMoney": ""
}, {"x": 1702569600000, "y": 2.12, "equityReturn": -0.38, "unitMoney": ""}, {
    "x": 1702828800000,
    "y": 2.113,
    "equityReturn": -0.33,
    "unitMoney": ""
}, {"x": 1702915200000, "y": 2.115, "equityReturn": 0.09, "unitMoney": ""}, {
    "x": 1703001600000,
    "y": 2.101,
    "equityReturn": -0.66,
    "unitMoney": ""
}, {"x": 1703088000000, "y": 2.105, "equityReturn": 0.19, "unitMoney": ""}, {
    "x": 1703174400000,
    "y": 2.089,
    "equityReturn": -0.76,
    "unitMoney": ""
}, {"x": 1703433600000, "y": 2.089, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1703520000000,
    "y": 2.079,
    "equityReturn": -0.48,
    "unitMoney": ""
}, {"x": 1703606400000, "y": 2.086, "equityReturn": 0.34, "unitMoney": ""}, {
    "x": 1703692800000,
    "y": 2.104,
    "equityReturn": 0.86,
    "unitMoney": ""
}, {"x": 1703779200000, "y": 2.125, "equityReturn": 1.0, "unitMoney": ""}, {
    "x": 1703952000000,
    "y": 2.125,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1704124800000, "y": 2.118, "equityReturn": -0.33, "unitMoney": ""}, {
    "x": 1704211200000,
    "y": 2.119,
    "equityReturn": 0.05,
    "unitMoney": ""
}, {"x": 1704297600000, "y": 2.118, "equityReturn": -0.05, "unitMoney": ""}, {
    "x": 1704384000000,
    "y": 2.099,
    "equityReturn": -0.9,
    "unitMoney": ""
}, {"x": 1704643200000, "y": 2.068, "equityReturn": -1.48, "unitMoney": ""}, {
    "x": 1704729600000,
    "y": 2.062,
    "equityReturn": -0.29,
    "unitMoney": ""
}, {"x": 1704816000000, "y": 2.049, "equityReturn": -0.63, "unitMoney": ""}, {
    "x": 1704902400000,
    "y": 2.049,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1704988800000, "y": 2.043, "equityReturn": -0.29, "unitMoney": ""}, {
    "x": 1705248000000,
    "y": 2.039,
    "equityReturn": -0.2,
    "unitMoney": ""
}, {"x": 1705334400000, "y": 2.032, "equityReturn": -0.34, "unitMoney": ""}, {
    "x": 1705420800000,
    "y": 1.99,
    "equityReturn": -2.07,
    "unitMoney": ""
}, {"x": 1705507200000, "y": 1.996, "equityReturn": 0.3, "unitMoney": ""}, {
    "x": 1705593600000,
    "y": 1.995,
    "equityReturn": -0.05,
    "unitMoney": ""
}, {"x": 1705852800000, "y": 1.937, "equityReturn": -2.91, "unitMoney": ""}, {
    "x": 1705939200000,
    "y": 1.949,
    "equityReturn": 0.62,
    "unitMoney": ""
}, {"x": 1706025600000, "y": 1.973, "equityReturn": 1.23, "unitMoney": ""}, {
    "x": 1706112000000,
    "y": 2.006,
    "equityReturn": 1.67,
    "unitMoney": ""
}, {"x": 1706198400000, "y": 1.997, "equityReturn": -0.45, "unitMoney": ""}, {
    "x": 1706457600000,
    "y": 1.984,
    "equityReturn": -0.65,
    "unitMoney": ""
}, {"x": 1706544000000, "y": 1.956, "equityReturn": -1.41, "unitMoney": ""}, {
    "x": 1706630400000,
    "y": 1.929,
    "equityReturn": -1.38,
    "unitMoney": ""
}, {"x": 1706716800000, "y": 1.93, "equityReturn": 0.05, "unitMoney": ""}, {
    "x": 1706803200000,
    "y": 1.913,
    "equityReturn": -0.88,
    "unitMoney": ""
}, {"x": 1707062400000, "y": 1.893, "equityReturn": -1.05, "unitMoney": ""}, {
    "x": 1707148800000,
    "y": 1.973,
    "equityReturn": 4.23,
    "unitMoney": ""
}, {"x": 1707235200000, "y": 2.002, "equityReturn": 1.47, "unitMoney": ""}, {
    "x": 1707321600000,
    "y": 2.017,
    "equityReturn": 0.75,
    "unitMoney": ""
}, {"x": 1708272000000, "y": 2.031, "equityReturn": 0.69, "unitMoney": ""}, {
    "x": 1708358400000,
    "y": 2.039,
    "equityReturn": 0.39,
    "unitMoney": ""
}, {"x": 1708444800000, "y": 2.041, "equityReturn": 0.1, "unitMoney": ""}, {
    "x": 1708531200000,
    "y": 2.053,
    "equityReturn": 0.59,
    "unitMoney": ""
}, {"x": 1708617600000, "y": 2.049, "equityReturn": -0.19, "unitMoney": ""}, {
    "x": 1708876800000,
    "y": 2.041,
    "equityReturn": -0.39,
    "unitMoney": ""
}, {"x": 1708963200000, "y": 2.063, "equityReturn": 1.08, "unitMoney": ""}, {
    "x": 1709049600000,
    "y": 2.033,
    "equityReturn": -1.45,
    "unitMoney": ""
}, {"x": 1709136000000, "y": 2.071, "equityReturn": 1.87, "unitMoney": ""}, {
    "x": 1709222400000,
    "y": 2.083,
    "equityReturn": 0.58,
    "unitMoney": ""
}, {"x": 1709481600000, "y": 2.086, "equityReturn": 0.14, "unitMoney": ""}, {
    "x": 1709568000000,
    "y": 2.084,
    "equityReturn": -0.1,
    "unitMoney": ""
}, {"x": 1709654400000, "y": 2.078, "equityReturn": -0.29, "unitMoney": ""}, {
    "x": 1709740800000,
    "y": 2.066,
    "equityReturn": -0.58,
    "unitMoney": ""
}, {"x": 1709827200000, "y": 2.08, "equityReturn": 0.68, "unitMoney": ""}, {
    "x": 1710086400000,
    "y": 2.089,
    "equityReturn": 0.43,
    "unitMoney": ""
}, {"x": 1710172800000, "y": 2.081, "equityReturn": -0.38, "unitMoney": ""}, {
    "x": 1710259200000,
    "y": 2.08,
    "equityReturn": -0.05,
    "unitMoney": ""
}, {"x": 1710345600000, "y": 2.068, "equityReturn": -0.58, "unitMoney": ""}, {
    "x": 1710432000000,
    "y": 2.07,
    "equityReturn": 0.1,
    "unitMoney": ""
}, {"x": 1710691200000, "y": 2.085, "equityReturn": 0.72, "unitMoney": ""}, {
    "x": 1710777600000,
    "y": 2.075,
    "equityReturn": -0.48,
    "unitMoney": ""
}, {"x": 1710864000000, "y": 2.083, "equityReturn": 0.39, "unitMoney": ""}, {
    "x": 1710950400000,
    "y": 2.072,
    "equityReturn": -0.53,
    "unitMoney": ""
}, {"x": 1711036800000, "y": 2.078, "equityReturn": 0.29, "unitMoney": ""}, {
    "x": 1711296000000,
    "y": 2.057,
    "equityReturn": -1.01,
    "unitMoney": ""
}, {"x": 1711382400000, "y": 2.057, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1711468800000,
    "y": 2.045,
    "equityReturn": -0.58,
    "unitMoney": ""
}, {"x": 1711555200000, "y": 2.054, "equityReturn": 0.44, "unitMoney": ""}, {
    "x": 1711641600000,
    "y": 2.078,
    "equityReturn": 1.17,
    "unitMoney": ""
}, {"x": 1711900800000, "y": 2.099, "equityReturn": 1.01, "unitMoney": ""}, {
    "x": 1711987200000,
    "y": 2.087,
    "equityReturn": -0.57,
    "unitMoney": ""
}, {"x": 1712073600000, "y": 2.1, "equityReturn": 0.62, "unitMoney": ""}, {
    "x": 1712505600000,
    "y": 2.09,
    "equityReturn": -0.48,
    "unitMoney": ""
}, {"x": 1712592000000, "y": 2.085, "equityReturn": -0.24, "unitMoney": ""}, {
    "x": 1712678400000,
    "y": 2.078,
    "equityReturn": -0.34,
    "unitMoney": ""
}, {"x": 1712764800000, "y": 2.083, "equityReturn": 0.24, "unitMoney": ""}, {
    "x": 1712851200000,
    "y": 2.09,
    "equityReturn": 0.34,
    "unitMoney": ""
}, {"x": 1713110400000, "y": 2.115, "equityReturn": 1.2, "unitMoney": ""}, {
    "x": 1713196800000,
    "y": 2.09,
    "equityReturn": -1.18,
    "unitMoney": ""
}, {"x": 1713283200000, "y": 2.13, "equityReturn": 1.91, "unitMoney": ""}, {
    "x": 1713369600000,
    "y": 2.127,
    "equityReturn": -0.14,
    "unitMoney": ""
}, {"x": 1713456000000, "y": 2.129, "equityReturn": 0.09, "unitMoney": ""}, {
    "x": 1713715200000,
    "y": 2.125,
    "equityReturn": -0.19,
    "unitMoney": ""
}, {"x": 1713801600000, "y": 2.102, "equityReturn": -1.08, "unitMoney": ""}, {
    "x": 1713888000000,
    "y": 2.114,
    "equityReturn": 0.57,
    "unitMoney": ""
}, {"x": 1713974400000, "y": 2.107, "equityReturn": -0.33, "unitMoney": ""}, {
    "x": 1714060800000,
    "y": 2.122,
    "equityReturn": 0.71,
    "unitMoney": ""
}, {"x": 1714320000000, "y": 2.143, "equityReturn": 0.99, "unitMoney": ""}, {
    "x": 1714406400000,
    "y": 2.153,
    "equityReturn": 0.47,
    "unitMoney": ""
}, {"x": 1714924800000, "y": 2.188, "equityReturn": 1.63, "unitMoney": ""}, {
    "x": 1715011200000,
    "y": 2.184,
    "equityReturn": -0.18,
    "unitMoney": ""
}, {"x": 1715097600000, "y": 2.172, "equityReturn": -0.55, "unitMoney": ""}, {
    "x": 1715184000000,
    "y": 2.188,
    "equityReturn": 0.74,
    "unitMoney": ""
}, {"x": 1715270400000, "y": 2.189, "equityReturn": 0.05, "unitMoney": ""}, {
    "x": 1715529600000,
    "y": 2.201,
    "equityReturn": 0.55,
    "unitMoney": ""
}, {"x": 1715616000000, "y": 2.206, "equityReturn": 0.23, "unitMoney": ""}, {
    "x": 1715702400000,
    "y": 2.191,
    "equityReturn": -0.68,
    "unitMoney": ""
}];/*累计净值走势*/
var Data_ACWorthTrend = [[1430841600000, 1.0], [1431014400000, 1.004], [1431619200000, 1.021], [1432224000000, 1.078], [1432828800000, 1.112], [1433433600000, 1.203], [1433952000000, 1.188], [1434038400000, 1.204], [1434297600000, 1.204], [1434384000000, 1.162], [1434470400000, 1.175], [1434556800000, 1.144], [1434643200000, 1.087], [1434988800000, 1.091], [1435075200000, 1.118], [1435161600000, 1.073], [1435248000000, 1.005], [1435507200000, 0.932], [1435593600000, 0.96], [1435680000000, 0.911], [1435766400000, 0.846], [1435852800000, 0.795], [1436112000000, 0.757], [1436198400000, 0.715], [1436284800000, 0.711], [1436371200000, 0.706], [1436457600000, 0.742], [1436716800000, 0.789], [1436803200000, 0.809], [1436889600000, 0.762], [1436976000000, 0.789], [1437062400000, 0.847], [1437321600000, 0.865], [1437408000000, 0.886], [1437494400000, 0.893], [1437580800000, 0.927], [1437667200000, 0.895], [1437926400000, 0.815], [1438012800000, 0.786], [1438099200000, 0.827], [1438185600000, 0.79], [1438272000000, 0.782], [1438531200000, 0.75], [1438617600000, 0.798], [1438704000000, 0.788], [1438790400000, 0.783], [1438876800000, 0.823], [1439136000000, 0.867], [1439222400000, 0.87], [1439308800000, 0.848], [1439395200000, 0.863], [1439481600000, 0.863], [1439740800000, 0.878], [1439827200000, 0.804], [1439913600000, 0.825], [1440000000000, 0.794], [1440086400000, 0.756], [1440345600000, 0.681], [1440432000000, 0.629], [1440518400000, 0.602], [1440604800000, 0.626], [1440691200000, 0.668], [1440950400000, 0.635], [1441036800000, 0.588], [1441123200000, 0.577], [1441555200000, 0.589], [1441641600000, 0.621], [1441728000000, 0.644], [1441814400000, 0.639], [1441900800000, 0.641], [1442160000000, 0.596], [1442246400000, 0.561], [1442332800000, 0.604], [1442419200000, 0.596], [1442505600000, 0.604], [1442764800000, 0.629], [1442851200000, 0.637], [1442937600000, 0.631], [1443024000000, 0.641], [1443110400000, 0.618], [1443369600000, 0.633], [1443456000000, 0.627], [1443542400000, 0.631], [1444233600000, 0.658], [1444320000000, 0.675], [1444579200000, 0.7], [1444665600000, 0.711], [1444752000000, 0.702], [1444838400000, 0.724], [1444924800000, 0.732], [1445184000000, 0.737], [1445270400000, 0.753], [1445356800000, 0.701], [1445443200000, 0.726], [1445529600000, 0.746], [1445788800000, 0.752], [1445875200000, 0.765], [1445961600000, 0.746], [1446048000000, 0.751], [1446134400000, 0.741], [1446393600000, 0.725], [1446480000000, 0.725], [1446566400000, 0.763], [1446652800000, 0.768], [1446739200000, 0.8], [1446998400000, 0.806], [1447084800000, 0.829], [1447171200000, 0.845], [1447257600000, 0.842], [1447344000000, 0.809], [1447603200000, 0.84], [1447689600000, 0.825], [1447776000000, 0.811], [1447862400000, 0.841], [1447948800000, 0.848], [1448208000000, 0.838], [1448294400000, 0.85], [1448380800000, 0.876], [1448467200000, 0.861], [1448553600000, 0.81], [1448812800000, 0.816], [1448899200000, 0.834], [1448985600000, 0.806], [1449072000000, 0.831], [1449158400000, 0.832], [1449417600000, 0.849], [1449504000000, 0.851], [1449590400000, 0.864], [1449676800000, 0.862], [1449763200000, 0.855], [1450022400000, 0.863], [1450108800000, 0.871], [1450195200000, 0.884], [1450281600000, 0.909], [1450368000000, 0.903], [1450627200000, 0.906], [1450713600000, 0.916], [1450800000000, 0.902], [1450886400000, 0.909], [1450972800000, 0.921], [1451232000000, 0.901], [1451318400000, 0.918], [1451404800000, 0.931], [1451491200000, 0.912], [1451836800000, 0.838], [1451923200000, 0.816], [1452009600000, 0.831], [1452096000000, 0.764], [1452182400000, 0.756], [1452441600000, 0.699], [1452528000000, 0.692], [1452614400000, 0.671], [1452700800000, 0.701], [1452787200000, 0.689], [1453046400000, 0.717], [1453132800000, 0.741], [1453219200000, 0.734], [1453305600000, 0.706], [1453392000000, 0.713], [1453651200000, 0.725], [1453737600000, 0.669], [1453824000000, 0.659], [1453910400000, 0.626], [1453996800000, 0.654], [1454256000000, 0.653], [1454342400000, 0.683], [1454428800000, 0.686], [1454515200000, 0.699], [1454601600000, 0.693], [1455465600000, 0.697], [1455552000000, 0.723], [1455638400000, 0.727], [1455724800000, 0.735], [1455811200000, 0.735], [1456070400000, 0.744], [1456156800000, 0.746], [1456243200000, 0.735], [1456329600000, 0.679], [1456416000000, 0.673], [1456675200000, 0.634], [1456761600000, 0.645], [1456848000000, 0.672], [1456934400000, 0.67], [1457020800000, 0.641], [1457280000000, 0.654], [1457366400000, 0.661], [1457452800000, 0.654], [1457539200000, 0.645], [1457625600000, 0.643], [1457884800000, 0.667], [1457971200000, 0.664], [1458057600000, 0.659], [1458144000000, 0.686], [1458230400000, 0.713], [1458489600000, 0.734], [1458576000000, 0.739], [1458662400000, 0.75], [1458748800000, 0.743], [1458835200000, 0.73], [1459094400000, 0.732], [1459180800000, 0.72], [1459267200000, 0.74], [1459353600000, 0.743], [1459440000000, 0.738], [1459785600000, 0.756], [1459872000000, 0.759], [1459958400000, 0.748], [1460044800000, 0.745], [1460304000000, 0.761], [1460390400000, 0.756], [1460476800000, 0.766], [1460563200000, 0.772], [1460649600000, 0.772], [1460908800000, 0.762], [1460995200000, 0.762], [1461081600000, 0.732], [1461168000000, 0.727], [1461254400000, 0.732], [1461513600000, 0.729], [1461600000000, 0.737], [1461686400000, 0.737], [1461772800000, 0.733], [1461859200000, 0.735], [1462204800000, 0.755], [1462291200000, 0.76], [1462377600000, 0.761], [1462464000000, 0.744], [1462723200000, 0.726], [1462809600000, 0.729], [1462896000000, 0.728], [1462982400000, 0.731], [1463068800000, 0.731], [1463328000000, 0.743], [1463414400000, 0.742], [1463500800000, 0.727], [1463587200000, 0.733], [1463673600000, 0.742], [1463932800000, 0.755], [1464019200000, 0.746], [1464105600000, 0.744], [1464192000000, 0.755], [1464278400000, 0.752], [1464537600000, 0.75], [1464624000000, 0.774], [1464710400000, 0.78], [1464796800000, 0.784], [1464883200000, 0.784], [1465142400000, 0.787], [1465228800000, 0.786], [1465315200000, 0.782], [1465747200000, 0.757], [1465833600000, 0.766], [1465920000000, 0.783], [1466006400000, 0.785], [1466092800000, 0.787], [1466352000000, 0.793], [1466438400000, 0.788], [1466524800000, 0.795], [1466611200000, 0.79], [1466697600000, 0.785], [1466956800000, 0.804], [1467043200000, 0.803], [1467129600000, 0.804], [1467216000000, 0.803], [1467302400000, 0.799], [1467561600000, 0.806], [1467648000000, 0.807], [1467734400000, 0.81], [1467820800000, 0.811], [1467907200000, 0.814], [1468166400000, 0.809], [1468252800000, 0.814], [1468339200000, 0.821], [1468425600000, 0.817], [1468512000000, 0.814], [1468771200000, 0.809], [1468857600000, 0.813], [1468944000000, 0.816], [1469030400000, 0.814], [1469116800000, 0.806], [1469376000000, 0.807], [1469462400000, 0.816], [1469548800000, 0.786], [1469635200000, 0.784], [1469721600000, 0.781], [1469980800000, 0.771], [1470067200000, 0.774], [1470153600000, 0.774], [1470240000000, 0.777], [1470326400000, 0.775], [1470585600000, 0.78], [1470672000000, 0.787], [1470758400000, 0.788], [1470844800000, 0.783], [1470931200000, 0.792], [1471190400000, 0.805], [1471276800000, 0.799], [1471363200000, 0.798], [1471449600000, 0.797], [1471536000000, 0.797], [1471795200000, 0.794], [1471881600000, 0.795], [1471968000000, 0.799], [1472054400000, 0.796], [1472140800000, 0.795], [1472400000000, 0.792], [1472486400000, 0.792], [1472572800000, 0.793], [1472659200000, 0.79], [1472745600000, 0.789], [1473004800000, 0.788], [1473091200000, 0.794], [1473177600000, 0.793], [1473264000000, 0.796], [1473350400000, 0.789], [1473609600000, 0.771], [1473696000000, 0.776], [1473782400000, 0.771], [1474214400000, 0.777], [1474300800000, 0.775], [1474387200000, 0.776], [1474473600000, 0.778], [1474560000000, 0.775], [1474819200000, 0.763], [1474905600000, 0.767], [1474992000000, 0.767], [1475078400000, 0.77], [1475164800000, 0.773], [1476028800000, 0.784], [1476115200000, 0.789], [1476201600000, 0.799], [1476288000000, 0.798], [1476374400000, 0.795], [1476633600000, 0.786], [1476720000000, 0.797], [1476806400000, 0.801], [1476892800000, 0.809], [1476979200000, 0.805], [1477238400000, 0.807], [1477324800000, 0.806], [1477411200000, 0.802], [1477497600000, 0.805], [1477584000000, 0.801], [1477843200000, 0.803], [1477929600000, 0.812], [1478016000000, 0.804], [1478102400000, 0.806], [1478188800000, 0.805], [1478448000000, 0.802], [1478534400000, 0.806], [1478620800000, 0.798], [1478707200000, 0.808], [1478793600000, 0.81], [1479052800000, 0.814], [1479139200000, 0.817], [1479225600000, 0.818], [1479312000000, 0.818], [1479398400000, 0.816], [1479657600000, 0.82], [1479744000000, 0.826], [1479830400000, 0.823], [1479916800000, 0.82], [1480003200000, 0.822], [1480262400000, 0.818], [1480348800000, 0.813], [1480435200000, 0.809], [1480521600000, 0.812], [1480608000000, 0.801], [1480867200000, 0.796], [1480953600000, 0.8], [1481040000000, 0.808], [1481126400000, 0.807], [1481212800000, 0.804], [1481472000000, 0.763], [1481558400000, 0.763], [1481644800000, 0.76], [1481731200000, 0.764], [1481817600000, 0.774], [1482076800000, 0.774], [1482163200000, 0.777], [1482249600000, 0.786], [1482336000000, 0.79], [1482422400000, 0.789], [1482681600000, 0.787], [1482768000000, 0.788], [1482854400000, 0.788], [1482940800000, 0.789], [1483027200000, 0.795], [1483113600000, 0.795], [1483372800000, 0.799], [1483459200000, 0.803], [1483545600000, 0.803], [1483632000000, 0.792], [1483891200000, 0.794], [1483977600000, 0.794], [1484064000000, 0.786], [1484150400000, 0.781], [1484236800000, 0.778], [1484496000000, 0.768], [1484582400000, 0.772], [1484668800000, 0.771], [1484755200000, 0.773], [1484841600000, 0.778], [1485100800000, 0.778], [1485187200000, 0.775], [1485273600000, 0.779], [1485360000000, 0.783], [1486051200000, 0.78], [1486310400000, 0.785], [1486396800000, 0.784], [1486483200000, 0.787], [1486569600000, 0.789], [1486656000000, 0.788], [1486915200000, 0.792], [1487001600000, 0.792], [1487088000000, 0.789], [1487174400000, 0.791], [1487260800000, 0.788], [1487520000000, 0.797], [1487606400000, 0.806], [1487692800000, 0.806], [1487779200000, 0.802], [1487865600000, 0.801], [1488124800000, 0.798], [1488211200000, 0.8], [1488297600000, 0.8], [1488384000000, 0.797], [1488470400000, 0.801], [1488729600000, 0.808], [1488816000000, 0.813], [1488902400000, 0.812], [1488988800000, 0.809], [1489075200000, 0.811], [1489334400000, 0.821], [1489420800000, 0.82], [1489507200000, 0.821], [1489593600000, 0.826], [1489680000000, 0.819], [1489939200000, 0.822], [1490025600000, 0.827], [1490112000000, 0.827], [1490198400000, 0.831], [1490284800000, 0.834], [1490544000000, 0.823], [1490630400000, 0.823], [1490716800000, 0.818], [1490803200000, 0.806], [1490889600000, 0.809], [1491321600000, 0.824], [1491408000000, 0.824], [1491494400000, 0.831], [1491753600000, 0.822], [1491840000000, 0.824], [1491926400000, 0.819], [1492012800000, 0.822], [1492099200000, 0.812], [1492358400000, 0.805], [1492444800000, 0.804], [1492531200000, 0.803], [1492617600000, 0.805], [1492704000000, 0.8], [1492963200000, 0.79], [1493049600000, 0.794], [1493136000000, 0.803], [1493222400000, 0.805], [1493308800000, 0.805], [1493654400000, 0.802], [1493740800000, 0.797], [1493827200000, 0.793], [1493913600000, 0.786], [1494172800000, 0.778], [1494259200000, 0.781], [1494345600000, 0.778], [1494432000000, 0.778], [1494518400000, 0.784], [1494777600000, 0.786], [1494864000000, 0.794], [1494950400000, 0.793], [1495036800000, 0.79], [1495123200000, 0.787], [1495382400000, 0.788], [1495468800000, 0.786], [1495555200000, 0.784], [1495641600000, 0.79], [1495728000000, 0.786], [1496160000000, 0.785], [1496246400000, 0.783], [1496332800000, 0.78], [1496592000000, 0.784], [1496678400000, 0.789], [1496764800000, 0.804], [1496851200000, 0.81], [1496937600000, 0.819], [1497196800000, 0.821], [1497283200000, 0.822], [1497369600000, 0.813], [1497456000000, 0.812], [1497542400000, 0.811], [1497801600000, 0.818], [1497888000000, 0.811], [1497974400000, 0.822], [1498060800000, 0.811], [1498147200000, 0.821], [1498406400000, 0.836], [1498492800000, 0.834], [1498579200000, 0.829], [1498665600000, 0.839], [1498752000000, 0.837], [1499011200000, 0.832], [1499097600000, 0.831], [1499184000000, 0.837], [1499270400000, 0.84], [1499356800000, 0.836], [1499616000000, 0.828], [1499702400000, 0.826], [1499788800000, 0.826], [1499875200000, 0.819], [1499961600000, 0.823], [1500220800000, 0.801], [1500307200000, 0.803], [1500393600000, 0.814], [1500480000000, 0.824], [1500566400000, 0.822], [1500825600000, 0.823], [1500912000000, 0.821], [1500998400000, 0.815], [1501084800000, 0.822], [1501171200000, 0.828], [1501430400000, 0.836], [1501516800000, 0.836], [1501603200000, 0.831], [1501689600000, 0.828], [1501776000000, 0.824], [1502035200000, 0.824], [1502121600000, 0.828], [1502208000000, 0.83], [1502294400000, 0.833], [1502380800000, 0.825], [1502640000000, 0.84], [1502726400000, 0.846], [1502812800000, 0.851], [1502899200000, 0.851], [1502985600000, 0.854], [1503244800000, 0.855], [1503331200000, 0.858], [1503417600000, 0.858], [1503504000000, 0.855], [1503590400000, 0.861], [1503849600000, 0.871], [1503936000000, 0.875], [1504022400000, 0.876], [1504108800000, 0.879], [1504195200000, 0.879], [1504454400000, 0.885], [1504540800000, 0.898], [1504627200000, 0.896], [1504713600000, 0.901], [1504800000000, 0.902], [1505059200000, 0.905], [1505145600000, 0.908], [1505232000000, 0.911], [1505318400000, 0.91], [1505404800000, 0.912], [1505664000000, 0.916], [1505750400000, 0.916], [1505836800000, 0.92], [1505923200000, 0.911], [1506009600000, 0.906], [1506268800000, 0.906], [1506355200000, 0.911], [1506441600000, 0.919], [1506528000000, 0.928], [1506614400000, 0.938], [1507478400000, 0.948], [1507564800000, 0.955], [1507651200000, 0.955], [1507737600000, 0.957], [1507824000000, 0.958], [1508083200000, 0.953], [1508169600000, 0.957], [1508256000000, 0.961], [1508342400000, 0.959], [1508428800000, 0.965], [1508688000000, 0.972], [1508774400000, 0.967], [1508860800000, 0.98], [1508947200000, 0.975], [1509033600000, 0.974], [1509292800000, 0.969], [1509379200000, 0.973], [1509465600000, 0.965], [1509552000000, 0.973], [1509638400000, 0.974], [1509897600000, 0.999], [1509984000000, 1.0], [1510070400000, 0.993], [1510156800000, 0.993], [1510243200000, 1.011], [1510502400000, 1.017], [1510588800000, 1.011], [1510675200000, 1.002], [1510761600000, 1.02], [1510848000000, 1.004], [1511107200000, 1.026], [1511193600000, 1.037], [1511280000000, 1.037], [1511366400000, 1.001], [1511452800000, 0.989], [1511712000000, 0.97], [1511798400000, 0.991], [1511884800000, 0.989], [1511971200000, 0.979], [1512057600000, 0.993], [1512316800000, 0.99], [1512403200000, 0.976], [1512489600000, 0.987], [1512576000000, 0.979], [1512662400000, 0.999], [1512921600000, 1.027], [1513008000000, 1.022], [1513094400000, 1.029], [1513180800000, 1.036], [1513267200000, 1.025], [1513526400000, 0.999], [1513612800000, 1.022], [1513699200000, 1.019], [1513785600000, 1.04], [1513872000000, 1.039], [1514131200000, 1.032], [1514217600000, 1.033], [1514304000000, 1.02], [1514390400000, 1.022], [1514476800000, 1.037], [1514649600000, 1.036], [1514822400000, 1.046], [1514908800000, 1.05], [1514995200000, 1.046], [1515081600000, 1.049], [1515340800000, 1.047], [1515427200000, 1.044], [1515513600000, 1.041], [1515600000000, 1.041], [1515686400000, 1.044], [1515945600000, 1.033], [1516032000000, 1.029], [1516118400000, 1.02], [1516204800000, 1.019], [1516291200000, 1.015], [1516550400000, 1.036], [1516636800000, 1.04], [1516723200000, 1.044], [1516809600000, 1.043], [1516896000000, 1.05], [1517155200000, 1.028], [1517241600000, 1.03], [1517328000000, 1.021], [1517414400000, 1.008], [1517500800000, 1.02], [1517760000000, 1.017], [1517846400000, 0.972], [1517932800000, 0.964], [1518019200000, 0.979], [1518105600000, 0.959], [1518364800000, 0.989], [1518451200000, 0.994], [1518537600000, 0.997], [1519228800000, 1.02], [1519315200000, 1.013], [1519574400000, 1.028], [1519660800000, 1.035], [1519747200000, 1.044], [1519833600000, 1.057], [1519920000000, 1.043], [1520179200000, 1.049], [1520265600000, 1.068], [1520352000000, 1.056], [1520438400000, 1.066], [1520524800000, 1.081], [1520784000000, 1.095], [1520870400000, 1.083], [1520956800000, 1.065], [1521043200000, 1.07], [1521129600000, 1.06], [1521388800000, 1.07], [1521475200000, 1.076], [1521561600000, 1.066], [1521648000000, 1.058], [1521734400000, 1.023], [1521993600000, 1.045], [1522080000000, 1.067], [1522166400000, 1.049], [1522252800000, 1.05], [1522339200000, 1.068], [1522598400000, 1.077], [1522684800000, 1.073], [1522771200000, 1.063], [1523203200000, 1.061], [1523289600000, 1.061], [1523376000000, 1.064], [1523462400000, 1.062], [1523548800000, 1.062], [1523808000000, 1.07], [1523894400000, 1.047], [1523980800000, 1.055], [1524067200000, 1.061], [1524153600000, 1.05], [1524412800000, 1.031], [1524499200000, 1.049], [1524585600000, 1.059], [1524672000000, 1.046], [1524758400000, 1.051], [1525190400000, 1.06], [1525276800000, 1.074], [1525363200000, 1.072], [1525622400000, 1.095], [1525708800000, 1.099], [1525795200000, 1.094], [1525881600000, 1.1], [1525968000000, 1.088], [1526227200000, 1.094], [1526313600000, 1.109], [1526400000000, 1.104], [1526486400000, 1.091], [1526572800000, 1.099], [1526832000000, 1.105], [1526918400000, 1.112], [1527004800000, 1.095], [1527091200000, 1.092], [1527177600000, 1.084], [1527436800000, 1.085], [1527523200000, 1.083], [1527609600000, 1.073], [1527696000000, 1.107], [1527782400000, 1.088], [1528041600000, 1.09], [1528128000000, 1.112], [1528214400000, 1.108], [1528300800000, 1.099], [1528387200000, 1.092], [1528646400000, 1.083], [1528732800000, 1.098], [1528819200000, 1.082], [1528905600000, 1.07], [1528992000000, 1.058], [1529337600000, 1.017], [1529424000000, 1.037], [1529510400000, 1.016], [1529596800000, 1.022], [1529856000000, 1.012], [1529942400000, 1.012], [1530028800000, 0.987], [1530115200000, 0.978], [1530201600000, 1.015], [1530288000000, 1.015], [1530460800000, 0.991], [1530547200000, 0.991], [1530633600000, 0.973], [1530720000000, 0.961], [1530806400000, 0.972], [1531065600000, 0.998], [1531152000000, 0.998], [1531238400000, 0.981], [1531324800000, 1.004], [1531411200000, 1.01], [1531670400000, 1.009], [1531756800000, 1.008], [1531843200000, 1.002], [1531929600000, 1.012], [1532016000000, 1.016], [1532275200000, 1.022], [1532361600000, 1.035], [1532448000000, 1.034], [1532534400000, 1.021], [1532620800000, 1.016], [1532880000000, 0.996], [1532966400000, 0.993], [1533052800000, 0.987], [1533139200000, 0.967], [1533225600000, 0.95], [1533484800000, 0.933], [1533571200000, 0.959], [1533657600000, 0.935], [1533744000000, 0.955], [1533830400000, 0.963], [1534089600000, 0.961], [1534176000000, 0.957], [1534262400000, 0.933], [1534348800000, 0.922], [1534435200000, 0.905], [1534694400000, 0.905], [1534780800000, 0.921], [1534867200000, 0.914], [1534953600000, 0.919], [1535040000000, 0.913], [1535299200000, 0.933], [1535385600000, 0.934], [1535472000000, 0.924], [1535558400000, 0.915], [1535644800000, 0.904], [1535904000000, 0.904], [1535990400000, 0.913], [1536076800000, 0.9], [1536163200000, 0.89], [1536249600000, 0.889], [1536508800000, 0.869], [1536595200000, 0.871], [1536681600000, 0.869], [1536768000000, 0.877], [1536854400000, 0.874], [1537113600000, 0.861], [1537200000000, 0.877], [1537286400000, 0.889], [1537372800000, 0.888], [1537459200000, 0.907], [1537804800000, 0.904], [1537891200000, 0.912], [1537977600000, 0.902], [1538064000000, 0.917], [1538928000000, 0.883], [1539014400000, 0.878], [1539100800000, 0.882], [1539187200000, 0.837], [1539273600000, 0.845], [1539532800000, 0.836], [1539619200000, 0.816], [1539705600000, 0.819], [1539792000000, 0.806], [1539878400000, 0.833], [1540137600000, 0.869], [1540224000000, 0.85], [1540310400000, 0.844], [1540396800000, 0.837], [1540483200000, 0.831], [1540742400000, 0.821], [1540828800000, 0.827], [1540915200000, 0.833], [1541001600000, 0.844], [1541088000000, 0.873], [1541347200000, 0.867], [1541433600000, 0.862], [1541520000000, 0.859], [1541606400000, 0.85], [1541692800000, 0.848], [1541952000000, 0.867], [1542038400000, 0.875], [1542124800000, 0.867], [1542211200000, 0.878], [1542297600000, 0.888], [1542556800000, 0.884], [1542643200000, 0.86], [1542729600000, 0.861], [1542816000000, 0.86], [1542902400000, 0.837], [1543161600000, 0.833], [1543248000000, 0.833], [1543334400000, 0.847], [1543420800000, 0.835], [1543507200000, 0.844], [1543766400000, 0.867], [1543852800000, 0.868], [1543939200000, 0.866], [1544025600000, 0.851], [1544112000000, 0.852], [1544371200000, 0.849], [1544457600000, 0.859], [1544544000000, 0.858], [1544630400000, 0.865], [1544716800000, 0.848], [1544976000000, 0.841], [1545062400000, 0.832], [1545148800000, 0.823], [1545235200000, 0.825], [1545321600000, 0.819], [1545580800000, 0.828], [1545667200000, 0.822], [1545753600000, 0.818], [1545840000000, 0.803], [1545926400000, 0.802], [1546185600000, 0.802], [1546358400000, 0.792], [1546444800000, 0.784], [1546531200000, 0.799], [1546790400000, 0.815], [1546876800000, 0.818], [1546963200000, 0.821], [1547049600000, 0.819], [1547136000000, 0.829], [1547395200000, 0.821], [1547481600000, 0.831], [1547568000000, 0.825], [1547654400000, 0.816], [1547740800000, 0.821], [1548000000000, 0.833], [1548086400000, 0.829], [1548172800000, 0.831], [1548259200000, 0.837], [1548345600000, 0.843], [1548604800000, 0.841], [1548691200000, 0.833], [1548777600000, 0.829], [1548864000000, 0.828], [1548950400000, 0.846], [1549814400000, 0.863], [1549900800000, 0.878], [1549987200000, 0.89], [1550073600000, 0.889], [1550160000000, 0.879], [1550419200000, 0.903], [1550505600000, 0.898], [1550592000000, 0.894], [1550678400000, 0.891], [1550764800000, 0.909], [1551024000000, 0.951], [1551110400000, 0.945], [1551196800000, 0.938], [1551283200000, 0.941], [1551369600000, 0.945], [1551628800000, 0.957], [1551715200000, 0.973], [1551801600000, 0.984], [1551888000000, 0.985], [1551974400000, 0.964], [1552233600000, 0.999], [1552320000000, 1.012], [1552406400000, 1.0], [1552492800000, 0.983], [1552579200000, 0.993], [1552838400000, 1.016], [1552924800000, 1.014], [1553011200000, 1.008], [1553097600000, 1.017], [1553184000000, 1.019], [1553443200000, 1.004], [1553529600000, 0.986], [1553616000000, 0.996], [1553702400000, 0.992], [1553788800000, 1.017], [1554048000000, 1.046], [1554134400000, 1.048], [1554220800000, 1.069], [1554307200000, 1.073], [1554652800000, 1.071], [1554739200000, 1.068], [1554825600000, 1.081], [1554912000000, 1.06], [1554998400000, 1.064], [1555257600000, 1.061], [1555344000000, 1.081], [1555430400000, 1.086], [1555516800000, 1.087], [1555603200000, 1.099], [1555862400000, 1.087], [1555948800000, 1.074], [1556035200000, 1.081], [1556121600000, 1.056], [1556208000000, 1.048], [1556467200000, 1.04], [1556553600000, 1.042], [1557072000000, 0.984], [1557158400000, 0.991], [1557244800000, 0.986], [1557331200000, 0.969], [1557417600000, 1.002], [1557676800000, 0.997], [1557763200000, 0.992], [1557849600000, 1.014], [1557936000000, 1.02], [1558022400000, 0.997], [1558281600000, 0.983], [1558368000000, 0.996], [1558454400000, 0.993], [1558540800000, 0.969], [1558627200000, 0.967], [1558886400000, 0.981], [1558972800000, 0.983], [1559059200000, 0.983], [1559145600000, 0.976], [1559232000000, 0.973], [1559491200000, 0.974], [1559577600000, 0.965], [1559664000000, 0.966], [1559750400000, 0.953], [1560096000000, 0.963], [1560182400000, 0.991], [1560268800000, 0.984], [1560355200000, 0.984], [1560441600000, 0.976], [1560700800000, 0.973], [1560787200000, 0.973], [1560873600000, 0.99], [1560960000000, 1.004], [1561046400000, 1.008], [1561305600000, 1.007], [1561392000000, 0.999], [1561478400000, 0.999], [1561564800000, 1.011], [1561651200000, 1.005], [1561824000000, 1.005], [1561910400000, 1.031], [1561996800000, 1.039], [1562083200000, 1.029], [1562169600000, 1.026], [1562256000000, 1.036], [1562515200000, 1.016], [1562601600000, 1.012], [1562688000000, 1.008], [1562774400000, 1.01], [1562860800000, 1.011], [1563120000000, 1.011], [1563206400000, 1.013], [1563292800000, 1.01], [1563379200000, 0.996], [1563465600000, 1.002], [1563724800000, 1.004], [1563811200000, 1.014], [1563897600000, 1.03], [1563984000000, 1.032], [1564070400000, 1.036], [1564329600000, 1.037], [1564416000000, 1.037], [1564502400000, 1.033], [1564588800000, 1.024], [1564675200000, 1.013], [1564934400000, 0.997], [1565020800000, 0.986], [1565107200000, 0.983], [1565193600000, 0.991], [1565280000000, 0.984], [1565539200000, 1.009], [1565625600000, 1.007], [1565712000000, 1.012], [1565798400000, 1.013], [1565884800000, 1.027], [1566144000000, 1.055], [1566230400000, 1.052], [1566316800000, 1.055], [1566403200000, 1.057], [1566489600000, 1.055], [1566748800000, 1.053], [1566835200000, 1.067], [1566921600000, 1.063], [1567008000000, 1.067], [1567094400000, 1.068], [1567353600000, 1.088], [1567440000000, 1.096], [1567526400000, 1.095], [1567612800000, 1.108], [1567699200000, 1.108], [1567958400000, 1.128], [1568044800000, 1.131], [1568131200000, 1.114], [1568217600000, 1.12], [1568563200000, 1.119], [1568649600000, 1.097], [1568736000000, 1.1], [1568822400000, 1.117], [1568908800000, 1.122], [1569168000000, 1.106], [1569254400000, 1.114], [1569340800000, 1.098], [1569427200000, 1.078], [1569513600000, 1.085], [1569772800000, 1.075], [1570464000000, 1.074], [1570550400000, 1.08], [1570636800000, 1.092], [1570723200000, 1.091], [1570982400000, 1.104], [1571068800000, 1.086], [1571155200000, 1.082], [1571241600000, 1.083], [1571328000000, 1.074], [1571587200000, 1.075], [1571673600000, 1.077], [1571760000000, 1.069], [1571846400000, 1.069], [1571932800000, 1.078], [1572192000000, 1.087], [1572278400000, 1.087], [1572364800000, 1.085], [1572451200000, 1.086], [1572537600000, 1.101], [1572796800000, 1.11], [1572883200000, 1.12], [1572969600000, 1.114], [1573056000000, 1.123], [1573142400000, 1.118], [1573401600000, 1.098], [1573488000000, 1.101], [1573574400000, 1.105], [1573660800000, 1.115], [1573747200000, 1.115], [1574006400000, 1.119], [1574092800000, 1.143], [1574179200000, 1.135], [1574265600000, 1.135], [1574352000000, 1.125], [1574611200000, 1.118], [1574697600000, 1.126], [1574784000000, 1.123], [1574870400000, 1.119], [1574956800000, 1.112], [1575216000000, 1.117], [1575302400000, 1.121], [1575388800000, 1.12], [1575475200000, 1.129], [1575561600000, 1.149], [1575820800000, 1.152], [1575907200000, 1.162], [1575993600000, 1.15], [1576080000000, 1.15], [1576166400000, 1.163], [1576425600000, 1.186], [1576512000000, 1.2], [1576598400000, 1.202], [1576684800000, 1.197], [1576771200000, 1.195], [1577030400000, 1.182], [1577116800000, 1.2], [1577203200000, 1.203], [1577289600000, 1.21], [1577376000000, 1.205], [1577635200000, 1.218], [1577721600000, 1.223], [1577894400000, 1.239], [1577980800000, 1.241], [1578240000000, 1.246], [1578326400000, 1.27], [1578412800000, 1.259], [1578499200000, 1.274], [1578585600000, 1.273], [1578844800000, 1.287], [1578931200000, 1.281], [1579017600000, 1.273], [1579104000000, 1.274], [1579190400000, 1.276], [1579449600000, 1.281], [1579536000000, 1.267], [1579622400000, 1.276], [1579708800000, 1.243], [1580659200000, 1.157], [1580745600000, 1.205], [1580832000000, 1.221], [1580918400000, 1.251], [1581004800000, 1.27], [1581264000000, 1.277], [1581350400000, 1.279], [1581436800000, 1.307], [1581523200000, 1.296], [1581609600000, 1.299], [1581868800000, 1.34], [1581955200000, 1.354], [1582041600000, 1.35], [1582128000000, 1.373], [1582214400000, 1.393], [1582473600000, 1.401], [1582560000000, 1.39], [1582646400000, 1.345], [1582732800000, 1.367], [1582819200000, 1.31], [1583078400000, 1.353], [1583164800000, 1.364], [1583251200000, 1.369], [1583337600000, 1.39], [1583424000000, 1.38], [1583683200000, 1.329], [1583769600000, 1.354], [1583856000000, 1.343], [1583942400000, 1.309], [1584028800000, 1.294], [1584288000000, 1.237], [1584374400000, 1.235], [1584460800000, 1.22], [1584547200000, 1.224], [1584633600000, 1.245], [1584892800000, 1.201], [1584979200000, 1.221], [1585065600000, 1.254], [1585152000000, 1.247], [1585238400000, 1.244], [1585497600000, 1.232], [1585584000000, 1.236], [1585670400000, 1.233], [1585756800000, 1.253], [1585843200000, 1.253], [1586188800000, 1.286], [1586275200000, 1.29], [1586361600000, 1.296], [1586448000000, 1.286], [1586707200000, 1.288], [1586793600000, 1.314], [1586880000000, 1.306], [1586966400000, 1.316], [1587052800000, 1.323], [1587312000000, 1.339], [1587398400000, 1.333], [1587484800000, 1.343], [1587571200000, 1.344], [1587657600000, 1.333], [1587916800000, 1.339], [1588003200000, 1.352], [1588089600000, 1.371], [1588176000000, 1.387], [1588694400000, 1.403], [1588780800000, 1.403], [1588867200000, 1.408], [1589126400000, 1.404], [1589212800000, 1.411], [1589299200000, 1.418], [1589385600000, 1.402], [1589472000000, 1.401], [1589731200000, 1.411], [1589817600000, 1.44], [1589904000000, 1.425], [1589990400000, 1.406], [1590076800000, 1.385], [1590336000000, 1.389], [1590422400000, 1.409], [1590508800000, 1.403], [1590595200000, 1.405], [1590681600000, 1.421], [1590940800000, 1.456], [1591027200000, 1.453], [1591113600000, 1.45], [1591200000000, 1.454], [1591286400000, 1.457], [1591545600000, 1.471], [1591632000000, 1.477], [1591718400000, 1.482], [1591804800000, 1.472], [1591891200000, 1.484], [1592150400000, 1.474], [1592236800000, 1.497], [1592323200000, 1.494], [1592409600000, 1.492], [1592496000000, 1.507], [1592755200000, 1.503], [1592841600000, 1.522], [1592928000000, 1.532], [1593360000000, 1.53], [1593446400000, 1.562], [1593532800000, 1.577], [1593619200000, 1.603], [1593705600000, 1.61], [1593964800000, 1.651], [1594051200000, 1.685], [1594137600000, 1.717], [1594224000000, 1.77], [1594310400000, 1.782], [1594569600000, 1.83], [1594656000000, 1.813], [1594742400000, 1.817], [1594828800000, 1.735], [1594915200000, 1.78], [1595174400000, 1.859], [1595260800000, 1.891], [1595347200000, 1.891], [1595433600000, 1.909], [1595520000000, 1.861], [1595779200000, 1.897], [1595865600000, 1.9], [1595952000000, 1.957], [1596038400000, 1.961], [1596124800000, 1.98], [1596384000000, 2.016], [1596470400000, 2.009], [1596556800000, 2.027], [1596643200000, 2.031], [1596729600000, 2.023], [1596988800000, 2.03], [1597075200000, 1.987], [1597161600000, 1.943], [1597248000000, 1.952], [1597334400000, 1.982], [1597593600000, 2.01], [1597680000000, 2.045], [1597766400000, 2.02], [1597852800000, 1.986], [1597939200000, 2.014], [1598198400000, 2.038], [1598284800000, 2.038], [1598371200000, 2.053], [1598457600000, 2.066], [1598544000000, 2.13], [1598803200000, 2.133], [1598889600000, 2.14], [1598976000000, 2.143], [1599062400000, 2.12], [1599148800000, 2.104], [1599408000000, 2.037], [1599494400000, 2.031], [1599580800000, 1.973], [1599667200000, 1.963], [1599753600000, 1.977], [1600012800000, 1.993], [1600099200000, 2.024], [1600185600000, 2.015], [1600272000000, 2.025], [1600358400000, 2.049], [1600617600000, 2.033], [1600704000000, 2.006], [1600790400000, 2.017], [1600876800000, 1.969], [1600963200000, 1.98], [1601222400000, 1.993], [1601308800000, 2.017], [1601395200000, 2.006], [1602172800000, 2.044], [1602432000000, 2.108], [1602518400000, 2.124], [1602604800000, 2.147], [1602691200000, 2.134], [1602777600000, 2.112], [1603036800000, 2.099], [1603123200000, 2.113], [1603209600000, 2.096], [1603296000000, 2.066], [1603382400000, 2.023], [1603641600000, 2.039], [1603728000000, 2.055], [1603814400000, 2.065], [1603900800000, 2.068], [1603987200000, 2.042], [1604246400000, 2.072], [1604332800000, 2.11], [1604419200000, 2.142], [1604505600000, 2.156], [1604592000000, 2.126], [1604851200000, 2.157], [1604937600000, 2.142], [1605024000000, 2.126], [1605110400000, 2.13], [1605196800000, 2.12], [1605456000000, 2.134], [1605542400000, 2.123], [1605628800000, 2.125], [1605715200000, 2.152], [1605801600000, 2.161], [1606060800000, 2.164], [1606147200000, 2.154], [1606233600000, 2.123], [1606320000000, 2.13], [1606406400000, 2.146], [1606665600000, 2.15], [1606752000000, 2.163], [1606838400000, 2.169], [1606924800000, 2.155], [1607011200000, 2.175], [1607270400000, 2.166], [1607356800000, 2.165], [1607443200000, 2.141], [1607529600000, 2.152], [1607616000000, 2.125], [1607875200000, 2.136], [1607961600000, 2.126], [1608048000000, 2.133], [1608134400000, 2.136], [1608220800000, 2.13], [1608480000000, 2.156], [1608566400000, 2.126], [1608652800000, 2.155], [1608739200000, 2.149], [1608825600000, 2.157], [1609084800000, 2.172], [1609171200000, 2.175], [1609257600000, 2.177], [1609344000000, 2.201], [1609689600000, 2.234], [1609776000000, 2.276], [1609862400000, 2.276], [1609948800000, 2.281], [1610035200000, 2.279], [1610294400000, 2.264], [1610380800000, 2.283], [1610467200000, 2.277], [1610553600000, 2.268], [1610640000000, 2.275], [1610899200000, 2.318], [1610985600000, 2.309], [1611072000000, 2.323], [1611158400000, 2.376], [1611244800000, 2.371], [1611504000000, 2.363], [1611590400000, 2.347], [1611676800000, 2.358], [1611763200000, 2.307], [1611849600000, 2.334], [1612108800000, 2.363], [1612195200000, 2.404], [1612281600000, 2.415], [1612368000000, 2.414], [1612454400000, 2.387], [1612713600000, 2.451], [1612800000000, 2.492], [1612886400000, 2.544], [1613577600000, 2.548], [1613664000000, 2.544], [1613923200000, 2.496], [1614009600000, 2.526], [1614096000000, 2.482], [1614182400000, 2.484], [1614268800000, 2.422], [1614528000000, 2.48], [1614614400000, 2.462], [1614700800000, 2.483], [1614787200000, 2.417], [1614873600000, 2.406], [1615132800000, 2.332], [1615219200000, 2.287], [1615305600000, 2.297], [1615392000000, 2.331], [1615478400000, 2.339], [1615737600000, 2.305], [1615824000000, 2.33], [1615910400000, 2.344], [1615996800000, 2.355], [1616083200000, 2.312], [1616342400000, 2.346], [1616428800000, 2.313], [1616515200000, 2.262], [1616601600000, 2.261], [1616688000000, 2.298], [1616947200000, 2.304], [1617033600000, 2.308], [1617120000000, 2.298], [1617206400000, 2.323], [1617292800000, 2.329], [1617638400000, 2.32], [1617724800000, 2.303], [1617811200000, 2.303], [1617897600000, 2.302], [1618156800000, 2.263], [1618243200000, 2.267], [1618329600000, 2.286], [1618416000000, 2.263], [1618502400000, 2.267], [1618761600000, 2.302], [1618848000000, 2.306], [1618934400000, 2.3], [1619020800000, 2.318], [1619107200000, 2.329], [1619366400000, 2.317], [1619452800000, 2.321], [1619539200000, 2.337], [1619625600000, 2.328], [1619712000000, 2.327], [1620230400000, 2.307], [1620316800000, 2.263], [1620576000000, 2.246], [1620662400000, 2.24], [1620748800000, 2.248], [1620835200000, 2.245], [1620921600000, 2.276], [1621180800000, 2.304], [1621267200000, 2.314], [1621353600000, 2.32], [1621440000000, 2.336], [1621526400000, 2.336], [1621785600000, 2.358], [1621872000000, 2.396], [1621958400000, 2.398], [1622044800000, 2.441], [1622131200000, 2.411], [1622390400000, 2.433], [1622476800000, 2.439], [1622563200000, 2.407], [1622649600000, 2.398], [1622736000000, 2.416], [1622995200000, 2.436], [1623081600000, 2.413], [1623168000000, 2.42], [1623254400000, 2.424], [1623340800000, 2.411], [1623686400000, 2.421], [1623772800000, 2.378], [1623859200000, 2.429], [1623945600000, 2.422], [1624204800000, 2.428], [1624291200000, 2.425], [1624377600000, 2.439], [1624464000000, 2.441], [1624550400000, 2.473], [1624809600000, 2.5], [1624896000000, 2.489], [1624982400000, 2.52], [1625068800000, 2.499], [1625155200000, 2.448], [1625414400000, 2.451], [1625500800000, 2.434], [1625587200000, 2.448], [1625673600000, 2.434], [1625760000000, 2.399], [1626019200000, 2.399], [1626105600000, 2.416], [1626192000000, 2.39], [1626278400000, 2.403], [1626364800000, 2.38], [1626624000000, 2.373], [1626710400000, 2.373], [1626796800000, 2.387], [1626883200000, 2.406], [1626969600000, 2.384], [1627228800000, 2.329], [1627315200000, 2.295], [1627401600000, 2.272], [1627488000000, 2.33], [1627574400000, 2.328], [1627833600000, 2.342], [1627920000000, 2.313], [1628006400000, 2.326], [1628092800000, 2.305], [1628179200000, 2.306], [1628438400000, 2.344], [1628524800000, 2.381], [1628611200000, 2.377], [1628697600000, 2.39], [1628784000000, 2.371], [1629043200000, 2.371], [1629129600000, 2.307], [1629216000000, 2.302], [1629302400000, 2.329], [1629388800000, 2.335], [1629648000000, 2.385], [1629734400000, 2.392], [1629820800000, 2.366], [1629907200000, 2.334], [1629993600000, 2.322], [1630252800000, 2.332], [1630339200000, 2.311], [1630425600000, 2.324], [1630512000000, 2.31], [1630598400000, 2.301], [1630857600000, 2.335], [1630944000000, 2.339], [1631030400000, 2.346], [1631116800000, 2.322], [1631203200000, 2.327], [1631462400000, 2.321], [1631548800000, 2.294], [1631635200000, 2.27], [1631721600000, 2.241], [1631808000000, 2.248], [1632240000000, 2.243], [1632326400000, 2.285], [1632412800000, 2.283], [1632672000000, 2.256], [1632758400000, 2.258], [1632844800000, 2.216], [1632931200000, 2.23], [1633622400000, 2.254], [1633881600000, 2.289], [1633968000000, 2.238], [1634054400000, 2.268], [1634140800000, 2.273], [1634227200000, 2.264], [1634486400000, 2.251], [1634572800000, 2.269], [1634659200000, 2.244], [1634745600000, 2.237], [1634832000000, 2.248], [1635091200000, 2.262], [1635177600000, 2.26], [1635264000000, 2.221], [1635350400000, 2.216], [1635436800000, 2.254], [1635696000000, 2.293], [1635782400000, 2.286], [1635868800000, 2.292], [1635955200000, 2.337], [1636041600000, 2.342], [1636300800000, 2.343], [1636387200000, 2.359], [1636473600000, 2.359], [1636560000000, 2.372], [1636646400000, 2.391], [1636905600000, 2.412], [1636992000000, 2.403], [1637078400000, 2.414], [1637164800000, 2.402], [1637251200000, 2.433], [1637510400000, 2.479], [1637596800000, 2.496], [1637683200000, 2.484], [1637769600000, 2.463], [1637856000000, 2.445], [1638115200000, 2.437], [1638201600000, 2.454], [1638288000000, 2.435], [1638374400000, 2.413], [1638460800000, 2.43], [1638720000000, 2.402], [1638806400000, 2.39], [1638892800000, 2.429], [1638979200000, 2.454], [1639065600000, 2.426], [1639324800000, 2.435], [1639411200000, 2.437], [1639497600000, 2.421], [1639584000000, 2.462], [1639670400000, 2.435], [1639929600000, 2.408], [1640016000000, 2.456], [1640102400000, 2.507], [1640188800000, 2.499], [1640275200000, 2.514], [1640534400000, 2.522], [1640620800000, 2.513], [1640707200000, 2.49], [1640793600000, 2.548], [1640880000000, 2.578], [1641225600000, 2.59], [1641312000000, 2.546], [1641398400000, 2.52], [1641484800000, 2.497], [1641744000000, 2.513], [1641830400000, 2.449], [1641916800000, 2.461], [1642003200000, 2.41], [1642089600000, 2.448], [1642348800000, 2.498], [1642435200000, 2.492], [1642521600000, 2.469], [1642608000000, 2.455], [1642694400000, 2.425], [1642953600000, 2.413], [1643040000000, 2.325], [1643126400000, 2.325], [1643212800000, 2.276], [1643299200000, 2.255], [1644163200000, 2.277], [1644249600000, 2.265], [1644336000000, 2.283], [1644422400000, 2.29], [1644508800000, 2.251], [1644768000000, 2.241], [1644854400000, 2.27], [1644940800000, 2.265], [1645027200000, 2.261], [1645113600000, 2.266], [1645372800000, 2.274], [1645459200000, 2.238], [1645545600000, 2.279], [1645632000000, 2.236], [1645718400000, 2.271], [1645977600000, 2.251], [1646064000000, 2.247], [1646150400000, 2.241], [1646236800000, 2.227], [1646323200000, 2.219], [1646582400000, 2.152], [1646668800000, 2.097], [1646755200000, 2.068], [1646841600000, 2.1], [1646928000000, 2.117], [1647187200000, 2.057], [1647273600000, 1.969], [1647360000000, 2.021], [1647446400000, 2.049], [1647532800000, 2.054], [1647792000000, 2.061], [1647878400000, 2.056], [1647964800000, 2.071], [1648051200000, 2.042], [1648137600000, 2.017], [1648396800000, 2.017], [1648483200000, 2.01], [1648569600000, 2.038], [1648656000000, 2.023], [1648742400000, 2.029], [1649174400000, 2.033], [1649260800000, 1.986], [1649347200000, 1.979], [1649606400000, 1.944], [1649692800000, 1.962], [1649779200000, 1.936], [1649865600000, 1.953], [1649952000000, 1.958], [1650211200000, 1.97], [1650297600000, 1.976], [1650384000000, 1.961], [1650470400000, 1.914], [1650556800000, 1.898], [1650816000000, 1.831], [1650902400000, 1.814], [1650988800000, 1.872], [1651075200000, 1.855], [1651161600000, 1.93], [1651680000000, 1.953], [1651766400000, 1.92], [1652025600000, 1.92], [1652112000000, 1.951], [1652198400000, 1.95], [1652284800000, 1.966], [1652371200000, 1.977], [1652630400000, 1.965], [1652716800000, 1.971], [1652803200000, 1.968], [1652889600000, 1.971], [1652976000000, 2.0], [1653235200000, 1.999], [1653321600000, 1.943], [1653408000000, 1.965], [1653494400000, 1.978], [1653580800000, 1.97], [1653840000000, 1.985], [1653926400000, 2.011], [1654012800000, 2.017], [1654099200000, 2.037], [1654444800000, 2.081], [1654531200000, 2.073], [1654617600000, 2.085], [1654704000000, 2.055], [1654790400000, 2.088], [1655049600000, 2.065], [1655136000000, 2.052], [1655222400000, 2.063], [1655308800000, 2.077], [1655395200000, 2.097], [1655654400000, 2.109], [1655740800000, 2.095], [1655827200000, 2.051], [1655913600000, 2.073], [1656000000000, 2.083], [1656259200000, 2.108], [1656345600000, 2.126], [1656432000000, 2.106], [1656518400000, 2.126], [1656604800000, 2.112], [1656864000000, 2.118], [1656950400000, 2.1], [1657036800000, 2.07], [1657123200000, 2.062], [1657209600000, 2.066], [1657468800000, 2.037], [1657555200000, 2.013], [1657641600000, 2.011], [1657728000000, 2.014], [1657814400000, 1.992], [1658073600000, 2.001], [1658160000000, 2.018], [1658246400000, 2.029], [1658332800000, 2.032], [1658419200000, 2.018], [1658678400000, 2.002], [1658764800000, 2.017], [1658851200000, 2.031], [1658937600000, 2.032], [1659024000000, 2.01], [1659283200000, 2.025], [1659369600000, 1.998], [1659456000000, 1.989], [1659542400000, 2.006], [1659628800000, 2.065], [1659888000000, 2.061], [1659974400000, 2.071], [1660060800000, 2.054], [1660147200000, 2.081], [1660233600000, 2.082], [1660492800000, 2.057], [1660579200000, 2.051], [1660665600000, 2.056], [1660752000000, 2.031], [1660838400000, 2.008], [1661097600000, 2.024], [1661184000000, 2.02], [1661270400000, 1.971], [1661356800000, 1.985], [1661443200000, 1.976], [1661702400000, 1.972], [1661788800000, 1.967], [1661875200000, 1.961], [1661961600000, 1.951], [1662048000000, 1.955], [1662307200000, 1.961], [1662393600000, 1.97], [1662480000000, 1.974], [1662566400000, 1.985], [1662652800000, 1.986], [1662998400000, 2.004], [1663084800000, 1.988], [1663171200000, 1.975], [1663257600000, 1.941], [1663516800000, 1.935], [1663603200000, 1.93], [1663689600000, 1.919], [1663776000000, 1.918], [1663862400000, 1.905], [1664121600000, 1.875], [1664208000000, 1.901], [1664294400000, 1.874], [1664380800000, 1.891], [1664467200000, 1.893], [1665331200000, 1.858], [1665417600000, 1.853], [1665504000000, 1.875], [1665590400000, 1.874], [1665676800000, 1.911], [1665936000000, 1.933], [1666022400000, 1.941], [1666108800000, 1.916], [1666195200000, 1.909], [1666281600000, 1.909], [1666540800000, 1.904], [1666627200000, 1.9], [1666713600000, 1.915], [1666800000000, 1.915], [1666886400000, 1.882], [1667145600000, 1.869], [1667232000000, 1.897], [1667318400000, 1.906], [1667404800000, 1.903], [1667491200000, 1.935], [1667750400000, 1.929], [1667836800000, 1.922], [1667923200000, 1.917], [1668009600000, 1.905], [1668096000000, 1.942], [1668355200000, 1.954], [1668441600000, 1.977], [1668528000000, 1.966], [1668614400000, 1.977], [1668700800000, 1.98], [1668960000000, 1.965], [1669046400000, 1.963], [1669132800000, 1.967], [1669219200000, 1.966], [1669305600000, 1.978], [1669564800000, 1.963], [1669651200000, 1.997], [1669737600000, 2.003], [1669824000000, 2.02], [1669910400000, 2.01], [1670169600000, 2.039], [1670256000000, 2.042], [1670342400000, 2.03], [1670428800000, 2.029], [1670515200000, 2.037], [1670774400000, 2.018], [1670860800000, 2.017], [1670947200000, 2.013], [1671033600000, 2.003], [1671120000000, 1.998], [1671379200000, 1.972], [1671465600000, 1.955], [1671552000000, 1.963], [1671638400000, 1.957], [1671724800000, 1.954], [1671984000000, 1.98], [1672070400000, 2.004], [1672156800000, 1.998], [1672243200000, 2.001], [1672329600000, 2.011], [1672416000000, 2.011], [1672675200000, 2.045], [1672761600000, 2.056], [1672848000000, 2.075], [1672934400000, 2.065], [1673193600000, 2.073], [1673280000000, 2.074], [1673366400000, 2.061], [1673452800000, 2.064], [1673539200000, 2.08], [1673798400000, 2.079], [1673884800000, 2.084], [1673971200000, 2.088], [1674057600000, 2.109], [1674144000000, 2.137], [1675008000000, 2.136], [1675094400000, 2.131], [1675180800000, 2.153], [1675267200000, 2.167], [1675353600000, 2.175], [1675612800000, 2.168], [1675699200000, 2.185], [1675785600000, 2.183], [1675872000000, 2.202], [1675958400000, 2.191], [1676217600000, 2.225], [1676304000000, 2.22], [1676390400000, 2.22], [1676476800000, 2.209], [1676563200000, 2.203], [1676822400000, 2.253], [1676908800000, 2.247], [1676995200000, 2.235], [1677081600000, 2.233], [1677168000000, 2.222], [1677427200000, 2.221], [1677513600000, 2.231], [1677600000000, 2.254], [1677686400000, 2.259], [1677772800000, 2.255], [1678032000000, 2.266], [1678118400000, 2.245], [1678204800000, 2.238], [1678291200000, 2.237], [1678377600000, 2.226], [1678636800000, 2.266], [1678723200000, 2.247], [1678809600000, 2.266], [1678896000000, 2.238], [1678982400000, 2.257], [1679241600000, 2.244], [1679328000000, 2.255], [1679414400000, 2.268], [1679500800000, 2.267], [1679587200000, 2.26], [1679846400000, 2.269], [1679932800000, 2.261], [1680019200000, 2.25], [1680105600000, 2.269], [1680192000000, 2.276], [1680451200000, 2.317], [1680537600000, 2.331], [1680710400000, 2.338], [1680796800000, 2.351], [1681056000000, 2.33], [1681142400000, 2.347], [1681228800000, 2.386], [1681315200000, 2.364], [1681401600000, 2.362], [1681660800000, 2.38], [1681747200000, 2.396], [1681833600000, 2.389], [1681920000000, 2.392], [1682006400000, 2.345], [1682265600000, 2.331], [1682352000000, 2.336], [1682438400000, 2.322], [1682524800000, 2.336], [1682611200000, 2.347], [1683129600000, 2.373], [1683216000000, 2.351], [1683475200000, 2.383], [1683561600000, 2.367], [1683648000000, 2.35], [1683734400000, 2.34], [1683820800000, 2.321], [1684080000000, 2.339], [1684166400000, 2.328], [1684252800000, 2.314], [1684339200000, 2.327], [1684425600000, 2.328], [1684684800000, 2.34], [1684771200000, 2.311], [1684857600000, 2.287], [1684944000000, 2.28], [1685030400000, 2.3], [1685289600000, 2.309], [1685376000000, 2.307], [1685462400000, 2.292], [1685548800000, 2.299], [1685635200000, 2.3], [1685894400000, 2.299], [1685980800000, 2.291], [1686067200000, 2.293], [1686153600000, 2.298], [1686240000000, 2.306], [1686499200000, 2.308], [1686585600000, 2.298], [1686672000000, 2.301], [1686758400000, 2.317], [1686844800000, 2.325], [1687104000000, 2.323], [1687190400000, 2.318], [1687276800000, 2.292], [1687708800000, 2.265], [1687795200000, 2.291], [1687881600000, 2.295], [1687968000000, 2.302], [1688054400000, 2.311], [1688313600000, 2.312], [1688400000000, 2.306], [1688486400000, 2.303], [1688572800000, 2.283], [1688659200000, 2.279], [1688918400000, 2.283], [1689004800000, 2.3], [1689091200000, 2.294], [1689177600000, 2.308], [1689264000000, 2.314], [1689523200000, 2.304], [1689609600000, 2.301], [1689696000000, 2.311], [1689782400000, 2.299], [1689868800000, 2.298], [1690128000000, 2.3], [1690214400000, 2.322], [1690300800000, 2.322], [1690387200000, 2.32], [1690473600000, 2.339], [1690732800000, 2.333], [1690819200000, 2.324], [1690905600000, 2.306], [1690992000000, 2.316], [1691078400000, 2.318], [1691337600000, 2.306], [1691424000000, 2.315], [1691510400000, 2.305], [1691596800000, 2.31], [1691683200000, 2.272], [1691942400000, 2.277], [1692028800000, 2.28], [1692115200000, 2.261], [1692201600000, 2.268], [1692288000000, 2.243], [1692547200000, 2.227], [1692633600000, 2.242], [1692720000000, 2.22], [1692806400000, 2.238], [1692892800000, 2.236], [1693152000000, 2.248], [1693238400000, 2.272], [1693324800000, 2.269], [1693411200000, 2.266], [1693497600000, 2.274], [1693756800000, 2.289], [1693843200000, 2.275], [1693929600000, 2.266], [1694016000000, 2.243], [1694102400000, 2.24], [1694361600000, 2.254], [1694448000000, 2.256], [1694534400000, 2.251], [1694620800000, 2.262], [1694707200000, 2.26], [1694966400000, 2.262], [1695052800000, 2.267], [1695139200000, 2.263], [1695225600000, 2.247], [1695312000000, 2.255], [1695571200000, 2.255], [1695657600000, 2.242], [1695744000000, 2.246], [1695830400000, 2.241], [1696780800000, 2.237], [1696867200000, 2.22], [1696953600000, 2.225], [1697040000000, 2.238], [1697126400000, 2.222], [1697385600000, 2.213], [1697472000000, 2.204], [1697558400000, 2.181], [1697644800000, 2.154], [1697731200000, 2.14], [1697990400000, 2.116], [1698076800000, 2.123], [1698163200000, 2.127], [1698249600000, 2.131], [1698336000000, 2.151], [1698595200000, 2.161], [1698681600000, 2.164], [1698768000000, 2.164], [1698854400000, 2.155], [1698940800000, 2.165], [1699200000000, 2.169], [1699286400000, 2.17], [1699372800000, 2.17], [1699459200000, 2.162], [1699545600000, 2.164], [1699804800000, 2.164], [1699891200000, 2.17], [1699977600000, 2.183], [1700064000000, 2.175], [1700150400000, 2.182], [1700409600000, 2.18], [1700496000000, 2.178], [1700582400000, 2.162], [1700668800000, 2.171], [1700755200000, 2.163], [1701014400000, 2.156], [1701100800000, 2.166], [1701187200000, 2.158], [1701273600000, 2.162], [1701360000000, 2.162], [1701619200000, 2.159], [1701705600000, 2.126], [1701792000000, 2.12], [1701878400000, 2.131], [1701964800000, 2.132], [1702224000000, 2.144], [1702310400000, 2.15], [1702396800000, 2.129], [1702483200000, 2.128], [1702569600000, 2.12], [1702828800000, 2.113], [1702915200000, 2.115], [1703001600000, 2.101], [1703088000000, 2.105], [1703174400000, 2.089], [1703433600000, 2.089], [1703520000000, 2.079], [1703606400000, 2.086], [1703692800000, 2.104], [1703779200000, 2.125], [1703952000000, 2.125], [1704124800000, 2.118], [1704211200000, 2.119], [1704297600000, 2.118], [1704384000000, 2.099], [1704643200000, 2.068], [1704729600000, 2.062], [1704816000000, 2.049], [1704902400000, 2.049], [1704988800000, 2.043], [1705248000000, 2.039], [1705334400000, 2.032], [1705420800000, 1.99], [1705507200000, 1.996], [1705593600000, 1.995], [1705852800000, 1.937], [1705939200000, 1.949], [1706025600000, 1.973], [1706112000000, 2.006], [1706198400000, 1.997], [1706457600000, 1.984], [1706544000000, 1.956], [1706630400000, 1.929], [1706716800000, 1.93], [1706803200000, 1.913], [1707062400000, 1.893], [1707148800000, 1.973], [1707235200000, 2.002], [1707321600000, 2.017], [1708272000000, 2.031], [1708358400000, 2.039], [1708444800000, 2.041], [1708531200000, 2.053], [1708617600000, 2.049], [1708876800000, 2.041], [1708963200000, 2.063], [1709049600000, 2.033], [1709136000000, 2.071], [1709222400000, 2.083], [1709481600000, 2.086], [1709568000000, 2.084], [1709654400000, 2.078], [1709740800000, 2.066], [1709827200000, 2.08], [1710086400000, 2.089], [1710172800000, 2.081], [1710259200000, 2.08], [1710345600000, 2.068], [1710432000000, 2.07], [1710691200000, 2.085], [1710777600000, 2.075], [1710864000000, 2.083], [1710950400000, 2.072], [1711036800000, 2.078], [1711296000000, 2.057], [1711382400000, 2.057], [1711468800000, 2.045], [1711555200000, 2.054], [1711641600000, 2.078], [1711900800000, 2.099], [1711987200000, 2.087], [1712073600000, 2.1], [1712505600000, 2.09], [1712592000000, 2.085], [1712678400000, 2.078], [1712764800000, 2.083], [1712851200000, 2.09], [1713110400000, 2.115], [1713196800000, 2.09], [1713283200000, 2.13], [1713369600000, 2.127], [1713456000000, 2.129], [1713715200000, 2.125], [1713801600000, 2.102], [1713888000000, 2.114], [1713974400000, 2.107], [1714060800000, 2.122], [1714320000000, 2.143], [1714406400000, 2.153], [1714924800000, 2.188], [1715011200000, 2.184], [1715097600000, 2.172], [1715184000000, 2.188], [1715270400000, 2.189], [1715529600000, 2.201], [1715616000000, 2.206], [1715702400000, 2.191]];/*累计收益率走势*/
var Data_grandTotal = [{
    "name": "富国文体健康股票A",
    "data": [[1699977600000, 0], [1700064000000, -0.37], [1700150400000, -0.05], [1700409600000, -0.14], [1700496000000, -0.23], [1700582400000, -0.96], [1700668800000, -0.55], [1700755200000, -0.92], [1701014400000, -1.24], [1701100800000, -0.78], [1701187200000, -1.15], [1701273600000, -0.96], [1701360000000, -0.96], [1701619200000, -1.10], [1701705600000, -2.61], [1701792000000, -2.89], [1701878400000, -2.38], [1701964800000, -2.34], [1702224000000, -1.79], [1702310400000, -1.51], [1702396800000, -2.47], [1702483200000, -2.52], [1702569600000, -2.89], [1702828800000, -3.21], [1702915200000, -3.11], [1703001600000, -3.76], [1703088000000, -3.57], [1703174400000, -4.31], [1703433600000, -4.31], [1703520000000, -4.76], [1703606400000, -4.44], [1703692800000, -3.62], [1703779200000, -2.66], [1703952000000, -2.66], [1704124800000, -2.98], [1704211200000, -2.93], [1704297600000, -2.98], [1704384000000, -3.85], [1704643200000, -5.27], [1704729600000, -5.54], [1704816000000, -6.14], [1704902400000, -6.14], [1704988800000, -6.41], [1705248000000, -6.60], [1705334400000, -6.92], [1705420800000, -8.84], [1705507200000, -8.57], [1705593600000, -8.61], [1705852800000, -11.27], [1705939200000, -10.72], [1706025600000, -9.62], [1706112000000, -8.11], [1706198400000, -8.52], [1706457600000, -9.12], [1706544000000, -10.40], [1706630400000, -11.64], [1706716800000, -11.59], [1706803200000, -12.37], [1707062400000, -13.28], [1707148800000, -9.62], [1707235200000, -8.29], [1707321600000, -7.60], [1708272000000, -6.96], [1708358400000, -6.60], [1708444800000, -6.50], [1708531200000, -5.96], [1708617600000, -6.14], [1708876800000, -6.50], [1708963200000, -5.50], [1709049600000, -6.87], [1709136000000, -5.13], [1709222400000, -4.58], [1709481600000, -4.44], [1709568000000, -4.54], [1709654400000, -4.81], [1709740800000, -5.36], [1709827200000, -4.72], [1710086400000, -4.31], [1710172800000, -4.67], [1710259200000, -4.72], [1710345600000, -5.27], [1710432000000, -5.18], [1710691200000, -4.49], [1710777600000, -4.95], [1710864000000, -4.58], [1710950400000, -5.08], [1711036800000, -4.81], [1711296000000, -5.77], [1711382400000, -5.77], [1711468800000, -6.32], [1711555200000, -5.91], [1711641600000, -4.81], [1711900800000, -3.85], [1711987200000, -4.40], [1712073600000, -3.80], [1712505600000, -4.26], [1712592000000, -4.49], [1712678400000, -4.81], [1712764800000, -4.58], [1712851200000, -4.26], [1713110400000, -3.11], [1713196800000, -4.26], [1713283200000, -2.43], [1713369600000, -2.57], [1713456000000, -2.47], [1713715200000, -2.66], [1713801600000, -3.71], [1713888000000, -3.16], [1713974400000, -3.48], [1714060800000, -2.79], [1714320000000, -1.83], [1714406400000, -1.37], [1714924800000, 0.23], [1715011200000, 0.05], [1715097600000, -0.50], [1715184000000, 0.23], [1715270400000, 0.27], [1715529600000, 0.82], [1715616000000, 1.05], [1715702400000, 0.37]]
}, {
    "name": "同类平均",
    "data": [[1699977600000, 0], [1700064000000, -1.04], [1700150400000, -0.59], [1700409600000, -0.08], [1700496000000, -0.51], [1700582400000, -1.62], [1700668800000, -0.76], [1700755200000, -1.73], [1701014400000, -1.68], [1701100800000, -1.29], [1701187200000, -1.84], [1701273600000, -1.83], [1701360000000, -1.89], [1701619200000, -2.57], [1701705600000, -4.16], [1701792000000, -3.80], [1701878400000, -4.06], [1701964800000, -3.75], [1702224000000, -2.92], [1702310400000, -2.86], [1702396800000, -3.92], [1702483200000, -4.29], [1702569600000, -4.79], [1702828800000, -5.57], [1702915200000, -5.47], [1703001600000, -6.48], [1703088000000, -5.93], [1703174400000, -6.65], [1703433600000, -6.39], [1703520000000, -7.32], [1703606400000, -6.62], [1703692800000, -5.08], [1703779200000, -4.04], [1703952000000, -4.05], [1704124800000, -5.01], [1704211200000, -5.73], [1704297600000, -6.41], [1704384000000, -7.72], [1704643200000, -9.33], [1704729600000, -9.07], [1704816000000, -9.52], [1704902400000, -8.58], [1704988800000, -9.04], [1705248000000, -9.13], [1705334400000, -9.17], [1705420800000, -11.43], [1705507200000, -10.80], [1705593600000, -11.52], [1705852800000, -14.66], [1705939200000, -13.83], [1706025600000, -13.21], [1706112000000, -11.43], [1706198400000, -12.60], [1706457600000, -14.18], [1706544000000, -16.04], [1706630400000, -17.76], [1706716800000, -17.57], [1706803200000, -19.20], [1707062400000, -20.55], [1707148800000, -16.75], [1707235200000, -15.22], [1707321600000, -13.65], [1708272000000, -12.48], [1708358400000, -12.21], [1708444800000, -11.70], [1708531200000, -10.76], [1708617600000, -10.22], [1708876800000, -10.11], [1708963200000, -8.42], [1709049600000, -11.01], [1709136000000, -8.70], [1709222400000, -8.04], [1709481600000, -7.33], [1709568000000, -7.75], [1709654400000, -7.75], [1709740800000, -8.79], [1709827200000, -7.74], [1710086400000, -6.35], [1710172800000, -6.01], [1710259200000, -5.93], [1710345600000, -6.22], [1710432000000, -5.68], [1710691200000, -4.51], [1710777600000, -5.19], [1710864000000, -4.92], [1710950400000, -5.03], [1711036800000, -5.97], [1711296000000, -7.09], [1711382400000, -7.17], [1711468800000, -8.79], [1711555200000, -7.84], [1711641600000, -7.16], [1711900800000, -5.77], [1711987200000, -6.16], [1712073600000, -6.57], [1712505600000, -7.63], [1712592000000, -7.18], [1712678400000, -8.18], [1712764800000, -7.99], [1712851200000, -8.19], [1713110400000, -7.60], [1713196800000, -9.72], [1713283200000, -7.78], [1713369600000, -7.77], [1713456000000, -8.50], [1713715200000, -8.69], [1713801600000, -8.84], [1713888000000, -7.80], [1713974400000, -7.74], [1714060800000, -6.15], [1714320000000, -4.90], [1714406400000, -5.10], [1714924800000, -3.32], [1715011200000, -3.39], [1715097600000, -4.27], [1715184000000, -3.07], [1715270400000, -3.37], [1715529600000, -3.68], [1715616000000, -3.58], [1715702400000, -4.19]]
}, {
    "name": "沪深300",
    "data": [[1699977600000, 0], [1700064000000, -0.97], [1700150400000, -1.09], [1700409600000, -0.86], [1700496000000, -0.73], [1700582400000, -1.74], [1700668800000, -1.27], [1700755200000, -1.92], [1701014400000, -2.64], [1701100800000, -2.46], [1701187200000, -3.30], [1701273600000, -3.08], [1701360000000, -3.45], [1701619200000, -4.08], [1701705600000, -5.90], [1701792000000, -5.76], [1701878400000, -5.99], [1701964800000, -5.76], [1702224000000, -5.21], [1702310400000, -5.00], [1702396800000, -6.59], [1702483200000, -7.08], [1702569600000, -7.37], [1702828800000, -7.70], [1702915200000, -7.57], [1703001600000, -8.59], [1703088000000, -7.66], [1703174400000, -7.49], [1703433600000, -7.20], [1703520000000, -7.83], [1703606400000, -7.51], [1703692800000, -5.34], [1703779200000, -4.88], [1704124800000, -6.12], [1704211200000, -6.35], [1704297600000, -7.21], [1704384000000, -7.71], [1704643200000, -8.90], [1704729600000, -8.73], [1704816000000, -9.15], [1704902400000, -8.64], [1704988800000, -8.96], [1705248000000, -9.05], [1705334400000, -8.49], [1705420800000, -10.48], [1705507200000, -9.22], [1705593600000, -9.36], [1705852800000, -10.77], [1705939200000, -10.40], [1706025600000, -9.15], [1706112000000, -7.33], [1706198400000, -7.58], [1706457600000, -8.41], [1706544000000, -10.04], [1706630400000, -10.86], [1706716800000, -10.80], [1706803200000, -11.85], [1707062400000, -11.28], [1707148800000, -8.19], [1707235200000, -7.31], [1707321600000, -6.72], [1708272000000, -5.64], [1708358400000, -5.44], [1708444800000, -4.17], [1708531200000, -3.34], [1708617600000, -3.26], [1708876800000, -4.27], [1708963200000, -3.12], [1709049600000, -4.35], [1709136000000, -2.53], [1709222400000, -1.93], [1709481600000, -1.84], [1709568000000, -1.16], [1709654400000, -1.56], [1709740800000, -2.15], [1709827200000, -1.73], [1710086400000, -0.50], [1710172800000, -0.27], [1710259200000, -0.97], [1710345600000, -1.25], [1710432000000, -1.03], [1710691200000, -0.10], [1710777600000, -0.82], [1710864000000, -0.61], [1710950400000, -0.73], [1711036800000, -1.73], [1711296000000, -2.26], [1711382400000, -1.76], [1711468800000, -2.90], [1711555200000, -2.39], [1711641600000, -1.93], [1711900800000, -0.32], [1711987200000, -0.74], [1712073600000, -1.09], [1712505600000, -1.96], [1712592000000, -2.04], [1712678400000, -2.84], [1712764800000, -2.86], [1712851200000, -3.64], [1713110400000, -1.61], [1713196800000, -2.66], [1713283200000, -1.16], [1713369600000, -1.04], [1713456000000, -1.82], [1713715200000, -2.12], [1713801600000, -2.80], [1713888000000, -2.37], [1713974400000, -2.13], [1714060800000, -0.64], [1714320000000, 0.46], [1714406400000, -0.08], [1714924800000, 1.40], [1715011200000, 1.43], [1715097600000, 0.64], [1715184000000, 1.59], [1715270400000, 1.64], [1715529600000, 1.59], [1715616000000, 1.38], [1715702400000, 0.52]]
}];/*同类排名走势*/
var Data_rateInSimilarType = [{"x": 1438790400000, "y": 86, "sc": "98"}, {
    "x": 1438876800000,
    "y": 85,
    "sc": "99"
}, {"x": 1439136000000, "y": 80, "sc": "98"}, {"x": 1439222400000, "y": 70, "sc": "98"}, {
    "x": 1439308800000,
    "y": 61,
    "sc": "99"
}, {"x": 1439395200000, "y": 60, "sc": "99"}, {"x": 1439481600000, "y": 63, "sc": "100"}, {
    "x": 1439740800000,
    "y": 66,
    "sc": "100"
}, {"x": 1439827200000, "y": 63, "sc": "101"}, {"x": 1439913600000, "y": 55, "sc": "101"}, {
    "x": 1440000000000,
    "y": 52,
    "sc": "102"
}, {"x": 1440086400000, "y": 41, "sc": "103"}, {"x": 1440345600000, "y": 60, "sc": "103"}, {
    "x": 1440432000000,
    "y": 56,
    "sc": "103"
}, {"x": 1440518400000, "y": 52, "sc": "104"}, {"x": 1440604800000, "y": 55, "sc": "104"}, {
    "x": 1440691200000,
    "y": 66,
    "sc": "105"
}, {"x": 1440950400000, "y": 74, "sc": "104"}, {"x": 1441036800000, "y": 71, "sc": "104"}, {
    "x": 1441123200000,
    "y": 65,
    "sc": "108"
}, {"x": 1441555200000, "y": 79, "sc": "108"}, {"x": 1441641600000, "y": 86, "sc": "108"}, {
    "x": 1441728000000,
    "y": 90,
    "sc": "110"
}, {"x": 1441814400000, "y": 82, "sc": "110"}, {"x": 1441900800000, "y": 79, "sc": "111"}, {
    "x": 1442160000000,
    "y": 80,
    "sc": "110"
}, {"x": 1442246400000, "y": 85, "sc": "110"}, {"x": 1442332800000, "y": 87, "sc": "110"}, {
    "x": 1442419200000,
    "y": 85,
    "sc": "110"
}, {"x": 1442505600000, "y": 90, "sc": "111"}, {"x": 1442764800000, "y": 96, "sc": "112"}, {
    "x": 1442851200000,
    "y": 95,
    "sc": "112"
}, {"x": 1442937600000, "y": 96, "sc": "113"}, {"x": 1443024000000, "y": 97, "sc": "115"}, {
    "x": 1443110400000,
    "y": 100,
    "sc": "117"
}, {"x": 1443369600000, "y": 110, "sc": "116"}, {"x": 1443456000000, "y": 110, "sc": "117"}, {
    "x": 1443542400000,
    "y": 108,
    "sc": "118"
}, {"x": 1444233600000, "y": 104, "sc": "118"}, {"x": 1444320000000, "y": 85, "sc": "119"}, {
    "x": 1444579200000,
    "y": 85,
    "sc": "119"
}, {"x": 1444665600000, "y": 90, "sc": "119"}, {"x": 1444752000000, "y": 102, "sc": "120"}, {
    "x": 1444838400000,
    "y": 95,
    "sc": "120"
}, {"x": 1444924800000, "y": 107, "sc": "121"}, {"x": 1445184000000, "y": 110, "sc": "120"}, {
    "x": 1445270400000,
    "y": 112,
    "sc": "120"
}, {"x": 1445356800000, "y": 116, "sc": "120"}, {"x": 1445443200000, "y": 116, "sc": "120"}, {
    "x": 1445529600000,
    "y": 118,
    "sc": "121"
}, {"x": 1445788800000, "y": 113, "sc": "120"}, {"x": 1445875200000, "y": 99, "sc": "121"}, {
    "x": 1445961600000,
    "y": 99,
    "sc": "121"
}, {"x": 1446048000000, "y": 104, "sc": "122"}, {"x": 1446134400000, "y": 108, "sc": "123"}, {
    "x": 1446393600000,
    "y": 110,
    "sc": "123"
}, {"x": 1446480000000, "y": 100, "sc": "123"}, {"x": 1446566400000, "y": 109, "sc": "124"}, {
    "x": 1446652800000,
    "y": 108,
    "sc": "124"
}, {"x": 1446739200000, "y": 96, "sc": "128"}, {"x": 1446998400000, "y": 117, "sc": "129"}, {
    "x": 1447084800000,
    "y": 103,
    "sc": "129"
}, {"x": 1447171200000, "y": 100, "sc": "129"}, {"x": 1447257600000, "y": 94, "sc": "129"}, {
    "x": 1447344000000,
    "y": 109,
    "sc": "130"
}, {"x": 1447603200000, "y": 87, "sc": "129"}, {"x": 1447689600000, "y": 102, "sc": "129"}, {
    "x": 1447776000000,
    "y": 90,
    "sc": "130"
}, {"x": 1447862400000, "y": 88, "sc": "130"}, {"x": 1447948800000, "y": 77, "sc": "131"}, {
    "x": 1448208000000,
    "y": 78,
    "sc": "131"
}, {"x": 1448294400000, "y": 54, "sc": "131"}, {"x": 1448380800000, "y": 48, "sc": "131"}, {
    "x": 1448467200000,
    "y": 46,
    "sc": "132"
}, {"x": 1448553600000, "y": 46, "sc": "133"}, {"x": 1448812800000, "y": 36, "sc": "132"}, {
    "x": 1448899200000,
    "y": 17,
    "sc": "134"
}, {"x": 1448985600000, "y": 26, "sc": "134"}, {"x": 1449072000000, "y": 23, "sc": "134"}, {
    "x": 1449158400000,
    "y": 22,
    "sc": "135"
}, {"x": 1449417600000, "y": 23, "sc": "134"}, {"x": 1449504000000, "y": 19, "sc": "134"}, {
    "x": 1449590400000,
    "y": 14,
    "sc": "134"
}, {"x": 1449676800000, "y": 16, "sc": "134"}, {"x": 1449763200000, "y": 15, "sc": "135"}, {
    "x": 1450022400000,
    "y": 14,
    "sc": "134"
}, {"x": 1450108800000, "y": 15, "sc": "134"}, {"x": 1450195200000, "y": 15, "sc": "134"}, {
    "x": 1450281600000,
    "y": 14,
    "sc": "134"
}, {"x": 1450368000000, "y": 14, "sc": "135"}, {"x": 1450627200000, "y": 13, "sc": "134"}, {
    "x": 1450713600000,
    "y": 13,
    "sc": "134"
}, {"x": 1450800000000, "y": 11, "sc": "134"}, {"x": 1450886400000, "y": 11, "sc": "134"}, {
    "x": 1450972800000,
    "y": 11,
    "sc": "135"
}, {"x": 1451232000000, "y": 9, "sc": "134"}, {"x": 1451318400000, "y": 7, "sc": "134"}, {
    "x": 1451404800000,
    "y": 7,
    "sc": "136"
}, {"x": 1451491200000, "y": 7, "sc": "137"}, {"x": 1451836800000, "y": 7, "sc": "136"}, {
    "x": 1451923200000,
    "y": 9,
    "sc": "136"
}, {"x": 1452009600000, "y": 9, "sc": "136"}, {"x": 1452096000000, "y": 9, "sc": "136"}, {
    "x": 1452182400000,
    "y": 13,
    "sc": "137"
}, {"x": 1452441600000, "y": 22, "sc": "136"}, {"x": 1452528000000, "y": 37, "sc": "136"}, {
    "x": 1452614400000,
    "y": 40,
    "sc": "136"
}, {"x": 1452700800000, "y": 33, "sc": "136"}, {"x": 1452787200000, "y": 24, "sc": "137"}, {
    "x": 1453046400000,
    "y": 12,
    "sc": "136"
}, {"x": 1453132800000, "y": 14, "sc": "136"}, {"x": 1453219200000, "y": 16, "sc": "136"}, {
    "x": 1453305600000,
    "y": 11,
    "sc": "137"
}, {"x": 1453392000000, "y": 16, "sc": "138"}, {"x": 1453651200000, "y": 11, "sc": "137"}, {
    "x": 1453737600000,
    "y": 17,
    "sc": "137"
}, {"x": 1453824000000, "y": 29, "sc": "137"}, {"x": 1453910400000, "y": 38, "sc": "139"}, {
    "x": 1453996800000,
    "y": 30,
    "sc": "140"
}, {"x": 1454256000000, "y": 20, "sc": "139"}, {"x": 1454342400000, "y": 10, "sc": "139"}, {
    "x": 1454428800000,
    "y": 11,
    "sc": "140"
}, {"x": 1454515200000, "y": 13, "sc": "140"}, {"x": 1454601600000, "y": 17, "sc": "141"}, {
    "x": 1455465600000,
    "y": 23,
    "sc": "141"
}, {"x": 1455552000000, "y": 30, "sc": "141"}, {"x": 1455638400000, "y": 29, "sc": "141"}, {
    "x": 1455724800000,
    "y": 20,
    "sc": "141"
}, {"x": 1455811200000, "y": 27, "sc": "142"}, {"x": 1456070400000, "y": 32, "sc": "141"}, {
    "x": 1456156800000,
    "y": 23,
    "sc": "141"
}, {"x": 1456243200000, "y": 32, "sc": "141"}, {"x": 1456329600000, "y": 45, "sc": "141"}, {
    "x": 1456416000000,
    "y": 50,
    "sc": "143"
}, {"x": 1456675200000, "y": 53, "sc": "142"}, {"x": 1456761600000, "y": 74, "sc": "142"}, {
    "x": 1456848000000,
    "y": 51,
    "sc": "144"
}, {"x": 1456934400000, "y": 62, "sc": "144"}, {"x": 1457020800000, "y": 83, "sc": "145"}, {
    "x": 1457280000000,
    "y": 87,
    "sc": "145"
}, {"x": 1457366400000, "y": 98, "sc": "145"}, {"x": 1457452800000, "y": 104, "sc": "145"}, {
    "x": 1457539200000,
    "y": 101,
    "sc": "146"
}, {"x": 1457625600000, "y": 106, "sc": "148"}, {"x": 1457884800000, "y": 104, "sc": "147"}, {
    "x": 1457971200000,
    "y": 96,
    "sc": "147"
}, {"x": 1458057600000, "y": 103, "sc": "147"}, {"x": 1458144000000, "y": 101, "sc": "147"}, {
    "x": 1458230400000,
    "y": 99,
    "sc": "148"
}, {"x": 1458489600000, "y": 80, "sc": "147"}, {"x": 1458576000000, "y": 76, "sc": "147"}, {
    "x": 1458662400000,
    "y": 61,
    "sc": "147"
}, {"x": 1458748800000, "y": 66, "sc": "147"}, {"x": 1458835200000, "y": 102, "sc": "148"}, {
    "x": 1459094400000,
    "y": 86,
    "sc": "147"
}, {"x": 1459180800000, "y": 96, "sc": "148"}, {"x": 1459267200000, "y": 108, "sc": "150"}, {
    "x": 1459353600000,
    "y": 104,
    "sc": "150"
}, {"x": 1459440000000, "y": 105, "sc": "151"}, {"x": 1459785600000, "y": 85, "sc": "150"}, {
    "x": 1459872000000,
    "y": 82,
    "sc": "150"
}, {"x": 1459958400000, "y": 77, "sc": "150"}, {"x": 1460044800000, "y": 48, "sc": "151"}, {
    "x": 1460304000000,
    "y": 25,
    "sc": "150"
}, {"x": 1460390400000, "y": 17, "sc": "150"}, {"x": 1460476800000, "y": 19, "sc": "150"}, {
    "x": 1460563200000,
    "y": 25,
    "sc": "150"
}, {"x": 1460649600000, "y": 33, "sc": "151"}, {"x": 1460908800000, "y": 70, "sc": "150"}, {
    "x": 1460995200000,
    "y": 72,
    "sc": "150"
}, {"x": 1461081600000, "y": 84, "sc": "152"}, {"x": 1461168000000, "y": 72, "sc": "152"}, {
    "x": 1461254400000,
    "y": 72,
    "sc": "154"
}, {"x": 1461513600000, "y": 82, "sc": "152"}, {"x": 1461600000000, "y": 53, "sc": "153"}, {
    "x": 1461686400000,
    "y": 47,
    "sc": "154"
}, {"x": 1461772800000, "y": 31, "sc": "154"}, {"x": 1461859200000, "y": 39, "sc": "156"}, {
    "x": 1462204800000,
    "y": 74,
    "sc": "158"
}, {"x": 1462291200000, "y": 66, "sc": "159"}, {"x": 1462377600000, "y": 75, "sc": "159"}, {
    "x": 1462464000000,
    "y": 58,
    "sc": "160"
}, {"x": 1462723200000, "y": 48, "sc": "159"}, {"x": 1462809600000, "y": 42, "sc": "159"}, {
    "x": 1462896000000,
    "y": 47,
    "sc": "159"
}, {"x": 1462982400000, "y": 46, "sc": "159"}, {"x": 1463068800000, "y": 43, "sc": "160"}, {
    "x": 1463328000000,
    "y": 49,
    "sc": "159"
}, {"x": 1463414400000, "y": 44, "sc": "159"}, {"x": 1463500800000, "y": 60, "sc": "159"}, {
    "x": 1463587200000,
    "y": 53,
    "sc": "159"
}, {"x": 1463673600000, "y": 46, "sc": "160"}, {"x": 1463932800000, "y": 44, "sc": "160"}, {
    "x": 1464019200000,
    "y": 30,
    "sc": "160"
}, {"x": 1464105600000, "y": 18, "sc": "160"}, {"x": 1464192000000, "y": 5, "sc": "160"}, {
    "x": 1464278400000,
    "y": 6,
    "sc": "161"
}, {"x": 1464537600000, "y": 4, "sc": "160"}, {"x": 1464624000000, "y": 6, "sc": "160"}, {
    "x": 1464710400000,
    "y": 7,
    "sc": "161"
}, {"x": 1464796800000, "y": 11, "sc": "161"}, {"x": 1464883200000, "y": 10, "sc": "162"}, {
    "x": 1465142400000,
    "y": 9,
    "sc": "161"
}, {"x": 1465228800000, "y": 13, "sc": "161"}, {"x": 1465315200000, "y": 13, "sc": "162"}, {
    "x": 1465747200000,
    "y": 8,
    "sc": "163"
}, {"x": 1465833600000, "y": 9, "sc": "163"}, {"x": 1465920000000, "y": 16, "sc": "166"}, {
    "x": 1466006400000,
    "y": 15,
    "sc": "166"
}, {"x": 1466092800000, "y": 18, "sc": "167"}, {"x": 1466352000000, "y": 19, "sc": "166"}, {
    "x": 1466438400000,
    "y": 20,
    "sc": "166"
}, {"x": 1466524800000, "y": 29, "sc": "167"}, {"x": 1466611200000, "y": 37, "sc": "167"}, {
    "x": 1466697600000,
    "y": 43,
    "sc": "168"
}, {"x": 1466956800000, "y": 24, "sc": "167"}, {"x": 1467043200000, "y": 34, "sc": "167"}, {
    "x": 1467129600000,
    "y": 35,
    "sc": "167"
}, {"x": 1467216000000, "y": 27, "sc": "168"}, {"x": 1467302400000, "y": 28, "sc": "168"}, {
    "x": 1467561600000,
    "y": 39,
    "sc": "167"
}, {"x": 1467648000000, "y": 41, "sc": "167"}, {"x": 1467734400000, "y": 50, "sc": "167"}, {
    "x": 1467820800000,
    "y": 46,
    "sc": "167"
}, {"x": 1467907200000, "y": 40, "sc": "168"}, {"x": 1468166400000, "y": 56, "sc": "168"}, {
    "x": 1468252800000,
    "y": 60,
    "sc": "168"
}, {"x": 1468339200000, "y": 55, "sc": "168"}, {"x": 1468425600000, "y": 63, "sc": "168"}, {
    "x": 1468512000000,
    "y": 68,
    "sc": "168"
}, {"x": 1468771200000, "y": 71, "sc": "168"}, {"x": 1468857600000, "y": 59, "sc": "168"}, {
    "x": 1468944000000,
    "y": 43,
    "sc": "169"
}, {"x": 1469030400000, "y": 58, "sc": "169"}, {"x": 1469116800000, "y": 55, "sc": "169"}, {
    "x": 1469376000000,
    "y": 47,
    "sc": "169"
}, {"x": 1469462400000, "y": 57, "sc": "168"}, {"x": 1469548800000, "y": 74, "sc": "168"}, {
    "x": 1469635200000,
    "y": 79,
    "sc": "168"
}, {"x": 1469721600000, "y": 78, "sc": "169"}, {"x": 1469980800000, "y": 78, "sc": "168"}, {
    "x": 1470067200000,
    "y": 84,
    "sc": "168"
}, {"x": 1470153600000, "y": 88, "sc": "168"}, {"x": 1470240000000, "y": 101, "sc": "168"}, {
    "x": 1470326400000,
    "y": 97,
    "sc": "169"
}, {"x": 1470585600000, "y": 114, "sc": "168"}, {"x": 1470672000000, "y": 126, "sc": "168"}, {
    "x": 1470758400000,
    "y": 123,
    "sc": "168"
}, {"x": 1470844800000, "y": 120, "sc": "168"}, {"x": 1470931200000, "y": 114, "sc": "169"}, {
    "x": 1471190400000,
    "y": 126,
    "sc": "168"
}, {"x": 1471276800000, "y": 139, "sc": "168"}, {"x": 1471363200000, "y": 143, "sc": "168"}, {
    "x": 1471449600000,
    "y": 144,
    "sc": "168"
}, {"x": 1471536000000, "y": 144, "sc": "169"}, {"x": 1471795200000, "y": 144, "sc": "168"}, {
    "x": 1471881600000,
    "y": 144,
    "sc": "168"
}, {"x": 1471968000000, "y": 140, "sc": "168"}, {"x": 1472054400000, "y": 143, "sc": "168"}, {
    "x": 1472140800000,
    "y": 150,
    "sc": "169"
}, {"x": 1472400000000, "y": 153, "sc": "170"}, {"x": 1472486400000, "y": 153, "sc": "170"}, {
    "x": 1472572800000,
    "y": 154,
    "sc": "170"
}, {"x": 1472659200000, "y": 154, "sc": "170"}, {"x": 1472745600000, "y": 154, "sc": "171"}, {
    "x": 1473004800000,
    "y": 153,
    "sc": "170"
}, {"x": 1473091200000, "y": 156, "sc": "170"}, {"x": 1473177600000, "y": 155, "sc": "170"}, {
    "x": 1473264000000,
    "y": 151,
    "sc": "171"
}, {"x": 1473350400000, "y": 152, "sc": "172"}, {"x": 1473609600000, "y": 150, "sc": "171"}, {
    "x": 1473696000000,
    "y": 150,
    "sc": "171"
}, {"x": 1473782400000, "y": 156, "sc": "172"}, {"x": 1474214400000, "y": 154, "sc": "171"}, {
    "x": 1474300800000,
    "y": 154,
    "sc": "171"
}, {"x": 1474387200000, "y": 157, "sc": "171"}, {"x": 1474473600000, "y": 155, "sc": "171"}, {
    "x": 1474560000000,
    "y": 158,
    "sc": "172"
}, {"x": 1474819200000, "y": 156, "sc": "171"}, {"x": 1474905600000, "y": 154, "sc": "171"}, {
    "x": 1474992000000,
    "y": 151,
    "sc": "171"
}, {"x": 1475078400000, "y": 149, "sc": "170"}, {"x": 1475164800000, "y": 151, "sc": "171"}, {
    "x": 1476028800000,
    "y": 149,
    "sc": "170"
}, {"x": 1476115200000, "y": 148, "sc": "171"}, {"x": 1476201600000, "y": 136, "sc": "171"}, {
    "x": 1476288000000,
    "y": 142,
    "sc": "172"
}, {"x": 1476374400000, "y": 140, "sc": "173"}, {"x": 1476633600000, "y": 139, "sc": "172"}, {
    "x": 1476720000000,
    "y": 137,
    "sc": "172"
}, {"x": 1476806400000, "y": 133, "sc": "172"}, {"x": 1476892800000, "y": 124, "sc": "172"}, {
    "x": 1476979200000,
    "y": 121,
    "sc": "172"
}, {"x": 1477238400000, "y": 133, "sc": "174"}, {"x": 1477324800000, "y": 141, "sc": "174"}, {
    "x": 1477411200000,
    "y": 142,
    "sc": "174"
}, {"x": 1477497600000, "y": 121, "sc": "175"}, {"x": 1477584000000, "y": 106, "sc": "176"}, {
    "x": 1477843200000,
    "y": 108,
    "sc": "175"
}, {"x": 1477929600000, "y": 98, "sc": "175"}, {"x": 1478016000000, "y": 98, "sc": "175"}, {
    "x": 1478102400000,
    "y": 92,
    "sc": "175"
}, {"x": 1478188800000, "y": 90, "sc": "176"}, {"x": 1478448000000, "y": 104, "sc": "175"}, {
    "x": 1478534400000,
    "y": 101,
    "sc": "175"
}, {"x": 1478620800000, "y": 116, "sc": "177"}, {"x": 1478707200000, "y": 117, "sc": "178"}, {
    "x": 1478793600000,
    "y": 118,
    "sc": "179"
}, {"x": 1479052800000, "y": 119, "sc": "178"}, {"x": 1479139200000, "y": 107, "sc": "178"}, {
    "x": 1479225600000,
    "y": 87,
    "sc": "178"
}, {"x": 1479312000000, "y": 78, "sc": "178"}, {"x": 1479398400000, "y": 82, "sc": "179"}, {
    "x": 1479657600000,
    "y": 67,
    "sc": "178"
}, {"x": 1479744000000, "y": 77, "sc": "180"}, {"x": 1479830400000, "y": 74, "sc": "180"}, {
    "x": 1479916800000,
    "y": 91,
    "sc": "180"
}, {"x": 1480003200000, "y": 93, "sc": "181"}, {"x": 1480262400000, "y": 102, "sc": "180"}, {
    "x": 1480348800000,
    "y": 95,
    "sc": "180"
}, {"x": 1480435200000, "y": 94, "sc": "185"}, {"x": 1480521600000, "y": 104, "sc": "185"}, {
    "x": 1480608000000,
    "y": 114,
    "sc": "186"
}, {"x": 1480867200000, "y": 101, "sc": "185"}, {"x": 1480953600000, "y": 86, "sc": "185"}, {
    "x": 1481040000000,
    "y": 69,
    "sc": "189"
}, {"x": 1481126400000, "y": 66, "sc": "189"}, {"x": 1481212800000, "y": 63, "sc": "190"}, {
    "x": 1481472000000,
    "y": 110,
    "sc": "189"
}, {"x": 1481558400000, "y": 118, "sc": "189"}, {"x": 1481644800000, "y": 108, "sc": "189"}, {
    "x": 1481731200000,
    "y": 91,
    "sc": "189"
}, {"x": 1481817600000, "y": 82, "sc": "190"}, {"x": 1482076800000, "y": 73, "sc": "189"}, {
    "x": 1482163200000,
    "y": 55,
    "sc": "189"
}, {"x": 1482249600000, "y": 44, "sc": "189"}, {"x": 1482336000000, "y": 34, "sc": "189"}, {
    "x": 1482422400000,
    "y": 14,
    "sc": "190"
}, {"x": 1482681600000, "y": 33, "sc": "187"}, {"x": 1482768000000, "y": 33, "sc": "187"}, {
    "x": 1482854400000,
    "y": 27,
    "sc": "189"
}, {"x": 1482940800000, "y": 21, "sc": "190"}, {"x": 1483027200000, "y": 20, "sc": "191"}, {
    "x": 1483113600000,
    "y": 20,
    "sc": "189"
}, {"x": 1483372800000, "y": 25, "sc": "190"}, {"x": 1483459200000, "y": 30, "sc": "190"}, {
    "x": 1483545600000,
    "y": 28,
    "sc": "190"
}, {"x": 1483632000000, "y": 39, "sc": "191"}, {"x": 1483891200000, "y": 45, "sc": "190"}, {
    "x": 1483977600000,
    "y": 40,
    "sc": "190"
}, {"x": 1484064000000, "y": 51, "sc": "190"}, {"x": 1484150400000, "y": 73, "sc": "190"}, {
    "x": 1484236800000,
    "y": 67,
    "sc": "191"
}, {"x": 1484496000000, "y": 50, "sc": "190"}, {"x": 1484582400000, "y": 46, "sc": "190"}, {
    "x": 1484668800000,
    "y": 55,
    "sc": "190"
}, {"x": 1484755200000, "y": 56, "sc": "190"}, {"x": 1484841600000, "y": 71, "sc": "191"}, {
    "x": 1485100800000,
    "y": 76,
    "sc": "190"
}, {"x": 1485187200000, "y": 74, "sc": "190"}, {"x": 1485273600000, "y": 65, "sc": "188"}, {
    "x": 1485360000000,
    "y": 62,
    "sc": "189"
}, {"x": 1486051200000, "y": 75, "sc": "197"}, {"x": 1486310400000, "y": 82, "sc": "196"}, {
    "x": 1486396800000,
    "y": 75,
    "sc": "196"
}, {"x": 1486483200000, "y": 78, "sc": "196"}, {"x": 1486569600000, "y": 67, "sc": "196"}, {
    "x": 1486656000000,
    "y": 92,
    "sc": "199"
}, {"x": 1486915200000, "y": 95, "sc": "199"}, {"x": 1487001600000, "y": 99, "sc": "199"}, {
    "x": 1487088000000,
    "y": 97,
    "sc": "199"
}, {"x": 1487174400000, "y": 100, "sc": "199"}, {"x": 1487260800000, "y": 100, "sc": "201"}, {
    "x": 1487520000000,
    "y": 107,
    "sc": "200"
}, {"x": 1487606400000, "y": 105, "sc": "200"}, {"x": 1487692800000, "y": 110, "sc": "200"}, {
    "x": 1487779200000,
    "y": 115,
    "sc": "200"
}, {"x": 1487865600000, "y": 117, "sc": "201"}, {"x": 1488124800000, "y": 107, "sc": "200"}, {
    "x": 1488211200000,
    "y": 88,
    "sc": "200"
}, {"x": 1488297600000, "y": 91, "sc": "200"}, {"x": 1488384000000, "y": 81, "sc": "200"}, {
    "x": 1488470400000,
    "y": 78,
    "sc": "201"
}, {"x": 1488729600000, "y": 88, "sc": "200"}, {"x": 1488816000000, "y": 83, "sc": "201"}, {
    "x": 1488902400000,
    "y": 85,
    "sc": "201"
}, {"x": 1488988800000, "y": 69, "sc": "201"}, {"x": 1489075200000, "y": 70, "sc": "202"}, {
    "x": 1489334400000,
    "y": 27,
    "sc": "201"
}, {"x": 1489420800000, "y": 30, "sc": "201"}, {"x": 1489507200000, "y": 38, "sc": "201"}, {
    "x": 1489593600000,
    "y": 54,
    "sc": "201"
}, {"x": 1489680000000, "y": 52, "sc": "202"}, {"x": 1489939200000, "y": 73, "sc": "201"}, {
    "x": 1490025600000,
    "y": 75,
    "sc": "201"
}, {"x": 1490112000000, "y": 89, "sc": "201"}, {"x": 1490198400000, "y": 98, "sc": "201"}, {
    "x": 1490284800000,
    "y": 103,
    "sc": "202"
}, {"x": 1490544000000, "y": 108, "sc": "201"}, {"x": 1490630400000, "y": 109, "sc": "201"}, {
    "x": 1490716800000,
    "y": 120,
    "sc": "203"
}, {"x": 1490803200000, "y": 127, "sc": "199"}, {"x": 1490889600000, "y": 127, "sc": "200"}, {
    "x": 1491321600000,
    "y": 119,
    "sc": "203"
}, {"x": 1491408000000, "y": 118, "sc": "204"}, {"x": 1491494400000, "y": 105, "sc": "205"}, {
    "x": 1491753600000,
    "y": 117,
    "sc": "204"
}, {"x": 1491840000000, "y": 110, "sc": "204"}, {"x": 1491926400000, "y": 116, "sc": "204"}, {
    "x": 1492012800000,
    "y": 122,
    "sc": "204"
}, {"x": 1492099200000, "y": 120, "sc": "200"}, {"x": 1492358400000, "y": 135, "sc": "200"}, {
    "x": 1492444800000,
    "y": 135,
    "sc": "205"
}, {"x": 1492531200000, "y": 141, "sc": "206"}, {"x": 1492617600000, "y": 133, "sc": "206"}, {
    "x": 1492704000000,
    "y": 144,
    "sc": "207"
}, {"x": 1492963200000, "y": 118, "sc": "207"}, {"x": 1493049600000, "y": 122, "sc": "208"}, {
    "x": 1493136000000,
    "y": 103,
    "sc": "208"
}, {"x": 1493222400000, "y": 107, "sc": "208"}, {"x": 1493308800000, "y": 111, "sc": "209"}, {
    "x": 1493654400000,
    "y": 116,
    "sc": "208"
}, {"x": 1493740800000, "y": 115, "sc": "204"}, {"x": 1493827200000, "y": 122, "sc": "208"}, {
    "x": 1493913600000,
    "y": 126,
    "sc": "209"
}, {"x": 1494172800000, "y": 123, "sc": "208"}, {"x": 1494259200000, "y": 118, "sc": "208"}, {
    "x": 1494345600000,
    "y": 111,
    "sc": "208"
}, {"x": 1494432000000, "y": 116, "sc": "208"}, {"x": 1494518400000, "y": 106, "sc": "209"}, {
    "x": 1494777600000,
    "y": 114,
    "sc": "208"
}, {"x": 1494864000000, "y": 113, "sc": "208"}, {"x": 1494950400000, "y": 120, "sc": "208"}, {
    "x": 1495036800000,
    "y": 114,
    "sc": "208"
}, {"x": 1495123200000, "y": 121, "sc": "209"}, {"x": 1495382400000, "y": 117, "sc": "208"}, {
    "x": 1495468800000,
    "y": 98,
    "sc": "209"
}, {"x": 1495555200000, "y": 102, "sc": "209"}, {"x": 1495641600000, "y": 94, "sc": "205"}, {
    "x": 1495728000000,
    "y": 97,
    "sc": "206"
}, {"x": 1496160000000, "y": 101, "sc": "209"}, {"x": 1496246400000, "y": 99, "sc": "209"}, {
    "x": 1496332800000,
    "y": 102,
    "sc": "210"
}, {"x": 1496592000000, "y": 110, "sc": "209"}, {"x": 1496678400000, "y": 107, "sc": "209"}, {
    "x": 1496764800000,
    "y": 109,
    "sc": "209"
}, {"x": 1496851200000, "y": 110, "sc": "210"}, {"x": 1496937600000, "y": 100, "sc": "211"}, {
    "x": 1497196800000,
    "y": 91,
    "sc": "211"
}, {"x": 1497283200000, "y": 107, "sc": "211"}, {"x": 1497369600000, "y": 114, "sc": "211"}, {
    "x": 1497456000000,
    "y": 120,
    "sc": "212"
}, {"x": 1497542400000, "y": 126, "sc": "215"}, {"x": 1497801600000, "y": 117, "sc": "214"}, {
    "x": 1497888000000,
    "y": 136,
    "sc": "215"
}, {"x": 1497974400000, "y": 126, "sc": "215"}, {"x": 1498060800000, "y": 131, "sc": "215"}, {
    "x": 1498147200000,
    "y": 129,
    "sc": "217"
}, {"x": 1498406400000, "y": 121, "sc": "218"}, {"x": 1498492800000, "y": 113, "sc": "218"}, {
    "x": 1498579200000,
    "y": 117,
    "sc": "218"
}, {"x": 1498665600000, "y": 95, "sc": "218"}, {"x": 1498752000000, "y": 96, "sc": "219"}, {
    "x": 1499011200000,
    "y": 107,
    "sc": "218"
}, {"x": 1499097600000, "y": 92, "sc": "218"}, {"x": 1499184000000, "y": 105, "sc": "218"}, {
    "x": 1499270400000,
    "y": 99,
    "sc": "219"
}, {"x": 1499356800000, "y": 122, "sc": "220"}, {"x": 1499616000000, "y": 116, "sc": "219"}, {
    "x": 1499702400000,
    "y": 116,
    "sc": "219"
}, {"x": 1499788800000, "y": 116, "sc": "221"}, {"x": 1499875200000, "y": 128, "sc": "221"}, {
    "x": 1499961600000,
    "y": 119,
    "sc": "222"
}, {"x": 1500220800000, "y": 122, "sc": "221"}, {"x": 1500307200000, "y": 120, "sc": "221"}, {
    "x": 1500393600000,
    "y": 131,
    "sc": "221"
}, {"x": 1500480000000, "y": 115, "sc": "221"}, {"x": 1500566400000, "y": 116, "sc": "222"}, {
    "x": 1500825600000,
    "y": 124,
    "sc": "222"
}, {"x": 1500912000000, "y": 122, "sc": "222"}, {"x": 1500998400000, "y": 142, "sc": "222"}, {
    "x": 1501084800000,
    "y": 132,
    "sc": "222"
}, {"x": 1501171200000, "y": 132, "sc": "223"}, {"x": 1501430400000, "y": 125, "sc": "222"}, {
    "x": 1501516800000,
    "y": 126,
    "sc": "222"
}, {"x": 1501603200000, "y": 123, "sc": "222"}, {"x": 1501689600000, "y": 113, "sc": "222"}, {
    "x": 1501776000000,
    "y": 107,
    "sc": "223"
}, {"x": 1502035200000, "y": 123, "sc": "222"}, {"x": 1502121600000, "y": 122, "sc": "223"}, {
    "x": 1502208000000,
    "y": 129,
    "sc": "223"
}, {"x": 1502294400000, "y": 124, "sc": "223"}, {"x": 1502380800000, "y": 103, "sc": "224"}, {
    "x": 1502640000000,
    "y": 118,
    "sc": "223"
}, {"x": 1502726400000, "y": 99, "sc": "223"}, {"x": 1502812800000, "y": 81, "sc": "223"}, {
    "x": 1502899200000,
    "y": 90,
    "sc": "227"
}, {"x": 1502985600000, "y": 84, "sc": "228"}, {"x": 1503244800000, "y": 91, "sc": "228"}, {
    "x": 1503331200000,
    "y": 89,
    "sc": "228"
}, {"x": 1503417600000, "y": 97, "sc": "226"}, {"x": 1503504000000, "y": 82, "sc": "228"}, {
    "x": 1503590400000,
    "y": 101,
    "sc": "229"
}, {"x": 1503849600000, "y": 85, "sc": "228"}, {"x": 1503936000000, "y": 74, "sc": "228"}, {
    "x": 1504022400000,
    "y": 82,
    "sc": "228"
}, {"x": 1504108800000, "y": 73, "sc": "228"}, {"x": 1504195200000, "y": 92, "sc": "229"}, {
    "x": 1504454400000,
    "y": 81,
    "sc": "228"
}, {"x": 1504540800000, "y": 63, "sc": "228"}, {"x": 1504627200000, "y": 68, "sc": "228"}, {
    "x": 1504713600000,
    "y": 56,
    "sc": "229"
}, {"x": 1504800000000, "y": 63, "sc": "231"}, {"x": 1505059200000, "y": 81, "sc": "230"}, {
    "x": 1505145600000,
    "y": 86,
    "sc": "230"
}, {"x": 1505232000000, "y": 81, "sc": "230"}, {"x": 1505318400000, "y": 65, "sc": "230"}, {
    "x": 1505404800000,
    "y": 55,
    "sc": "232"
}, {"x": 1505664000000, "y": 57, "sc": "232"}, {"x": 1505750400000, "y": 53, "sc": "232"}, {
    "x": 1505836800000,
    "y": 37,
    "sc": "232"
}, {"x": 1505923200000, "y": 54, "sc": "234"}, {"x": 1506009600000, "y": 48, "sc": "235"}, {
    "x": 1506268800000,
    "y": 37,
    "sc": "234"
}, {"x": 1506355200000, "y": 38, "sc": "234"}, {"x": 1506441600000, "y": 36, "sc": "234"}, {
    "x": 1506528000000,
    "y": 26,
    "sc": "230"
}, {"x": 1506614400000, "y": 29, "sc": "232"}, {"x": 1507478400000, "y": 19, "sc": "238"}, {
    "x": 1507564800000,
    "y": 9,
    "sc": "238"
}, {"x": 1507651200000, "y": 9, "sc": "238"}, {"x": 1507737600000, "y": 7, "sc": "239"}, {
    "x": 1507824000000,
    "y": 2,
    "sc": "240"
}, {"x": 1508083200000, "y": 5, "sc": "239"}, {"x": 1508169600000, "y": 2, "sc": "239"}, {
    "x": 1508256000000,
    "y": 2,
    "sc": "240"
}, {"x": 1508342400000, "y": 1, "sc": "240"}, {"x": 1508428800000, "y": 1, "sc": "242"}, {
    "x": 1508688000000,
    "y": 1,
    "sc": "241"
}, {"x": 1508774400000, "y": 3, "sc": "241"}, {"x": 1508860800000, "y": 1, "sc": "241"}, {
    "x": 1508947200000,
    "y": 2,
    "sc": "241"
}, {"x": 1509033600000, "y": 3, "sc": "242"}, {"x": 1509292800000, "y": 6, "sc": "241"}, {
    "x": 1509379200000,
    "y": 7,
    "sc": "241"
}, {"x": 1509465600000, "y": 13, "sc": "244"}, {"x": 1509552000000, "y": 2, "sc": "244"}, {
    "x": 1509638400000,
    "y": 5,
    "sc": "246"
}, {"x": 1509897600000, "y": 10, "sc": "245"}, {"x": 1509984000000, "y": 2, "sc": "245"}, {
    "x": 1510070400000,
    "y": 4,
    "sc": "245"
}, {"x": 1510156800000, "y": 11, "sc": "245"}, {"x": 1510243200000, "y": 12, "sc": "247"}, {
    "x": 1510502400000,
    "y": 18,
    "sc": "247"
}, {"x": 1510588800000, "y": 9, "sc": "247"}, {"x": 1510675200000, "y": 7, "sc": "247"}, {
    "x": 1510761600000,
    "y": 12,
    "sc": "247"
}, {"x": 1510848000000, "y": 13, "sc": "248"}, {"x": 1511107200000, "y": 13, "sc": "247"}, {
    "x": 1511193600000,
    "y": 13,
    "sc": "247"
}, {"x": 1511280000000, "y": 11, "sc": "247"}, {"x": 1511366400000, "y": 4, "sc": "248"}, {
    "x": 1511452800000,
    "y": 14,
    "sc": "249"
}, {"x": 1511712000000, "y": 11, "sc": "248"}, {"x": 1511798400000, "y": 6, "sc": "248"}, {
    "x": 1511884800000,
    "y": 6,
    "sc": "248"
}, {"x": 1511971200000, "y": 5, "sc": "248"}, {"x": 1512057600000, "y": 2, "sc": "250"}, {
    "x": 1512316800000,
    "y": 7,
    "sc": "249"
}, {"x": 1512403200000, "y": 16, "sc": "249"}, {"x": 1512489600000, "y": 8, "sc": "252"}, {
    "x": 1512576000000,
    "y": 12,
    "sc": "252"
}, {"x": 1512662400000, "y": 15, "sc": "253"}, {"x": 1512921600000, "y": 10, "sc": "252"}, {
    "x": 1513008000000,
    "y": 9,
    "sc": "252"
}, {"x": 1513094400000, "y": 12, "sc": "253"}, {"x": 1513180800000, "y": 12, "sc": "253"}, {
    "x": 1513267200000,
    "y": 10,
    "sc": "260"
}, {"x": 1513526400000, "y": 18, "sc": "259"}, {"x": 1513612800000, "y": 16, "sc": "259"}, {
    "x": 1513699200000,
    "y": 18,
    "sc": "260"
}, {"x": 1513785600000, "y": 13, "sc": "260"}, {"x": 1513872000000, "y": 10, "sc": "261"}, {
    "x": 1514131200000,
    "y": 12,
    "sc": "256"
}, {"x": 1514217600000, "y": 13, "sc": "256"}, {"x": 1514304000000, "y": 11, "sc": "260"}, {
    "x": 1514390400000,
    "y": 22,
    "sc": "261"
}, {"x": 1514476800000, "y": 18, "sc": "263"}, {"x": 1514649600000, "y": 18, "sc": "263"}, {
    "x": 1514822400000,
    "y": 21,
    "sc": "262"
}, {"x": 1514908800000, "y": 22, "sc": "262"}, {"x": 1514995200000, "y": 32, "sc": "262"}, {
    "x": 1515081600000,
    "y": 29,
    "sc": "263"
}, {"x": 1515340800000, "y": 35, "sc": "262"}, {"x": 1515427200000, "y": 40, "sc": "262"}, {
    "x": 1515513600000,
    "y": 50,
    "sc": "262"
}, {"x": 1515600000000, "y": 49, "sc": "262"}, {"x": 1515686400000, "y": 46, "sc": "263"}, {
    "x": 1515945600000,
    "y": 47,
    "sc": "262"
}, {"x": 1516032000000, "y": 62, "sc": "262"}, {"x": 1516118400000, "y": 66, "sc": "262"}, {
    "x": 1516204800000,
    "y": 74,
    "sc": "262"
}, {"x": 1516291200000, "y": 75, "sc": "263"}, {"x": 1516550400000, "y": 75, "sc": "262"}, {
    "x": 1516636800000,
    "y": 81,
    "sc": "262"
}, {"x": 1516723200000, "y": 67, "sc": "262"}, {"x": 1516809600000, "y": 72, "sc": "263"}, {
    "x": 1516896000000,
    "y": 60,
    "sc": "263"
}, {"x": 1517155200000, "y": 57, "sc": "263"}, {"x": 1517241600000, "y": 41, "sc": "263"}, {
    "x": 1517328000000,
    "y": 68,
    "sc": "263"
}, {"x": 1517414400000, "y": 60, "sc": "263"}, {"x": 1517500800000, "y": 68, "sc": "263"}, {
    "x": 1517760000000,
    "y": 70,
    "sc": "263"
}, {"x": 1517846400000, "y": 113, "sc": "264"}, {"x": 1517932800000, "y": 89, "sc": "264"}, {
    "x": 1518019200000,
    "y": 56,
    "sc": "264"
}, {"x": 1518105600000, "y": 29, "sc": "271"}, {"x": 1518364800000, "y": 24, "sc": "271"}, {
    "x": 1518451200000,
    "y": 29,
    "sc": "266"
}, {"x": 1518537600000, "y": 34, "sc": "268"}, {"x": 1519228800000, "y": 68, "sc": "271"}, {
    "x": 1519315200000,
    "y": 64,
    "sc": "271"
}, {"x": 1519574400000, "y": 41, "sc": "271"}, {"x": 1519660800000, "y": 13, "sc": "271"}, {
    "x": 1519747200000,
    "y": 10,
    "sc": "272"
}, {"x": 1519833600000, "y": 17, "sc": "273"}, {"x": 1519920000000, "y": 25, "sc": "273"}, {
    "x": 1520179200000,
    "y": 7,
    "sc": "277"
}, {"x": 1520265600000, "y": 11, "sc": "277"}, {"x": 1520352000000, "y": 12, "sc": "277"}, {
    "x": 1520438400000,
    "y": 22,
    "sc": "277"
}, {"x": 1520524800000, "y": 20, "sc": "277"}, {"x": 1520784000000, "y": 35, "sc": "278"}, {
    "x": 1520870400000,
    "y": 32,
    "sc": "278"
}, {"x": 1520956800000, "y": 81, "sc": "280"}, {"x": 1521043200000, "y": 75, "sc": "280"}, {
    "x": 1521129600000,
    "y": 78,
    "sc": "280"
}, {"x": 1521388800000, "y": 36, "sc": "280"}, {"x": 1521475200000, "y": 37, "sc": "280"}, {
    "x": 1521561600000,
    "y": 58,
    "sc": "280"
}, {"x": 1521648000000, "y": 49, "sc": "281"}, {"x": 1521734400000, "y": 59, "sc": "281"}, {
    "x": 1521993600000,
    "y": 39,
    "sc": "281"
}, {"x": 1522080000000, "y": 37, "sc": "282"}, {"x": 1522166400000, "y": 37, "sc": "284"}, {
    "x": 1522252800000,
    "y": 46,
    "sc": "284"
}, {"x": 1522339200000, "y": 49, "sc": "281"}, {"x": 1522598400000, "y": 40, "sc": "281"}, {
    "x": 1522684800000,
    "y": 37,
    "sc": "281"
}, {"x": 1522771200000, "y": 33, "sc": "282"}, {"x": 1523203200000, "y": 31, "sc": "284"}, {
    "x": 1523289600000,
    "y": 36,
    "sc": "284"
}, {"x": 1523376000000, "y": 36, "sc": "284"}, {"x": 1523462400000, "y": 37, "sc": "284"}, {
    "x": 1523548800000,
    "y": 34,
    "sc": "284"
}, {"x": 1523808000000, "y": 30, "sc": "284"}, {"x": 1523894400000, "y": 26, "sc": "284"}, {
    "x": 1523980800000,
    "y": 27,
    "sc": "284"
}, {"x": 1524067200000, "y": 26, "sc": "286"}, {"x": 1524153600000, "y": 25, "sc": "286"}, {
    "x": 1524412800000,
    "y": 40,
    "sc": "286"
}, {"x": 1524499200000, "y": 37, "sc": "287"}, {"x": 1524585600000, "y": 35, "sc": "287"}, {
    "x": 1524672000000,
    "y": 39,
    "sc": "285"
}, {"x": 1524758400000, "y": 37, "sc": "285"}, {"x": 1525190400000, "y": 32, "sc": "289"}, {
    "x": 1525276800000,
    "y": 31,
    "sc": "288"
}, {"x": 1525363200000, "y": 31, "sc": "288"}, {"x": 1525622400000, "y": 34, "sc": "289"}, {
    "x": 1525708800000,
    "y": 35,
    "sc": "292"
}, {"x": 1525795200000, "y": 43, "sc": "292"}, {"x": 1525881600000, "y": 39, "sc": "292"}, {
    "x": 1525968000000,
    "y": 43,
    "sc": "294"
}, {"x": 1526227200000, "y": 37, "sc": "295"}, {"x": 1526313600000, "y": 36, "sc": "295"}, {
    "x": 1526400000000,
    "y": 37,
    "sc": "295"
}, {"x": 1526486400000, "y": 37, "sc": "295"}, {"x": 1526572800000, "y": 36, "sc": "295"}, {
    "x": 1526832000000,
    "y": 40,
    "sc": "295"
}, {"x": 1526918400000, "y": 43, "sc": "293"}, {"x": 1527004800000, "y": 40, "sc": "295"}, {
    "x": 1527091200000,
    "y": 41,
    "sc": "295"
}, {"x": 1527177600000, "y": 40, "sc": "295"}, {"x": 1527436800000, "y": 56, "sc": "295"}, {
    "x": 1527523200000,
    "y": 48,
    "sc": "295"
}, {"x": 1527609600000, "y": 44, "sc": "295"}, {"x": 1527696000000, "y": 38, "sc": "295"}, {
    "x": 1527782400000,
    "y": 37,
    "sc": "295"
}, {"x": 1528041600000, "y": 39, "sc": "296"}, {"x": 1528128000000, "y": 43, "sc": "296"}, {
    "x": 1528214400000,
    "y": 49,
    "sc": "296"
}, {"x": 1528300800000, "y": 47, "sc": "297"}, {"x": 1528387200000, "y": 50, "sc": "297"}, {
    "x": 1528646400000,
    "y": 59,
    "sc": "297"
}, {"x": 1528732800000, "y": 59, "sc": "297"}, {"x": 1528819200000, "y": 61, "sc": "297"}, {
    "x": 1528905600000,
    "y": 53,
    "sc": "299"
}, {"x": 1528992000000, "y": 60, "sc": "299"}, {"x": 1529337600000, "y": 75, "sc": "299"}, {
    "x": 1529424000000,
    "y": 72,
    "sc": "299"
}, {"x": 1529510400000, "y": 87, "sc": "301"}, {"x": 1529596800000, "y": 93, "sc": "301"}, {
    "x": 1529856000000,
    "y": 84,
    "sc": "302"
}, {"x": 1529942400000, "y": 103, "sc": "302"}, {"x": 1530028800000, "y": 130, "sc": "302"}, {
    "x": 1530115200000,
    "y": 129,
    "sc": "302"
}, {"x": 1530201600000, "y": 101, "sc": "302"}, {"x": 1530460800000, "y": 135, "sc": "302"}, {
    "x": 1530547200000,
    "y": 137,
    "sc": "306"
}, {"x": 1530633600000, "y": 139, "sc": "308"}, {"x": 1530720000000, "y": 135, "sc": "308"}, {
    "x": 1530806400000,
    "y": 120,
    "sc": "308"
}, {"x": 1531065600000, "y": 122, "sc": "308"}, {"x": 1531152000000, "y": 109, "sc": "308"}, {
    "x": 1531238400000,
    "y": 113,
    "sc": "308"
}, {"x": 1531324800000, "y": 123, "sc": "308"}, {"x": 1531411200000, "y": 136, "sc": "308"}, {
    "x": 1531670400000,
    "y": 167,
    "sc": "308"
}, {"x": 1531756800000, "y": 156, "sc": "308"}, {"x": 1531843200000, "y": 154, "sc": "309"}, {
    "x": 1531929600000,
    "y": 123,
    "sc": "309"
}, {"x": 1532016000000, "y": 148, "sc": "309"}, {"x": 1532275200000, "y": 122, "sc": "311"}, {
    "x": 1532361600000,
    "y": 105,
    "sc": "311"
}, {"x": 1532448000000, "y": 128, "sc": "313"}, {"x": 1532534400000, "y": 129, "sc": "313"}, {
    "x": 1532620800000,
    "y": 140,
    "sc": "313"
}, {"x": 1532880000000, "y": 174, "sc": "313"}, {"x": 1532966400000, "y": 178, "sc": "313"}, {
    "x": 1533052800000,
    "y": 147,
    "sc": "313"
}, {"x": 1533139200000, "y": 166, "sc": "313"}, {"x": 1533225600000, "y": 179, "sc": "313"}, {
    "x": 1533484800000,
    "y": 158,
    "sc": "313"
}, {"x": 1533571200000, "y": 159, "sc": "313"}, {"x": 1533657600000, "y": 180, "sc": "315"}, {
    "x": 1533744000000,
    "y": 189,
    "sc": "315"
}, {"x": 1533830400000, "y": 182, "sc": "315"}, {"x": 1534089600000, "y": 203, "sc": "317"}, {
    "x": 1534176000000,
    "y": 202,
    "sc": "317"
}, {"x": 1534262400000, "y": 219, "sc": "317"}, {"x": 1534348800000, "y": 218, "sc": "317"}, {
    "x": 1534435200000,
    "y": 216,
    "sc": "319"
}, {"x": 1534694400000, "y": 236, "sc": "319"}, {"x": 1534780800000, "y": 233, "sc": "319"}, {
    "x": 1534867200000,
    "y": 231,
    "sc": "319"
}, {"x": 1534953600000, "y": 228, "sc": "319"}, {"x": 1535040000000, "y": 236, "sc": "319"}, {
    "x": 1535299200000,
    "y": 251,
    "sc": "319"
}, {"x": 1535385600000, "y": 241, "sc": "319"}, {"x": 1535472000000, "y": 265, "sc": "319"}, {
    "x": 1535558400000,
    "y": 272,
    "sc": "320"
}, {"x": 1535644800000, "y": 286, "sc": "321"}, {"x": 1535904000000, "y": 283, "sc": "321"}, {
    "x": 1535990400000,
    "y": 286,
    "sc": "321"
}, {"x": 1536076800000, "y": 287, "sc": "321"}, {"x": 1536163200000, "y": 280, "sc": "321"}, {
    "x": 1536249600000,
    "y": 281,
    "sc": "321"
}, {"x": 1536508800000, "y": 288, "sc": "321"}, {"x": 1536595200000, "y": 285, "sc": "321"}, {
    "x": 1536681600000,
    "y": 278,
    "sc": "321"
}, {"x": 1536768000000, "y": 267, "sc": "322"}, {"x": 1536854400000, "y": 258, "sc": "322"}, {
    "x": 1537113600000,
    "y": 258,
    "sc": "322"
}, {"x": 1537200000000, "y": 257, "sc": "322"}, {"x": 1537286400000, "y": 266, "sc": "322"}, {
    "x": 1537372800000,
    "y": 270,
    "sc": "318"
}, {"x": 1537459200000, "y": 265, "sc": "318"}, {"x": 1537804800000, "y": 247, "sc": "317"}, {
    "x": 1537891200000,
    "y": 253,
    "sc": "324"
}, {"x": 1537977600000, "y": 236, "sc": "318"}, {"x": 1538064000000, "y": 227, "sc": "322"}, {
    "x": 1538928000000,
    "y": 240,
    "sc": "324"
}, {"x": 1539014400000, "y": 236, "sc": "324"}, {"x": 1539100800000, "y": 201, "sc": "324"}, {
    "x": 1539187200000,
    "y": 193,
    "sc": "324"
}, {"x": 1539273600000, "y": 195, "sc": "324"}, {"x": 1539532800000, "y": 188, "sc": "324"}, {
    "x": 1539619200000,
    "y": 197,
    "sc": "324"
}, {"x": 1539705600000, "y": 193, "sc": "317"}, {"x": 1539792000000, "y": 189, "sc": "324"}, {
    "x": 1539878400000,
    "y": 218,
    "sc": "324"
}, {"x": 1540137600000, "y": 202, "sc": "324"}, {"x": 1540224000000, "y": 217, "sc": "324"}, {
    "x": 1540310400000,
    "y": 221,
    "sc": "324"
}, {"x": 1540396800000, "y": 220, "sc": "324"}, {"x": 1540483200000, "y": 220, "sc": "324"}, {
    "x": 1540742400000,
    "y": 203,
    "sc": "324"
}, {"x": 1540828800000, "y": 189, "sc": "326"}, {"x": 1540915200000, "y": 202, "sc": "326"}, {
    "x": 1541001600000,
    "y": 212,
    "sc": "326"
}, {"x": 1541088000000, "y": 209, "sc": "326"}, {"x": 1541347200000, "y": 224, "sc": "326"}, {
    "x": 1541433600000,
    "y": 241,
    "sc": "326"
}, {"x": 1541520000000, "y": 255, "sc": "327"}, {"x": 1541606400000, "y": 243, "sc": "327"}, {
    "x": 1541692800000,
    "y": 221,
    "sc": "327"
}, {"x": 1541952000000, "y": 213, "sc": "327"}, {"x": 1542038400000, "y": 200, "sc": "327"}, {
    "x": 1542124800000,
    "y": 210,
    "sc": "327"
}, {"x": 1542211200000, "y": 204, "sc": "329"}, {"x": 1542297600000, "y": 174, "sc": "329"}, {
    "x": 1542556800000,
    "y": 185,
    "sc": "329"
}, {"x": 1542643200000, "y": 184, "sc": "329"}, {"x": 1542729600000, "y": 186, "sc": "329"}, {
    "x": 1542816000000,
    "y": 181,
    "sc": "329"
}, {"x": 1542902400000, "y": 188, "sc": "329"}, {"x": 1543161600000, "y": 185, "sc": "329"}, {
    "x": 1543248000000,
    "y": 181,
    "sc": "329"
}, {"x": 1543334400000, "y": 174, "sc": "329"}, {"x": 1543420800000, "y": 157, "sc": "329"}, {
    "x": 1543507200000,
    "y": 158,
    "sc": "329"
}, {"x": 1543766400000, "y": 168, "sc": "329"}, {"x": 1543852800000, "y": 165, "sc": "329"}, {
    "x": 1543939200000,
    "y": 177,
    "sc": "329"
}, {"x": 1544025600000, "y": 163, "sc": "331"}, {"x": 1544112000000, "y": 137, "sc": "331"}, {
    "x": 1544371200000,
    "y": 83,
    "sc": "331"
}, {"x": 1544457600000, "y": 82, "sc": "331"}, {"x": 1544544000000, "y": 116, "sc": "331"}, {
    "x": 1544630400000,
    "y": 141,
    "sc": "331"
}, {"x": 1544716800000, "y": 150, "sc": "332"}, {"x": 1544976000000, "y": 148, "sc": "332"}, {
    "x": 1545062400000,
    "y": 174,
    "sc": "331"
}, {"x": 1545148800000, "y": 156, "sc": "331"}, {"x": 1545235200000, "y": 141, "sc": "332"}, {
    "x": 1545321600000,
    "y": 135,
    "sc": "332"
}, {"x": 1545580800000, "y": 132, "sc": "331"}, {"x": 1545667200000, "y": 145, "sc": "327"}, {
    "x": 1545753600000,
    "y": 142,
    "sc": "329"
}, {"x": 1545840000000, "y": 167, "sc": "331"}, {"x": 1545926400000, "y": 207, "sc": "331"}, {
    "x": 1546358400000,
    "y": 227,
    "sc": "334"
}, {"x": 1546444800000, "y": 220, "sc": "334"}, {"x": 1546531200000, "y": 234, "sc": "334"}, {
    "x": 1546790400000,
    "y": 205,
    "sc": "333"
}, {"x": 1546876800000, "y": 203, "sc": "333"}, {"x": 1546963200000, "y": 204, "sc": "333"}, {
    "x": 1547049600000,
    "y": 240,
    "sc": "333"
}, {"x": 1547136000000, "y": 190, "sc": "333"}, {"x": 1547395200000, "y": 175, "sc": "333"}, {
    "x": 1547481600000,
    "y": 195,
    "sc": "333"
}, {"x": 1547568000000, "y": 183, "sc": "333"}, {"x": 1547654400000, "y": 215, "sc": "333"}, {
    "x": 1547740800000,
    "y": 253,
    "sc": "333"
}, {"x": 1548000000000, "y": 243, "sc": "333"}, {"x": 1548086400000, "y": 233, "sc": "335"}, {
    "x": 1548172800000,
    "y": 228,
    "sc": "335"
}, {"x": 1548259200000, "y": 221, "sc": "335"}, {"x": 1548345600000, "y": 196, "sc": "335"}, {
    "x": 1548604800000,
    "y": 199,
    "sc": "335"
}, {"x": 1548691200000, "y": 251, "sc": "335"}, {"x": 1548777600000, "y": 247, "sc": "335"}, {
    "x": 1548864000000,
    "y": 245,
    "sc": "331"
}, {"x": 1548950400000, "y": 257, "sc": "331"}, {"x": 1549814400000, "y": 252, "sc": "336"}, {
    "x": 1549900800000,
    "y": 219,
    "sc": "336"
}, {"x": 1549987200000, "y": 228, "sc": "336"}, {"x": 1550073600000, "y": 234, "sc": "339"}, {
    "x": 1550160000000,
    "y": 233,
    "sc": "339"
}, {"x": 1550419200000, "y": 269, "sc": "339"}, {"x": 1550505600000, "y": 247, "sc": "339"}, {
    "x": 1550592000000,
    "y": 247,
    "sc": "339"
}, {"x": 1550678400000, "y": 248, "sc": "339"}, {"x": 1550764800000, "y": 236, "sc": "340"}, {
    "x": 1551024000000,
    "y": 224,
    "sc": "341"
}, {"x": 1551110400000, "y": 213, "sc": "341"}, {"x": 1551196800000, "y": 209, "sc": "341"}, {
    "x": 1551283200000,
    "y": 231,
    "sc": "344"
}, {"x": 1551369600000, "y": 251, "sc": "344"}, {"x": 1551628800000, "y": 259, "sc": "344"}, {
    "x": 1551715200000,
    "y": 247,
    "sc": "344"
}, {"x": 1551801600000, "y": 243, "sc": "344"}, {"x": 1551888000000, "y": 224, "sc": "344"}, {
    "x": 1551974400000,
    "y": 199,
    "sc": "344"
}, {"x": 1552233600000, "y": 209, "sc": "344"}, {"x": 1552320000000, "y": 201, "sc": "344"}, {
    "x": 1552406400000,
    "y": 183,
    "sc": "344"
}, {"x": 1552492800000, "y": 200, "sc": "344"}, {"x": 1552579200000, "y": 207, "sc": "344"}, {
    "x": 1552838400000,
    "y": 205,
    "sc": "344"
}, {"x": 1552924800000, "y": 208, "sc": "343"}, {"x": 1553011200000, "y": 222, "sc": "343"}, {
    "x": 1553097600000,
    "y": 216,
    "sc": "343"
}, {"x": 1553184000000, "y": 216, "sc": "343"}, {"x": 1553443200000, "y": 222, "sc": "343"}, {
    "x": 1553529600000,
    "y": 224,
    "sc": "345"
}, {"x": 1553616000000, "y": 184, "sc": "345"}, {"x": 1553702400000, "y": 165, "sc": "345"}, {
    "x": 1553788800000,
    "y": 184,
    "sc": "345"
}, {"x": 1554048000000, "y": 183, "sc": "345"}, {"x": 1554134400000, "y": 171, "sc": "345"}, {
    "x": 1554220800000,
    "y": 145,
    "sc": "345"
}, {"x": 1554307200000, "y": 143, "sc": "345"}, {"x": 1554652800000, "y": 162, "sc": "345"}, {
    "x": 1554739200000,
    "y": 178,
    "sc": "345"
}, {"x": 1554825600000, "y": 138, "sc": "345"}, {"x": 1554912000000, "y": 152, "sc": "345"}, {
    "x": 1554998400000,
    "y": 136,
    "sc": "345"
}, {"x": 1555257600000, "y": 112, "sc": "345"}, {"x": 1555344000000, "y": 83, "sc": "345"}, {
    "x": 1555430400000,
    "y": 87,
    "sc": "347"
}, {"x": 1555516800000, "y": 58, "sc": "347"}, {"x": 1555603200000, "y": 55, "sc": "341"}, {
    "x": 1555862400000,
    "y": 75,
    "sc": "341"
}, {"x": 1555948800000, "y": 84, "sc": "347"}, {"x": 1556035200000, "y": 88, "sc": "347"}, {
    "x": 1556121600000,
    "y": 100,
    "sc": "347"
}, {"x": 1556208000000, "y": 100, "sc": "347"}, {"x": 1556467200000, "y": 92, "sc": "344"}, {
    "x": 1556553600000,
    "y": 94,
    "sc": "346"
}, {"x": 1557072000000, "y": 88, "sc": "350"}, {"x": 1557158400000, "y": 96, "sc": "350"}, {
    "x": 1557244800000,
    "y": 83,
    "sc": "350"
}, {"x": 1557331200000, "y": 89, "sc": "350"}, {"x": 1557417600000, "y": 94, "sc": "350"}, {
    "x": 1557676800000,
    "y": 103,
    "sc": "344"
}, {"x": 1557763200000, "y": 95, "sc": "350"}, {"x": 1557849600000, "y": 103, "sc": "350"}, {
    "x": 1557936000000,
    "y": 97,
    "sc": "350"
}, {"x": 1558022400000, "y": 96, "sc": "350"}, {"x": 1558281600000, "y": 81, "sc": "351"}, {
    "x": 1558368000000,
    "y": 79,
    "sc": "351"
}, {"x": 1558454400000, "y": 79, "sc": "351"}, {"x": 1558540800000, "y": 83, "sc": "351"}, {
    "x": 1558627200000,
    "y": 84,
    "sc": "351"
}, {"x": 1558886400000, "y": 89, "sc": "351"}, {"x": 1558972800000, "y": 100, "sc": "354"}, {
    "x": 1559059200000,
    "y": 100,
    "sc": "354"
}, {"x": 1559145600000, "y": 104, "sc": "354"}, {"x": 1559232000000, "y": 108, "sc": "354"}, {
    "x": 1559491200000,
    "y": 81,
    "sc": "354"
}, {"x": 1559577600000, "y": 75, "sc": "354"}, {"x": 1559664000000, "y": 77, "sc": "357"}, {
    "x": 1559750400000,
    "y": 90,
    "sc": "357"
}, {"x": 1560096000000, "y": 123, "sc": "357"}, {"x": 1560182400000, "y": 141, "sc": "357"}, {
    "x": 1560268800000,
    "y": 140,
    "sc": "357"
}, {"x": 1560355200000, "y": 145, "sc": "359"}, {"x": 1560441600000, "y": 131, "sc": "359"}, {
    "x": 1560700800000,
    "y": 123,
    "sc": "359"
}, {"x": 1560787200000, "y": 127, "sc": "359"}, {"x": 1560873600000, "y": 123, "sc": "359"}, {
    "x": 1560960000000,
    "y": 137,
    "sc": "360"
}, {"x": 1561046400000, "y": 163, "sc": "360"}, {"x": 1561305600000, "y": 176, "sc": "360"}, {
    "x": 1561392000000,
    "y": 174,
    "sc": "360"
}, {"x": 1561478400000, "y": 165, "sc": "361"}, {"x": 1561564800000, "y": 168, "sc": "361"}, {
    "x": 1561651200000,
    "y": 177,
    "sc": "361"
}, {"x": 1561910400000, "y": 164, "sc": "355"}, {"x": 1561996800000, "y": 164, "sc": "361"}, {
    "x": 1562083200000,
    "y": 194,
    "sc": "364"
}, {"x": 1562169600000, "y": 173, "sc": "364"}, {"x": 1562256000000, "y": 170, "sc": "364"}, {
    "x": 1562515200000,
    "y": 172,
    "sc": "364"
}, {"x": 1562601600000, "y": 166, "sc": "364"}, {"x": 1562688000000, "y": 206, "sc": "364"}, {
    "x": 1562774400000,
    "y": 202,
    "sc": "364"
}, {"x": 1562860800000, "y": 226, "sc": "364"}, {"x": 1563120000000, "y": 263, "sc": "364"}, {
    "x": 1563206400000,
    "y": 257,
    "sc": "364"
}, {"x": 1563292800000, "y": 258, "sc": "364"}, {"x": 1563379200000, "y": 275, "sc": "364"}, {
    "x": 1563465600000,
    "y": 284,
    "sc": "364"
}, {"x": 1563724800000, "y": 277, "sc": "364"}, {"x": 1563811200000, "y": 274, "sc": "364"}, {
    "x": 1563897600000,
    "y": 259,
    "sc": "364"
}, {"x": 1563984000000, "y": 278, "sc": "366"}, {"x": 1564070400000, "y": 273, "sc": "366"}, {
    "x": 1564329600000,
    "y": 277,
    "sc": "366"
}, {"x": 1564416000000, "y": 281, "sc": "366"}, {"x": 1564502400000, "y": 275, "sc": "366"}, {
    "x": 1564588800000,
    "y": 284,
    "sc": "366"
}, {"x": 1564675200000, "y": 285, "sc": "366"}, {"x": 1564934400000, "y": 282, "sc": "366"}, {
    "x": 1565020800000,
    "y": 268,
    "sc": "368"
}, {"x": 1565107200000, "y": 273, "sc": "368"}, {"x": 1565193600000, "y": 294, "sc": "368"}, {
    "x": 1565280000000,
    "y": 283,
    "sc": "368"
}, {"x": 1565539200000, "y": 258, "sc": "368"}, {"x": 1565625600000, "y": 259, "sc": "368"}, {
    "x": 1565712000000,
    "y": 267,
    "sc": "370"
}, {"x": 1565798400000, "y": 276, "sc": "370"}, {"x": 1565884800000, "y": 260, "sc": "370"}, {
    "x": 1566144000000,
    "y": 250,
    "sc": "370"
}, {"x": 1566230400000, "y": 246, "sc": "370"}, {"x": 1566316800000, "y": 236, "sc": "370"}, {
    "x": 1566403200000,
    "y": 243,
    "sc": "370"
}, {"x": 1566489600000, "y": 244, "sc": "370"}, {"x": 1566748800000, "y": 223, "sc": "370"}, {
    "x": 1566835200000,
    "y": 226,
    "sc": "371"
}, {"x": 1566921600000, "y": 218, "sc": "371"}, {"x": 1567008000000, "y": 204, "sc": "372"}, {
    "x": 1567094400000,
    "y": 190,
    "sc": "373"
}, {"x": 1567353600000, "y": 180, "sc": "373"}, {"x": 1567440000000, "y": 174, "sc": "373"}, {
    "x": 1567526400000,
    "y": 191,
    "sc": "373"
}, {"x": 1567612800000, "y": 186, "sc": "375"}, {"x": 1567699200000, "y": 191, "sc": "377"}, {
    "x": 1567958400000,
    "y": 174,
    "sc": "377"
}, {"x": 1568044800000, "y": 159, "sc": "377"}, {"x": 1568131200000, "y": 165, "sc": "369"}, {
    "x": 1568217600000,
    "y": 168,
    "sc": "371"
}, {"x": 1568563200000, "y": 179, "sc": "377"}, {"x": 1568649600000, "y": 188, "sc": "377"}, {
    "x": 1568736000000,
    "y": 190,
    "sc": "377"
}, {"x": 1568822400000, "y": 181, "sc": "378"}, {"x": 1568908800000, "y": 166, "sc": "378"}, {
    "x": 1569168000000,
    "y": 172,
    "sc": "378"
}, {"x": 1569254400000, "y": 169, "sc": "378"}, {"x": 1569340800000, "y": 170, "sc": "378"}, {
    "x": 1569427200000,
    "y": 170,
    "sc": "378"
}, {"x": 1569513600000, "y": 163, "sc": "372"}, {"x": 1569772800000, "y": 163, "sc": "372"}, {
    "x": 1570464000000,
    "y": 194,
    "sc": "381"
}, {"x": 1570550400000, "y": 181, "sc": "383"}, {"x": 1570636800000, "y": 185, "sc": "383"}, {
    "x": 1570723200000,
    "y": 191,
    "sc": "383"
}, {"x": 1570982400000, "y": 184, "sc": "383"}, {"x": 1571068800000, "y": 184, "sc": "382"}, {
    "x": 1571155200000,
    "y": 198,
    "sc": "382"
}, {"x": 1571241600000, "y": 198, "sc": "382"}, {"x": 1571328000000, "y": 190, "sc": "383"}, {
    "x": 1571587200000,
    "y": 176,
    "sc": "382"
}, {"x": 1571673600000, "y": 195, "sc": "382"}, {"x": 1571760000000, "y": 211, "sc": "382"}, {
    "x": 1571846400000,
    "y": 225,
    "sc": "382"
}, {"x": 1571932800000, "y": 220, "sc": "383"}, {"x": 1572192000000, "y": 232, "sc": "382"}, {
    "x": 1572278400000,
    "y": 223,
    "sc": "382"
}, {"x": 1572364800000, "y": 208, "sc": "382"}, {"x": 1572451200000, "y": 204, "sc": "384"}, {
    "x": 1572537600000,
    "y": 192,
    "sc": "386"
}, {"x": 1572796800000, "y": 185, "sc": "383"}, {"x": 1572883200000, "y": 179, "sc": "383"}, {
    "x": 1572969600000,
    "y": 169,
    "sc": "383"
}, {"x": 1573056000000, "y": 154, "sc": "383"}, {"x": 1573142400000, "y": 150, "sc": "384"}, {
    "x": 1573401600000,
    "y": 157,
    "sc": "383"
}, {"x": 1573488000000, "y": 178, "sc": "383"}, {"x": 1573574400000, "y": 186, "sc": "383"}, {
    "x": 1573660800000,
    "y": 168,
    "sc": "383"
}, {"x": 1573747200000, "y": 143, "sc": "384"}, {"x": 1574006400000, "y": 177, "sc": "383"}, {
    "x": 1574092800000,
    "y": 181,
    "sc": "383"
}, {"x": 1574179200000, "y": 181, "sc": "383"}, {"x": 1574265600000, "y": 162, "sc": "383"}, {
    "x": 1574352000000,
    "y": 144,
    "sc": "384"
}, {"x": 1574611200000, "y": 126, "sc": "383"}, {"x": 1574697600000, "y": 138, "sc": "383"}, {
    "x": 1574784000000,
    "y": 140,
    "sc": "383"
}, {"x": 1574870400000, "y": 139, "sc": "383"}, {"x": 1574956800000, "y": 140, "sc": "382"}, {
    "x": 1575216000000,
    "y": 161,
    "sc": "382"
}, {"x": 1575302400000, "y": 181, "sc": "382"}, {"x": 1575388800000, "y": 148, "sc": "384"}, {
    "x": 1575475200000,
    "y": 176,
    "sc": "384"
}, {"x": 1575561600000, "y": 142, "sc": "385"}, {"x": 1575820800000, "y": 142, "sc": "384"}, {
    "x": 1575907200000,
    "y": 155,
    "sc": "384"
}, {"x": 1575993600000, "y": 159, "sc": "386"}, {"x": 1576080000000, "y": 159, "sc": "386"}, {
    "x": 1576166400000,
    "y": 170,
    "sc": "387"
}, {"x": 1576425600000, "y": 141, "sc": "386"}, {"x": 1576512000000, "y": 112, "sc": "387"}, {
    "x": 1576598400000,
    "y": 86,
    "sc": "388"
}, {"x": 1576684800000, "y": 114, "sc": "388"}, {"x": 1576771200000, "y": 96, "sc": "389"}, {
    "x": 1577030400000,
    "y": 77,
    "sc": "388"
}, {"x": 1577116800000, "y": 78, "sc": "388"}, {"x": 1577203200000, "y": 81, "sc": "382"}, {
    "x": 1577289600000,
    "y": 81,
    "sc": "384"
}, {"x": 1577376000000, "y": 80, "sc": "392"}, {"x": 1577635200000, "y": 78, "sc": "391"}, {
    "x": 1577721600000,
    "y": 76,
    "sc": "392"
}, {"x": 1577894400000, "y": 92, "sc": "391"}, {"x": 1577980800000, "y": 95, "sc": "392"}, {
    "x": 1578240000000,
    "y": 91,
    "sc": "391"
}, {"x": 1578326400000, "y": 76, "sc": "391"}, {"x": 1578412800000, "y": 74, "sc": "391"}, {
    "x": 1578499200000,
    "y": 85,
    "sc": "391"
}, {"x": 1578585600000, "y": 78, "sc": "392"}, {"x": 1578844800000, "y": 79, "sc": "391"}, {
    "x": 1578931200000,
    "y": 82,
    "sc": "391"
}, {"x": 1579017600000, "y": 92, "sc": "392"}, {"x": 1579104000000, "y": 95, "sc": "392"}, {
    "x": 1579190400000,
    "y": 91,
    "sc": "392"
}, {"x": 1579449600000, "y": 106, "sc": "392"}, {"x": 1579536000000, "y": 116, "sc": "392"}, {
    "x": 1579622400000,
    "y": 112,
    "sc": "386"
}, {"x": 1579708800000, "y": 106, "sc": "386"}, {"x": 1580659200000, "y": 108, "sc": "393"}, {
    "x": 1580745600000,
    "y": 108,
    "sc": "393"
}, {"x": 1580832000000, "y": 120, "sc": "393"}, {"x": 1580918400000, "y": 128, "sc": "393"}, {
    "x": 1581004800000,
    "y": 120,
    "sc": "393"
}, {"x": 1581264000000, "y": 122, "sc": "393"}, {"x": 1581350400000, "y": 123, "sc": "393"}, {
    "x": 1581436800000,
    "y": 125,
    "sc": "393"
}, {"x": 1581523200000, "y": 118, "sc": "393"}, {"x": 1581609600000, "y": 119, "sc": "393"}, {
    "x": 1581868800000,
    "y": 122,
    "sc": "393"
}, {"x": 1581955200000, "y": 122, "sc": "393"}, {"x": 1582041600000, "y": 116, "sc": "393"}, {
    "x": 1582128000000,
    "y": 117,
    "sc": "392"
}, {"x": 1582214400000, "y": 125, "sc": "393"}, {"x": 1582473600000, "y": 137, "sc": "392"}, {
    "x": 1582560000000,
    "y": 144,
    "sc": "392"
}, {"x": 1582646400000, "y": 147, "sc": "392"}, {"x": 1582732800000, "y": 137, "sc": "392"}, {
    "x": 1582819200000,
    "y": 138,
    "sc": "393"
}, {"x": 1583078400000, "y": 142, "sc": "392"}, {"x": 1583164800000, "y": 149, "sc": "392"}, {
    "x": 1583251200000,
    "y": 129,
    "sc": "392"
}, {"x": 1583337600000, "y": 111, "sc": "392"}, {"x": 1583424000000, "y": 129, "sc": "393"}, {
    "x": 1583683200000,
    "y": 126,
    "sc": "392"
}, {"x": 1583769600000, "y": 144, "sc": "393"}, {"x": 1583856000000, "y": 113, "sc": "393"}, {
    "x": 1583942400000,
    "y": 120,
    "sc": "393"
}, {"x": 1584028800000, "y": 125, "sc": "394"}, {"x": 1584288000000, "y": 120, "sc": "393"}, {
    "x": 1584374400000,
    "y": 130,
    "sc": "398"
}, {"x": 1584460800000, "y": 137, "sc": "400"}, {"x": 1584547200000, "y": 144, "sc": "402"}, {
    "x": 1584633600000,
    "y": 145,
    "sc": "403"
}, {"x": 1584892800000, "y": 137, "sc": "402"}, {"x": 1584979200000, "y": 144, "sc": "402"}, {
    "x": 1585065600000,
    "y": 138,
    "sc": "405"
}, {"x": 1585152000000, "y": 137, "sc": "405"}, {"x": 1585238400000, "y": 144, "sc": "409"}, {
    "x": 1585497600000,
    "y": 128,
    "sc": "408"
}, {"x": 1585584000000, "y": 132, "sc": "408"}, {"x": 1585670400000, "y": 137, "sc": "408"}, {
    "x": 1585756800000,
    "y": 143,
    "sc": "407"
}, {"x": 1585843200000, "y": 130, "sc": "408"}, {"x": 1586188800000, "y": 151, "sc": "409"}, {
    "x": 1586275200000,
    "y": 134,
    "sc": "409"
}, {"x": 1586361600000, "y": 140, "sc": "409"}, {"x": 1586448000000, "y": 109, "sc": "408"}, {
    "x": 1586707200000,
    "y": 90,
    "sc": "407"
}, {"x": 1586793600000, "y": 93, "sc": "410"}, {"x": 1586880000000, "y": 85, "sc": "410"}, {
    "x": 1586966400000,
    "y": 72,
    "sc": "410"
}, {"x": 1587052800000, "y": 67, "sc": "411"}, {"x": 1587312000000, "y": 59, "sc": "410"}, {
    "x": 1587398400000,
    "y": 61,
    "sc": "411"
}, {"x": 1587484800000, "y": 60, "sc": "413"}, {"x": 1587571200000, "y": 59, "sc": "413"}, {
    "x": 1587657600000,
    "y": 60,
    "sc": "414"
}, {"x": 1587916800000, "y": 60, "sc": "413"}, {"x": 1588003200000, "y": 64, "sc": "411"}, {
    "x": 1588089600000,
    "y": 51,
    "sc": "411"
}, {"x": 1588176000000, "y": 47, "sc": "411"}, {"x": 1588694400000, "y": 43, "sc": "413"}, {
    "x": 1588780800000,
    "y": 64,
    "sc": "413"
}, {"x": 1588867200000, "y": 72, "sc": "414"}, {"x": 1589126400000, "y": 63, "sc": "413"}, {
    "x": 1589212800000,
    "y": 78,
    "sc": "413"
}, {"x": 1589299200000, "y": 83, "sc": "413"}, {"x": 1589385600000, "y": 90, "sc": "413"}, {
    "x": 1589472000000,
    "y": 86,
    "sc": "414"
}, {"x": 1589731200000, "y": 100, "sc": "413"}, {"x": 1589817600000, "y": 95, "sc": "413"}, {
    "x": 1589904000000,
    "y": 96,
    "sc": "414"
}, {"x": 1589990400000, "y": 116, "sc": "417"}, {"x": 1590076800000, "y": 102, "sc": "417"}, {
    "x": 1590336000000,
    "y": 98,
    "sc": "417"
}, {"x": 1590422400000, "y": 92, "sc": "417"}, {"x": 1590508800000, "y": 96, "sc": "417"}, {
    "x": 1590595200000,
    "y": 82,
    "sc": "417"
}, {"x": 1590681600000, "y": 86, "sc": "417"}, {"x": 1590940800000, "y": 85, "sc": "417"}, {
    "x": 1591027200000,
    "y": 89,
    "sc": "417"
}, {"x": 1591113600000, "y": 96, "sc": "417"}, {"x": 1591200000000, "y": 104, "sc": "417"}, {
    "x": 1591286400000,
    "y": 106,
    "sc": "419"
}, {"x": 1591545600000, "y": 88, "sc": "420"}, {"x": 1591632000000, "y": 97, "sc": "420"}, {
    "x": 1591718400000,
    "y": 106,
    "sc": "421"
}, {"x": 1591804800000, "y": 117, "sc": "421"}, {"x": 1591891200000, "y": 105, "sc": "422"}, {
    "x": 1592150400000,
    "y": 102,
    "sc": "422"
}, {"x": 1592236800000, "y": 122, "sc": "422"}, {"x": 1592323200000, "y": 124, "sc": "421"}, {
    "x": 1592409600000,
    "y": 138,
    "sc": "424"
}, {"x": 1592496000000, "y": 164, "sc": "425"}, {"x": 1592755200000, "y": 182, "sc": "424"}, {
    "x": 1592841600000,
    "y": 190,
    "sc": "422"
}, {"x": 1592928000000, "y": 170, "sc": "423"}, {"x": 1593360000000, "y": 166, "sc": "426"}, {
    "x": 1593446400000,
    "y": 178,
    "sc": "427"
}, {"x": 1593532800000, "y": 166, "sc": "424"}, {"x": 1593619200000, "y": 131, "sc": "426"}, {
    "x": 1593705600000,
    "y": 147,
    "sc": "427"
}, {"x": 1593964800000, "y": 154, "sc": "426"}, {"x": 1594051200000, "y": 147, "sc": "428"}, {
    "x": 1594137600000,
    "y": 161,
    "sc": "428"
}, {"x": 1594224000000, "y": 120, "sc": "429"}, {"x": 1594310400000, "y": 137, "sc": "430"}, {
    "x": 1594569600000,
    "y": 162,
    "sc": "430"
}, {"x": 1594656000000, "y": 151, "sc": "430"}, {"x": 1594742400000, "y": 133, "sc": "433"}, {
    "x": 1594828800000,
    "y": 117,
    "sc": "433"
}, {"x": 1594915200000, "y": 95, "sc": "434"}, {"x": 1595174400000, "y": 36, "sc": "433"}, {
    "x": 1595260800000,
    "y": 50,
    "sc": "435"
}, {"x": 1595347200000, "y": 55, "sc": "437"}, {"x": 1595433600000, "y": 69, "sc": "440"}, {
    "x": 1595520000000,
    "y": 35,
    "sc": "441"
}, {"x": 1595779200000, "y": 16, "sc": "440"}, {"x": 1595865600000, "y": 25, "sc": "440"}, {
    "x": 1595952000000,
    "y": 42,
    "sc": "440"
}, {"x": 1596038400000, "y": 48, "sc": "440"}, {"x": 1596124800000, "y": 49, "sc": "441"}, {
    "x": 1596384000000,
    "y": 47,
    "sc": "440"
}, {"x": 1596470400000, "y": 46, "sc": "440"}, {"x": 1596556800000, "y": 50, "sc": "440"}, {
    "x": 1596643200000,
    "y": 34,
    "sc": "440"
}, {"x": 1596729600000, "y": 19, "sc": "442"}, {"x": 1596988800000, "y": 17, "sc": "442"}, {
    "x": 1597075200000,
    "y": 19,
    "sc": "442"
}, {"x": 1597161600000, "y": 20, "sc": "442"}, {"x": 1597248000000, "y": 12, "sc": "442"}, {
    "x": 1597334400000,
    "y": 13,
    "sc": "443"
}, {"x": 1597593600000, "y": 12, "sc": "442"}, {"x": 1597680000000, "y": 12, "sc": "442"}, {
    "x": 1597766400000,
    "y": 10,
    "sc": "442"
}, {"x": 1597852800000, "y": 10, "sc": "445"}, {"x": 1597939200000, "y": 9, "sc": "446"}, {
    "x": 1598198400000,
    "y": 20,
    "sc": "452"
}, {"x": 1598284800000, "y": 19, "sc": "452"}, {"x": 1598371200000, "y": 5, "sc": "452"}, {
    "x": 1598457600000,
    "y": 9,
    "sc": "453"
}, {"x": 1598544000000, "y": 7, "sc": "454"}, {"x": 1598803200000, "y": 5, "sc": "453"}, {
    "x": 1598889600000,
    "y": 6,
    "sc": "454"
}, {"x": 1598976000000, "y": 10, "sc": "454"}, {"x": 1599062400000, "y": 10, "sc": "454"}, {
    "x": 1599148800000,
    "y": 5,
    "sc": "455"
}, {"x": 1599408000000, "y": 7, "sc": "456"}, {"x": 1599494400000, "y": 8, "sc": "456"}, {
    "x": 1599580800000,
    "y": 5,
    "sc": "456"
}, {"x": 1599667200000, "y": 7, "sc": "456"}, {"x": 1599753600000, "y": 10, "sc": "457"}, {
    "x": 1600012800000,
    "y": 14,
    "sc": "458"
}, {"x": 1600099200000, "y": 13, "sc": "458"}, {"x": 1600185600000, "y": 13, "sc": "459"}, {
    "x": 1600272000000,
    "y": 12,
    "sc": "460"
}, {"x": 1600358400000, "y": 10, "sc": "461"}, {"x": 1600617600000, "y": 10, "sc": "461"}, {
    "x": 1600704000000,
    "y": 8,
    "sc": "461"
}, {"x": 1600790400000, "y": 11, "sc": "461"}, {"x": 1600876800000, "y": 9, "sc": "459"}, {
    "x": 1600963200000,
    "y": 9,
    "sc": "459"
}, {"x": 1601222400000, "y": 10, "sc": "459"}, {"x": 1601308800000, "y": 5, "sc": "461"}, {
    "x": 1601395200000,
    "y": 11,
    "sc": "461"
}, {"x": 1602172800000, "y": 26, "sc": "461"}, {"x": 1602432000000, "y": 24, "sc": "461"}, {
    "x": 1602518400000,
    "y": 20,
    "sc": "461"
}, {"x": 1602604800000, "y": 14, "sc": "461"}, {"x": 1602691200000, "y": 16, "sc": "461"}, {
    "x": 1602777600000,
    "y": 16,
    "sc": "463"
}, {"x": 1603036800000, "y": 18, "sc": "463"}, {"x": 1603123200000, "y": 44, "sc": "463"}, {
    "x": 1603209600000,
    "y": 49,
    "sc": "463"
}, {"x": 1603296000000, "y": 55, "sc": "465"}, {"x": 1603382400000, "y": 65, "sc": "468"}, {
    "x": 1603641600000,
    "y": 102,
    "sc": "468"
}, {"x": 1603728000000, "y": 138, "sc": "470"}, {"x": 1603814400000, "y": 121, "sc": "470"}, {
    "x": 1603900800000,
    "y": 168,
    "sc": "472"
}, {"x": 1603987200000, "y": 163, "sc": "473"}, {"x": 1604246400000, "y": 154, "sc": "472"}, {
    "x": 1604332800000,
    "y": 137,
    "sc": "472"
}, {"x": 1604419200000, "y": 118, "sc": "474"}, {"x": 1604505600000, "y": 145, "sc": "474"}, {
    "x": 1604592000000,
    "y": 179,
    "sc": "476"
}, {"x": 1604851200000, "y": 184, "sc": "475"}, {"x": 1604937600000, "y": 189, "sc": "477"}, {
    "x": 1605024000000,
    "y": 151,
    "sc": "479"
}, {"x": 1605110400000, "y": 148, "sc": "479"}, {"x": 1605196800000, "y": 155, "sc": "482"}, {
    "x": 1605456000000,
    "y": 163,
    "sc": "483"
}, {"x": 1605542400000, "y": 157, "sc": "484"}, {"x": 1605628800000, "y": 171, "sc": "483"}, {
    "x": 1605715200000,
    "y": 166,
    "sc": "483"
}, {"x": 1605801600000, "y": 160, "sc": "487"}, {"x": 1606060800000, "y": 172, "sc": "485"}, {
    "x": 1606147200000,
    "y": 171,
    "sc": "487"
}, {"x": 1606233600000, "y": 164, "sc": "487"}, {"x": 1606320000000, "y": 196, "sc": "488"}, {
    "x": 1606406400000,
    "y": 194,
    "sc": "494"
}, {"x": 1606665600000, "y": 224, "sc": "492"}, {"x": 1606752000000, "y": 246, "sc": "495"}, {
    "x": 1606838400000,
    "y": 235,
    "sc": "495"
}, {"x": 1606924800000, "y": 245, "sc": "495"}, {"x": 1607011200000, "y": 253, "sc": "497"}, {
    "x": 1607270400000,
    "y": 230,
    "sc": "495"
}, {"x": 1607356800000, "y": 227, "sc": "495"}, {"x": 1607443200000, "y": 200, "sc": "498"}, {
    "x": 1607529600000,
    "y": 190,
    "sc": "500"
}, {"x": 1607616000000, "y": 179, "sc": "502"}, {"x": 1607875200000, "y": 213, "sc": "502"}, {
    "x": 1607961600000,
    "y": 279,
    "sc": "502"
}, {"x": 1608048000000, "y": 289, "sc": "503"}, {"x": 1608134400000, "y": 332, "sc": "503"}, {
    "x": 1608220800000,
    "y": 322,
    "sc": "505"
}, {"x": 1608480000000, "y": 326, "sc": "503"}, {"x": 1608566400000, "y": 314, "sc": "504"}, {
    "x": 1608652800000,
    "y": 292,
    "sc": "506"
}, {"x": 1608739200000, "y": 274, "sc": "509"}, {"x": 1608825600000, "y": 313, "sc": "510"}, {
    "x": 1609084800000,
    "y": 318,
    "sc": "512"
}, {"x": 1609171200000, "y": 304, "sc": "512"}, {"x": 1609257600000, "y": 350, "sc": "512"}, {
    "x": 1609344000000,
    "y": 369,
    "sc": "514"
}, {"x": 1609689600000, "y": 359, "sc": "512"}, {"x": 1609776000000, "y": 341, "sc": "512"}, {
    "x": 1609862400000,
    "y": 361,
    "sc": "512"
}, {"x": 1609948800000, "y": 368, "sc": "512"}, {"x": 1610035200000, "y": 367, "sc": "514"}, {
    "x": 1610294400000,
    "y": 343,
    "sc": "512"
}, {"x": 1610380800000, "y": 375, "sc": "512"}, {"x": 1610467200000, "y": 370, "sc": "512"}, {
    "x": 1610553600000,
    "y": 393,
    "sc": "512"
}, {"x": 1610640000000, "y": 393, "sc": "514"}, {"x": 1610899200000, "y": 370, "sc": "513"}, {
    "x": 1610985600000,
    "y": 365,
    "sc": "513"
}, {"x": 1611072000000, "y": 386, "sc": "514"}, {"x": 1611158400000, "y": 372, "sc": "514"}, {
    "x": 1611244800000,
    "y": 367,
    "sc": "515"
}, {"x": 1611504000000, "y": 381, "sc": "513"}, {"x": 1611590400000, "y": 372, "sc": "513"}, {
    "x": 1611676800000,
    "y": 375,
    "sc": "513"
}, {"x": 1611763200000, "y": 356, "sc": "514"}, {"x": 1611849600000, "y": 286, "sc": "517"}, {
    "x": 1612108800000,
    "y": 300,
    "sc": "515"
}, {"x": 1612195200000, "y": 327, "sc": "515"}, {"x": 1612281600000, "y": 324, "sc": "515"}, {
    "x": 1612368000000,
    "y": 336,
    "sc": "520"
}, {"x": 1612454400000, "y": 339, "sc": "523"}, {"x": 1612713600000, "y": 292, "sc": "521"}, {
    "x": 1612800000000,
    "y": 300,
    "sc": "520"
}, {"x": 1612886400000, "y": 298, "sc": "522"}, {"x": 1613577600000, "y": 302, "sc": "526"}, {
    "x": 1613664000000,
    "y": 305,
    "sc": "528"
}, {"x": 1613923200000, "y": 254, "sc": "526"}, {"x": 1614009600000, "y": 183, "sc": "528"}, {
    "x": 1614096000000,
    "y": 127,
    "sc": "528"
}, {"x": 1614182400000, "y": 143, "sc": "528"}, {"x": 1614268800000, "y": 158, "sc": "530"}, {
    "x": 1614528000000,
    "y": 146,
    "sc": "529"
}, {"x": 1614614400000, "y": 149, "sc": "529"}, {"x": 1614700800000, "y": 130, "sc": "531"}, {
    "x": 1614787200000,
    "y": 97,
    "sc": "531"
}, {"x": 1614873600000, "y": 101, "sc": "533"}, {"x": 1615132800000, "y": 69, "sc": "532"}, {
    "x": 1615219200000,
    "y": 66,
    "sc": "532"
}, {"x": 1615305600000, "y": 78, "sc": "532"}, {"x": 1615392000000, "y": 92, "sc": "533"}, {
    "x": 1615478400000,
    "y": 86,
    "sc": "534"
}, {"x": 1615737600000, "y": 54, "sc": "533"}, {"x": 1615824000000, "y": 47, "sc": "537"}, {
    "x": 1615910400000,
    "y": 38,
    "sc": "537"
}, {"x": 1615996800000, "y": 42, "sc": "536"}, {"x": 1616083200000, "y": 44, "sc": "538"}, {
    "x": 1616342400000,
    "y": 36,
    "sc": "537"
}, {"x": 1616428800000, "y": 39, "sc": "537"}, {"x": 1616515200000, "y": 52, "sc": "537"}, {
    "x": 1616601600000,
    "y": 51,
    "sc": "537"
}, {"x": 1616688000000, "y": 52, "sc": "539"}, {"x": 1616947200000, "y": 65, "sc": "541"}, {
    "x": 1617033600000,
    "y": 56,
    "sc": "550"
}, {"x": 1617120000000, "y": 55, "sc": "550"}, {"x": 1617206400000, "y": 59, "sc": "550"}, {
    "x": 1617292800000,
    "y": 68,
    "sc": "551"
}, {"x": 1617638400000, "y": 78, "sc": "550"}, {"x": 1617724800000, "y": 82, "sc": "550"}, {
    "x": 1617811200000,
    "y": 84,
    "sc": "550"
}, {"x": 1617897600000, "y": 76, "sc": "551"}, {"x": 1618156800000, "y": 64, "sc": "554"}, {
    "x": 1618243200000,
    "y": 61,
    "sc": "556"
}, {"x": 1618329600000, "y": 59, "sc": "556"}, {"x": 1618416000000, "y": 73, "sc": "558"}, {
    "x": 1618502400000,
    "y": 79,
    "sc": "559"
}, {"x": 1618761600000, "y": 111, "sc": "558"}, {"x": 1618848000000, "y": 84, "sc": "564"}, {
    "x": 1618934400000,
    "y": 129,
    "sc": "564"
}, {"x": 1619020800000, "y": 89, "sc": "562"}, {"x": 1619107200000, "y": 98, "sc": "565"}, {
    "x": 1619366400000,
    "y": 104,
    "sc": "568"
}, {"x": 1619452800000, "y": 126, "sc": "572"}, {"x": 1619539200000, "y": 155, "sc": "574"}, {
    "x": 1619625600000,
    "y": 218,
    "sc": "574"
}, {"x": 1619712000000, "y": 213, "sc": "577"}, {"x": 1620230400000, "y": 221, "sc": "579"}, {
    "x": 1620316800000,
    "y": 208,
    "sc": "582"
}, {"x": 1620576000000, "y": 281, "sc": "587"}, {"x": 1620662400000, "y": 294, "sc": "587"}, {
    "x": 1620748800000,
    "y": 302,
    "sc": "587"
}, {"x": 1620835200000, "y": 278, "sc": "587"}, {"x": 1620921600000, "y": 284, "sc": "588"}, {
    "x": 1621180800000,
    "y": 310,
    "sc": "587"
}, {"x": 1621267200000, "y": 331, "sc": "587"}, {"x": 1621353600000, "y": 361, "sc": "587"}, {
    "x": 1621440000000,
    "y": 352,
    "sc": "587"
}, {"x": 1621526400000, "y": 322, "sc": "588"}, {"x": 1621785600000, "y": 476, "sc": "591"}, {
    "x": 1621872000000,
    "y": 487,
    "sc": "591"
}, {"x": 1621958400000, "y": 498, "sc": "593"}, {"x": 1622044800000, "y": 459, "sc": "593"}, {
    "x": 1622131200000,
    "y": 491,
    "sc": "594"
}, {"x": 1622390400000, "y": 493, "sc": "593"}, {"x": 1622476800000, "y": 509, "sc": "593"}, {
    "x": 1622563200000,
    "y": 541,
    "sc": "595"
}, {"x": 1622649600000, "y": 499, "sc": "596"}, {"x": 1622736000000, "y": 512, "sc": "597"}, {
    "x": 1622995200000,
    "y": 484,
    "sc": "596"
}, {"x": 1623081600000, "y": 471, "sc": "596"}, {"x": 1623168000000, "y": 462, "sc": "598"}, {
    "x": 1623254400000,
    "y": 475,
    "sc": "598"
}, {"x": 1623340800000, "y": 465, "sc": "599"}, {"x": 1623686400000, "y": 446, "sc": "598"}, {
    "x": 1623772800000,
    "y": 439,
    "sc": "597"
}, {"x": 1623859200000, "y": 401, "sc": "598"}, {"x": 1623945600000, "y": 420, "sc": "598"}, {
    "x": 1624204800000,
    "y": 430,
    "sc": "601"
}, {"x": 1624291200000, "y": 467, "sc": "601"}, {"x": 1624377600000, "y": 464, "sc": "604"}, {
    "x": 1624464000000,
    "y": 440,
    "sc": "605"
}, {"x": 1624550400000, "y": 438, "sc": "610"}, {"x": 1624809600000, "y": 418, "sc": "609"}, {
    "x": 1624896000000,
    "y": 407,
    "sc": "611"
}, {"x": 1624982400000, "y": 379, "sc": "616"}, {"x": 1625068800000, "y": 394, "sc": "613"}, {
    "x": 1625155200000,
    "y": 352,
    "sc": "614"
}, {"x": 1625414400000, "y": 359, "sc": "613"}, {"x": 1625500800000, "y": 344, "sc": "613"}, {
    "x": 1625587200000,
    "y": 392,
    "sc": "613"
}, {"x": 1625673600000, "y": 360, "sc": "613"}, {"x": 1625760000000, "y": 427, "sc": "614"}, {
    "x": 1626019200000,
    "y": 464,
    "sc": "613"
}, {"x": 1626105600000, "y": 468, "sc": "613"}, {"x": 1626192000000, "y": 483, "sc": "613"}, {
    "x": 1626278400000,
    "y": 465,
    "sc": "613"
}, {"x": 1626364800000, "y": 460, "sc": "616"}, {"x": 1626624000000, "y": 466, "sc": "615"}, {
    "x": 1626710400000,
    "y": 463,
    "sc": "616"
}, {"x": 1626796800000, "y": 459, "sc": "618"}, {"x": 1626883200000, "y": 447, "sc": "618"}, {
    "x": 1626969600000,
    "y": 414,
    "sc": "619"
}, {"x": 1627228800000, "y": 397, "sc": "618"}, {"x": 1627315200000, "y": 347, "sc": "620"}, {
    "x": 1627401600000,
    "y": 393,
    "sc": "620"
}, {"x": 1627488000000, "y": 379, "sc": "620"}, {"x": 1627574400000, "y": 352, "sc": "621"}, {
    "x": 1627833600000,
    "y": 385,
    "sc": "620"
}, {"x": 1627920000000, "y": 420, "sc": "620"}, {"x": 1628006400000, "y": 437, "sc": "620"}, {
    "x": 1628092800000,
    "y": 447,
    "sc": "620"
}, {"x": 1628179200000, "y": 436, "sc": "621"}, {"x": 1628438400000, "y": 416, "sc": "623"}, {
    "x": 1628524800000,
    "y": 363,
    "sc": "623"
}, {"x": 1628611200000, "y": 349, "sc": "628"}, {"x": 1628697600000, "y": 327, "sc": "628"}, {
    "x": 1628784000000,
    "y": 350,
    "sc": "629"
}, {"x": 1629043200000, "y": 345, "sc": "629"}, {"x": 1629129600000, "y": 341, "sc": "630"}, {
    "x": 1629216000000,
    "y": 360,
    "sc": "628"
}, {"x": 1629302400000, "y": 348, "sc": "628"}, {"x": 1629388800000, "y": 331, "sc": "629"}, {
    "x": 1629648000000,
    "y": 334,
    "sc": "628"
}, {"x": 1629734400000, "y": 355, "sc": "630"}, {"x": 1629820800000, "y": 366, "sc": "632"}, {
    "x": 1629907200000,
    "y": 366,
    "sc": "634"
}, {"x": 1629993600000, "y": 396, "sc": "635"}, {"x": 1630252800000, "y": 385, "sc": "634"}, {
    "x": 1630339200000,
    "y": 396,
    "sc": "634"
}, {"x": 1630425600000, "y": 393, "sc": "636"}, {"x": 1630512000000, "y": 400, "sc": "636"}, {
    "x": 1630598400000,
    "y": 392,
    "sc": "636"
}, {"x": 1630857600000, "y": 398, "sc": "636"}, {"x": 1630944000000, "y": 423, "sc": "636"}, {
    "x": 1631030400000,
    "y": 418,
    "sc": "640"
}, {"x": 1631116800000, "y": 427, "sc": "640"}, {"x": 1631203200000, "y": 428, "sc": "642"}, {
    "x": 1631462400000,
    "y": 424,
    "sc": "643"
}, {"x": 1631548800000, "y": 432, "sc": "643"}, {"x": 1631635200000, "y": 449, "sc": "643"}, {
    "x": 1631721600000,
    "y": 451,
    "sc": "643"
}, {"x": 1631808000000, "y": 511, "sc": "643"}, {"x": 1632240000000, "y": 460, "sc": "646"}, {
    "x": 1632326400000,
    "y": 441,
    "sc": "650"
}, {"x": 1632412800000, "y": 443, "sc": "651"}, {"x": 1632672000000, "y": 483, "sc": "650"}, {
    "x": 1632758400000,
    "y": 485,
    "sc": "650"
}, {"x": 1632844800000, "y": 509, "sc": "653"}, {"x": 1632931200000, "y": 541, "sc": "654"}, {
    "x": 1633622400000,
    "y": 507,
    "sc": "660"
}, {"x": 1633881600000, "y": 370, "sc": "659"}, {"x": 1633968000000, "y": 341, "sc": "660"}, {
    "x": 1634054400000,
    "y": 385,
    "sc": "661"
}, {"x": 1634140800000, "y": 376, "sc": "661"}, {"x": 1634227200000, "y": 401, "sc": "662"}, {
    "x": 1634486400000,
    "y": 422,
    "sc": "661"
}, {"x": 1634572800000, "y": 402, "sc": "661"}, {"x": 1634659200000, "y": 443, "sc": "663"}, {
    "x": 1634745600000,
    "y": 411,
    "sc": "663"
}, {"x": 1634832000000, "y": 439, "sc": "664"}, {"x": 1635091200000, "y": 465, "sc": "663"}, {
    "x": 1635177600000,
    "y": 474,
    "sc": "665"
}, {"x": 1635264000000, "y": 558, "sc": "667"}, {"x": 1635350400000, "y": 485, "sc": "667"}, {
    "x": 1635436800000,
    "y": 457,
    "sc": "668"
}, {"x": 1635696000000, "y": 401, "sc": "668"}, {"x": 1635782400000, "y": 348, "sc": "668"}, {
    "x": 1635868800000,
    "y": 304,
    "sc": "666"
}, {"x": 1635955200000, "y": 198, "sc": "667"}, {"x": 1636041600000, "y": 136, "sc": "669"}, {
    "x": 1636300800000,
    "y": 152,
    "sc": "667"
}, {"x": 1636387200000, "y": 197, "sc": "668"}, {"x": 1636473600000, "y": 232, "sc": "668"}, {
    "x": 1636560000000,
    "y": 249,
    "sc": "668"
}, {"x": 1636646400000, "y": 279, "sc": "674"}, {"x": 1636905600000, "y": 173, "sc": "674"}, {
    "x": 1636992000000,
    "y": 215,
    "sc": "674"
}, {"x": 1637078400000, "y": 215, "sc": "674"}, {"x": 1637164800000, "y": 192, "sc": "676"}, {
    "x": 1637251200000,
    "y": 191,
    "sc": "676"
}, {"x": 1637510400000, "y": 250, "sc": "677"}, {"x": 1637596800000, "y": 196, "sc": "680"}, {
    "x": 1637683200000,
    "y": 161,
    "sc": "682"
}, {"x": 1637769600000, "y": 123, "sc": "685"}, {"x": 1637856000000, "y": 168, "sc": "685"}, {
    "x": 1638115200000,
    "y": 174,
    "sc": "685"
}, {"x": 1638201600000, "y": 150, "sc": "689"}, {"x": 1638288000000, "y": 213, "sc": "689"}, {
    "x": 1638374400000,
    "y": 221,
    "sc": "688"
}, {"x": 1638460800000, "y": 234, "sc": "689"}, {"x": 1638720000000, "y": 208, "sc": "689"}, {
    "x": 1638806400000,
    "y": 142,
    "sc": "691"
}, {"x": 1638892800000, "y": 209, "sc": "690"}, {"x": 1638979200000, "y": 148, "sc": "690"}, {
    "x": 1639065600000,
    "y": 185,
    "sc": "692"
}, {"x": 1639324800000, "y": 213, "sc": "692"}, {"x": 1639411200000, "y": 152, "sc": "692"}, {
    "x": 1639497600000,
    "y": 139,
    "sc": "692"
}, {"x": 1639584000000, "y": 114, "sc": "694"}, {"x": 1639670400000, "y": 75, "sc": "695"}, {
    "x": 1639929600000,
    "y": 66,
    "sc": "694"
}, {"x": 1640016000000, "y": 46, "sc": "694"}, {"x": 1640102400000, "y": 36, "sc": "694"}, {
    "x": 1640188800000,
    "y": 77,
    "sc": "694"
}, {"x": 1640275200000, "y": 49, "sc": "697"}, {"x": 1640534400000, "y": 25, "sc": "697"}, {
    "x": 1640620800000,
    "y": 44,
    "sc": "699"
}, {"x": 1640707200000, "y": 38, "sc": "699"}, {"x": 1640793600000, "y": 18, "sc": "699"}, {
    "x": 1640880000000,
    "y": 21,
    "sc": "700"
}, {"x": 1641225600000, "y": 12, "sc": "700"}, {"x": 1641312000000, "y": 11, "sc": "700"}, {
    "x": 1641398400000,
    "y": 14,
    "sc": "700"
}, {"x": 1641484800000, "y": 15, "sc": "700"}, {"x": 1641744000000, "y": 17, "sc": "700"}, {
    "x": 1641830400000,
    "y": 48,
    "sc": "699"
}, {"x": 1641916800000, "y": 46, "sc": "701"}, {"x": 1642003200000, "y": 54, "sc": "701"}, {
    "x": 1642089600000,
    "y": 38,
    "sc": "702"
}, {"x": 1642348800000, "y": 29, "sc": "701"}, {"x": 1642435200000, "y": 25, "sc": "702"}, {
    "x": 1642521600000,
    "y": 27,
    "sc": "702"
}, {"x": 1642608000000, "y": 20, "sc": "702"}, {"x": 1642694400000, "y": 15, "sc": "703"}, {
    "x": 1642953600000,
    "y": 25,
    "sc": "702"
}, {"x": 1643040000000, "y": 32, "sc": "703"}, {"x": 1643126400000, "y": 40, "sc": "705"}, {
    "x": 1643212800000,
    "y": 33,
    "sc": "706"
}, {"x": 1643299200000, "y": 45, "sc": "707"}, {"x": 1644163200000, "y": 131, "sc": "711"}, {
    "x": 1644249600000,
    "y": 145,
    "sc": "711"
}, {"x": 1644336000000, "y": 177, "sc": "711"}, {"x": 1644422400000, "y": 173, "sc": "711"}, {
    "x": 1644508800000,
    "y": 181,
    "sc": "712"
}, {"x": 1644768000000, "y": 181, "sc": "711"}, {"x": 1644854400000, "y": 195, "sc": "709"}, {
    "x": 1644940800000,
    "y": 212,
    "sc": "709"
}, {"x": 1645027200000, "y": 217, "sc": "709"}, {"x": 1645113600000, "y": 219, "sc": "710"}, {
    "x": 1645372800000,
    "y": 214,
    "sc": "710"
}, {"x": 1645459200000, "y": 249, "sc": "710"}, {"x": 1645545600000, "y": 272, "sc": "710"}, {
    "x": 1645632000000,
    "y": 251,
    "sc": "710"
}, {"x": 1645718400000, "y": 212, "sc": "713"}, {"x": 1645977600000, "y": 256, "sc": "720"}, {
    "x": 1646064000000,
    "y": 256,
    "sc": "721"
}, {"x": 1646150400000, "y": 219, "sc": "721"}, {"x": 1646236800000, "y": 205, "sc": "722"}, {
    "x": 1646323200000,
    "y": 190,
    "sc": "722"
}, {"x": 1646582400000, "y": 189, "sc": "725"}, {"x": 1646668800000, "y": 200, "sc": "725"}, {
    "x": 1646755200000,
    "y": 223,
    "sc": "725"
}, {"x": 1646841600000, "y": 193, "sc": "725"}, {"x": 1646928000000, "y": 182, "sc": "723"}, {
    "x": 1647187200000,
    "y": 189,
    "sc": "725"
}, {"x": 1647273600000, "y": 196, "sc": "727"}, {"x": 1647360000000, "y": 300, "sc": "727"}, {
    "x": 1647446400000,
    "y": 378,
    "sc": "728"
}, {"x": 1647532800000, "y": 342, "sc": "728"}, {"x": 1647792000000, "y": 490, "sc": "728"}, {
    "x": 1647878400000,
    "y": 557,
    "sc": "729"
}, {"x": 1647964800000, "y": 514, "sc": "729"}, {"x": 1648051200000, "y": 595, "sc": "729"}, {
    "x": 1648137600000,
    "y": 554,
    "sc": "729"
}, {"x": 1648396800000, "y": 495, "sc": "735"}, {"x": 1648483200000, "y": 497, "sc": "735"}, {
    "x": 1648569600000,
    "y": 620,
    "sc": "734"
}, {"x": 1648656000000, "y": 606, "sc": "734"}, {"x": 1648742400000, "y": 617, "sc": "735"}, {
    "x": 1649174400000,
    "y": 652,
    "sc": "735"
}, {"x": 1649260800000, "y": 683, "sc": "735"}, {"x": 1649347200000, "y": 686, "sc": "736"}, {
    "x": 1649606400000,
    "y": 573,
    "sc": "739"
}, {"x": 1649692800000, "y": 541, "sc": "739"}, {"x": 1649779200000, "y": 525, "sc": "741"}, {
    "x": 1649865600000,
    "y": 546,
    "sc": "741"
}, {"x": 1649952000000, "y": 526, "sc": "742"}, {"x": 1650211200000, "y": 572, "sc": "741"}, {
    "x": 1650297600000,
    "y": 551,
    "sc": "743"
}, {"x": 1650384000000, "y": 526, "sc": "743"}, {"x": 1650470400000, "y": 504, "sc": "743"}, {
    "x": 1650556800000,
    "y": 519,
    "sc": "744"
}, {"x": 1650816000000, "y": 393, "sc": "748"}, {"x": 1650902400000, "y": 403, "sc": "751"}, {
    "x": 1650988800000,
    "y": 414,
    "sc": "752"
}, {"x": 1651075200000, "y": 451, "sc": "754"}, {"x": 1651161600000, "y": 432, "sc": "755"}, {
    "x": 1651680000000,
    "y": 381,
    "sc": "754"
}, {"x": 1651766400000, "y": 364, "sc": "755"}, {"x": 1652025600000, "y": 359, "sc": "754"}, {
    "x": 1652112000000,
    "y": 416,
    "sc": "754"
}, {"x": 1652198400000, "y": 497, "sc": "756"}, {"x": 1652284800000, "y": 431, "sc": "756"}, {
    "x": 1652371200000,
    "y": 440,
    "sc": "757"
}, {"x": 1652630400000, "y": 407, "sc": "761"}, {"x": 1652716800000, "y": 434, "sc": "761"}, {
    "x": 1652803200000,
    "y": 460,
    "sc": "761"
}, {"x": 1652889600000, "y": 480, "sc": "761"}, {"x": 1652976000000, "y": 480, "sc": "762"}, {
    "x": 1653235200000,
    "y": 461,
    "sc": "764"
}, {"x": 1653321600000, "y": 438, "sc": "764"}, {"x": 1653408000000, "y": 403, "sc": "765"}, {
    "x": 1653494400000,
    "y": 379,
    "sc": "765"
}, {"x": 1653580800000, "y": 425, "sc": "766"}, {"x": 1653840000000, "y": 373, "sc": "765"}, {
    "x": 1653926400000,
    "y": 400,
    "sc": "765"
}, {"x": 1654012800000, "y": 325, "sc": "768"}, {"x": 1654099200000, "y": 358, "sc": "769"}, {
    "x": 1654444800000,
    "y": 491,
    "sc": "769"
}, {"x": 1654531200000, "y": 514, "sc": "775"}, {"x": 1654617600000, "y": 481, "sc": "777"}, {
    "x": 1654704000000,
    "y": 447,
    "sc": "777"
}, {"x": 1654790400000, "y": 422, "sc": "778"}, {"x": 1655049600000, "y": 516, "sc": "777"}, {
    "x": 1655136000000,
    "y": 562,
    "sc": "777"
}, {"x": 1655222400000, "y": 486, "sc": "777"}, {"x": 1655308800000, "y": 368, "sc": "778"}, {
    "x": 1655395200000,
    "y": 367,
    "sc": "779"
}, {"x": 1655654400000, "y": 386, "sc": "778"}, {"x": 1655740800000, "y": 414, "sc": "778"}, {
    "x": 1655827200000,
    "y": 487,
    "sc": "778"
}, {"x": 1655913600000, "y": 544, "sc": "779"}, {"x": 1656000000000, "y": 533, "sc": "780"}, {
    "x": 1656259200000,
    "y": 558,
    "sc": "779"
}, {"x": 1656345600000, "y": 580, "sc": "780"}, {"x": 1656432000000, "y": 522, "sc": "783"}, {
    "x": 1656518400000,
    "y": 527,
    "sc": "787"
}, {"x": 1656604800000, "y": 536, "sc": "788"}, {"x": 1656864000000, "y": 585, "sc": "788"}, {
    "x": 1656950400000,
    "y": 611,
    "sc": "788"
}, {"x": 1657036800000, "y": 658, "sc": "788"}, {"x": 1657123200000, "y": 633, "sc": "788"}, {
    "x": 1657209600000,
    "y": 631,
    "sc": "788"
}, {"x": 1657468800000, "y": 652, "sc": "788"}, {"x": 1657555200000, "y": 634, "sc": "788"}, {
    "x": 1657641600000,
    "y": 632,
    "sc": "788"
}, {"x": 1657728000000, "y": 630, "sc": "787"}, {"x": 1657814400000, "y": 643, "sc": "787"}, {
    "x": 1658073600000,
    "y": 679,
    "sc": "787"
}, {"x": 1658160000000, "y": 668, "sc": "787"}, {"x": 1658246400000, "y": 693, "sc": "787"}, {
    "x": 1658332800000,
    "y": 653,
    "sc": "787"
}, {"x": 1658419200000, "y": 622, "sc": "787"}, {"x": 1658678400000, "y": 668, "sc": "787"}, {
    "x": 1658764800000,
    "y": 629,
    "sc": "787"
}, {"x": 1658851200000, "y": 617, "sc": "787"}, {"x": 1658937600000, "y": 560, "sc": "787"}, {
    "x": 1659024000000,
    "y": 592,
    "sc": "787"
}, {"x": 1659283200000, "y": 600, "sc": "787"}, {"x": 1659369600000, "y": 583, "sc": "787"}, {
    "x": 1659456000000,
    "y": 572,
    "sc": "787"
}, {"x": 1659542400000, "y": 579, "sc": "787"}, {"x": 1659628800000, "y": 565, "sc": "785"}, {
    "x": 1659888000000,
    "y": 587,
    "sc": "789"
}, {"x": 1659974400000, "y": 577, "sc": "789"}, {"x": 1660060800000, "y": 595, "sc": "789"}, {
    "x": 1660147200000,
    "y": 577,
    "sc": "789"
}, {"x": 1660233600000, "y": 599, "sc": "789"}, {"x": 1660492800000, "y": 609, "sc": "790"}, {
    "x": 1660579200000,
    "y": 615,
    "sc": "791"
}, {"x": 1660665600000, "y": 612, "sc": "791"}, {"x": 1660752000000, "y": 652, "sc": "791"}, {
    "x": 1660838400000,
    "y": 686,
    "sc": "791"
}, {"x": 1661097600000, "y": 665, "sc": "795"}, {"x": 1661184000000, "y": 668, "sc": "795"}, {
    "x": 1661270400000,
    "y": 696,
    "sc": "795"
}, {"x": 1661356800000, "y": 724, "sc": "795"}, {"x": 1661443200000, "y": 737, "sc": "795"}, {
    "x": 1661702400000,
    "y": 720,
    "sc": "795"
}, {"x": 1661788800000, "y": 730, "sc": "795"}, {"x": 1661875200000, "y": 715, "sc": "795"}, {
    "x": 1661961600000,
    "y": 713,
    "sc": "796"
}, {"x": 1662048000000, "y": 728, "sc": "796"}, {"x": 1662307200000, "y": 698, "sc": "796"}, {
    "x": 1662393600000,
    "y": 716,
    "sc": "798"
}, {"x": 1662480000000, "y": 672, "sc": "798"}, {"x": 1662566400000, "y": 611, "sc": "798"}, {
    "x": 1662652800000,
    "y": 659,
    "sc": "798"
}, {"x": 1662998400000, "y": 625, "sc": "798"}, {"x": 1663084800000, "y": 567, "sc": "800"}, {
    "x": 1663171200000,
    "y": 506,
    "sc": "800"
}, {"x": 1663257600000, "y": 532, "sc": "801"}, {"x": 1663516800000, "y": 494, "sc": "801"}, {
    "x": 1663603200000,
    "y": 542,
    "sc": "801"
}, {"x": 1663689600000, "y": 506, "sc": "801"}, {"x": 1663776000000, "y": 415, "sc": "802"}, {
    "x": 1663862400000,
    "y": 358,
    "sc": "802"
}, {"x": 1664121600000, "y": 431, "sc": "802"}, {"x": 1664208000000, "y": 451, "sc": "802"}, {
    "x": 1664294400000,
    "y": 441,
    "sc": "802"
}, {"x": 1664380800000, "y": 448, "sc": "802"}, {"x": 1664467200000, "y": 299, "sc": "802"}, {
    "x": 1665331200000,
    "y": 178,
    "sc": "804"
}, {"x": 1665417600000, "y": 203, "sc": "804"}, {"x": 1665504000000, "y": 237, "sc": "804"}, {
    "x": 1665590400000,
    "y": 238,
    "sc": "804"
}, {"x": 1665676800000, "y": 188, "sc": "804"}, {"x": 1665936000000, "y": 156, "sc": "804"}, {
    "x": 1666022400000,
    "y": 138,
    "sc": "802"
}, {"x": 1666108800000, "y": 200, "sc": "802"}, {"x": 1666195200000, "y": 191, "sc": "805"}, {
    "x": 1666281600000,
    "y": 219,
    "sc": "809"
}, {"x": 1666540800000, "y": 171, "sc": "810"}, {"x": 1666627200000, "y": 194, "sc": "810"}, {
    "x": 1666713600000,
    "y": 213,
    "sc": "814"
}, {"x": 1666800000000, "y": 184, "sc": "814"}, {"x": 1666886400000, "y": 163, "sc": "816"}, {
    "x": 1667145600000,
    "y": 187,
    "sc": "816"
}, {"x": 1667232000000, "y": 200, "sc": "816"}, {"x": 1667318400000, "y": 230, "sc": "816"}, {
    "x": 1667404800000,
    "y": 262,
    "sc": "817"
}, {"x": 1667491200000, "y": 293, "sc": "817"}, {"x": 1667750400000, "y": 393, "sc": "817"}, {
    "x": 1667836800000,
    "y": 330,
    "sc": "817"
}, {"x": 1667923200000, "y": 316, "sc": "817"}, {"x": 1668009600000, "y": 280, "sc": "818"}, {
    "x": 1668096000000,
    "y": 259,
    "sc": "820"
}, {"x": 1668355200000, "y": 251, "sc": "820"}, {"x": 1668441600000, "y": 224, "sc": "820"}, {
    "x": 1668528000000,
    "y": 224,
    "sc": "822"
}, {"x": 1668614400000, "y": 192, "sc": "824"}, {"x": 1668700800000, "y": 144, "sc": "824"}, {
    "x": 1668960000000,
    "y": 146,
    "sc": "827"
}, {"x": 1669046400000, "y": 125, "sc": "827"}, {"x": 1669132800000, "y": 105, "sc": "827"}, {
    "x": 1669219200000,
    "y": 106,
    "sc": "826"
}, {"x": 1669305600000, "y": 91, "sc": "826"}, {"x": 1669564800000, "y": 90, "sc": "826"}, {
    "x": 1669651200000,
    "y": 98,
    "sc": "826"
}, {"x": 1669737600000, "y": 92, "sc": "826"}, {"x": 1669824000000, "y": 85, "sc": "826"}, {
    "x": 1669910400000,
    "y": 94,
    "sc": "826"
}, {"x": 1670169600000, "y": 100, "sc": "826"}, {"x": 1670256000000, "y": 101, "sc": "826"}, {
    "x": 1670342400000,
    "y": 132,
    "sc": "826"
}, {"x": 1670428800000, "y": 164, "sc": "826"}, {"x": 1670515200000, "y": 141, "sc": "826"}, {
    "x": 1670774400000,
    "y": 156,
    "sc": "826"
}, {"x": 1670860800000, "y": 173, "sc": "826"}, {"x": 1670947200000, "y": 189, "sc": "826"}, {
    "x": 1671033600000,
    "y": 193,
    "sc": "826"
}, {"x": 1671120000000, "y": 194, "sc": "826"}, {"x": 1671379200000, "y": 199, "sc": "826"}, {
    "x": 1671465600000,
    "y": 150,
    "sc": "826"
}, {"x": 1671552000000, "y": 168, "sc": "826"}, {"x": 1671638400000, "y": 230, "sc": "828"}, {
    "x": 1671724800000,
    "y": 232,
    "sc": "830"
}, {"x": 1671984000000, "y": 153, "sc": "831"}, {"x": 1672070400000, "y": 113, "sc": "832"}, {
    "x": 1672156800000,
    "y": 121,
    "sc": "830"
}, {"x": 1672243200000, "y": 136, "sc": "834"}, {"x": 1672329600000, "y": 157, "sc": "838"}, {
    "x": 1672675200000,
    "y": 142,
    "sc": "834"
}, {"x": 1672761600000, "y": 141, "sc": "834"}, {"x": 1672848000000, "y": 160, "sc": "834"}, {
    "x": 1672934400000,
    "y": 169,
    "sc": "836"
}, {"x": 1673193600000, "y": 182, "sc": "834"}, {"x": 1673280000000, "y": 210, "sc": "834"}, {
    "x": 1673366400000,
    "y": 216,
    "sc": "832"
}, {"x": 1673452800000, "y": 193, "sc": "834"}, {"x": 1673539200000, "y": 211, "sc": "836"}, {
    "x": 1673798400000,
    "y": 207,
    "sc": "835"
}, {"x": 1673884800000, "y": 218, "sc": "835"}, {"x": 1673971200000, "y": 202, "sc": "835"}, {
    "x": 1674057600000,
    "y": 214,
    "sc": "835"
}, {"x": 1674144000000, "y": 193, "sc": "837"}, {"x": 1675008000000, "y": 264, "sc": "840"}, {
    "x": 1675094400000,
    "y": 219,
    "sc": "840"
}, {"x": 1675180800000, "y": 188, "sc": "840"}, {"x": 1675267200000, "y": 158, "sc": "838"}, {
    "x": 1675353600000,
    "y": 150,
    "sc": "842"
}, {"x": 1675612800000, "y": 119, "sc": "838"}, {"x": 1675699200000, "y": 96, "sc": "839"}, {
    "x": 1675785600000,
    "y": 91,
    "sc": "839"
}, {"x": 1675872000000, "y": 113, "sc": "839"}, {"x": 1675958400000, "y": 105, "sc": "843"}, {
    "x": 1676217600000,
    "y": 78,
    "sc": "842"
}, {"x": 1676304000000, "y": 81, "sc": "844"}, {"x": 1676390400000, "y": 73, "sc": "844"}, {
    "x": 1676476800000,
    "y": 65,
    "sc": "846"
}, {"x": 1676563200000, "y": 71, "sc": "850"}, {"x": 1676822400000, "y": 69, "sc": "846"}, {
    "x": 1676908800000,
    "y": 71,
    "sc": "846"
}, {"x": 1676995200000, "y": 83, "sc": "852"}, {"x": 1677081600000, "y": 83, "sc": "852"}, {
    "x": 1677168000000,
    "y": 86,
    "sc": "854"
}, {"x": 1677427200000, "y": 99, "sc": "855"}, {"x": 1677513600000, "y": 72, "sc": "857"}, {
    "x": 1677600000000,
    "y": 58,
    "sc": "857"
}, {"x": 1677686400000, "y": 47, "sc": "857"}, {"x": 1677772800000, "y": 45, "sc": "857"}, {
    "x": 1678032000000,
    "y": 27,
    "sc": "857"
}, {"x": 1678118400000, "y": 18, "sc": "857"}, {"x": 1678204800000, "y": 24, "sc": "857"}, {
    "x": 1678291200000,
    "y": 23,
    "sc": "857"
}, {"x": 1678377600000, "y": 17, "sc": "857"}, {"x": 1678636800000, "y": 21, "sc": "857"}, {
    "x": 1678723200000,
    "y": 23,
    "sc": "857"
}, {"x": 1678809600000, "y": 13, "sc": "857"}, {"x": 1678896000000, "y": 23, "sc": "859"}, {
    "x": 1678982400000,
    "y": 25,
    "sc": "859"
}, {"x": 1679241600000, "y": 28, "sc": "858"}, {"x": 1679328000000, "y": 31, "sc": "858"}, {
    "x": 1679414400000,
    "y": 36,
    "sc": "858"
}, {"x": 1679500800000, "y": 63, "sc": "858"}, {"x": 1679587200000, "y": 64, "sc": "858"}, {
    "x": 1679846400000,
    "y": 50,
    "sc": "858"
}, {"x": 1679932800000, "y": 49, "sc": "858"}, {"x": 1680019200000, "y": 63, "sc": "858"}, {
    "x": 1680105600000,
    "y": 52,
    "sc": "858"
}, {"x": 1680192000000, "y": 65, "sc": "858"}, {"x": 1680451200000, "y": 67, "sc": "859"}, {
    "x": 1680537600000,
    "y": 71,
    "sc": "859"
}, {"x": 1680710400000, "y": 78, "sc": "859"}, {"x": 1680796800000, "y": 85, "sc": "859"}, {
    "x": 1681056000000,
    "y": 71,
    "sc": "859"
}, {"x": 1681142400000, "y": 61, "sc": "859"}, {"x": 1681228800000, "y": 58, "sc": "859"}, {
    "x": 1681315200000,
    "y": 58,
    "sc": "859"
}, {"x": 1681401600000, "y": 72, "sc": "860"}, {"x": 1681660800000, "y": 47, "sc": "859"}, {
    "x": 1681747200000,
    "y": 47,
    "sc": "859"
}, {"x": 1681833600000, "y": 48, "sc": "859"}, {"x": 1681920000000, "y": 71, "sc": "859"}, {
    "x": 1682006400000,
    "y": 59,
    "sc": "860"
}, {"x": 1682265600000, "y": 58, "sc": "859"}, {"x": 1682352000000, "y": 55, "sc": "859"}, {
    "x": 1682438400000,
    "y": 34,
    "sc": "859"
}, {"x": 1682524800000, "y": 26, "sc": "859"}, {"x": 1682611200000, "y": 38, "sc": "860"}, {
    "x": 1683129600000,
    "y": 32,
    "sc": "859"
}, {"x": 1683216000000, "y": 29, "sc": "860"}, {"x": 1683475200000, "y": 42, "sc": "859"}, {
    "x": 1683561600000,
    "y": 26,
    "sc": "859"
}, {"x": 1683648000000, "y": 29, "sc": "860"}, {"x": 1683734400000, "y": 31, "sc": "860"}, {
    "x": 1683820800000,
    "y": 27,
    "sc": "861"
}, {"x": 1684080000000, "y": 26, "sc": "860"}, {"x": 1684166400000, "y": 25, "sc": "861"}, {
    "x": 1684252800000,
    "y": 52,
    "sc": "864"
}, {"x": 1684339200000, "y": 62, "sc": "864"}, {"x": 1684425600000, "y": 59, "sc": "863"}, {
    "x": 1684684800000,
    "y": 45,
    "sc": "862"
}, {"x": 1684771200000, "y": 50, "sc": "863"}, {"x": 1684857600000, "y": 59, "sc": "859"}, {
    "x": 1684944000000,
    "y": 54,
    "sc": "859"
}, {"x": 1685030400000, "y": 77, "sc": "860"}, {"x": 1685289600000, "y": 75, "sc": "859"}, {
    "x": 1685376000000,
    "y": 88,
    "sc": "859"
}, {"x": 1685462400000, "y": 93, "sc": "859"}, {"x": 1685548800000, "y": 99, "sc": "859"}, {
    "x": 1685635200000,
    "y": 118,
    "sc": "861"
}, {"x": 1685894400000, "y": 122, "sc": "861"}, {"x": 1685980800000, "y": 90, "sc": "862"}, {
    "x": 1686067200000,
    "y": 111,
    "sc": "862"
}, {"x": 1686153600000, "y": 87, "sc": "864"}, {"x": 1686240000000, "y": 103, "sc": "865"}, {
    "x": 1686499200000,
    "y": 111,
    "sc": "864"
}, {"x": 1686585600000, "y": 139, "sc": "864"}, {"x": 1686672000000, "y": 151, "sc": "868"}, {
    "x": 1686758400000,
    "y": 172,
    "sc": "868"
}, {"x": 1686844800000, "y": 207, "sc": "869"}, {"x": 1687104000000, "y": 225, "sc": "873"}, {
    "x": 1687190400000,
    "y": 231,
    "sc": "869"
}, {"x": 1687276800000, "y": 184, "sc": "872"}, {"x": 1687708800000, "y": 144, "sc": "872"}, {
    "x": 1687795200000,
    "y": 141,
    "sc": "872"
}, {"x": 1687881600000, "y": 119, "sc": "872"}, {"x": 1687968000000, "y": 97, "sc": "872"}, {
    "x": 1688054400000,
    "y": 112,
    "sc": "871"
}, {"x": 1688313600000, "y": 154, "sc": "870"}, {"x": 1688400000000, "y": 247, "sc": "870"}, {
    "x": 1688486400000,
    "y": 186,
    "sc": "870"
}, {"x": 1688572800000, "y": 210, "sc": "870"}, {"x": 1688659200000, "y": 158, "sc": "871"}, {
    "x": 1688918400000,
    "y": 152,
    "sc": "870"
}, {"x": 1689004800000, "y": 191, "sc": "872"}, {"x": 1689091200000, "y": 247, "sc": "872"}, {
    "x": 1689177600000,
    "y": 268,
    "sc": "872"
}, {"x": 1689264000000, "y": 191, "sc": "873"}, {"x": 1689523200000, "y": 204, "sc": "874"}, {
    "x": 1689609600000,
    "y": 212,
    "sc": "872"
}, {"x": 1689696000000, "y": 192, "sc": "872"}, {"x": 1689782400000, "y": 167, "sc": "872"}, {
    "x": 1689868800000,
    "y": 161,
    "sc": "874"
}, {"x": 1690128000000, "y": 148, "sc": "873"}, {"x": 1690214400000, "y": 344, "sc": "875"}, {
    "x": 1690300800000,
    "y": 217,
    "sc": "875"
}, {"x": 1690387200000, "y": 227, "sc": "877"}, {"x": 1690473600000, "y": 246, "sc": "878"}, {
    "x": 1690732800000,
    "y": 299,
    "sc": "877"
}, {"x": 1690819200000, "y": 307, "sc": "877"}, {"x": 1690905600000, "y": 331, "sc": "877"}, {
    "x": 1690992000000,
    "y": 319,
    "sc": "877"
}, {"x": 1691078400000, "y": 487, "sc": "880"}, {"x": 1691337600000, "y": 453, "sc": "877"}, {
    "x": 1691424000000,
    "y": 469,
    "sc": "879"
}, {"x": 1691510400000, "y": 503, "sc": "879"}, {"x": 1691596800000, "y": 465, "sc": "879"}, {
    "x": 1691683200000,
    "y": 432,
    "sc": "880"
}, {"x": 1691942400000, "y": 403, "sc": "880"}, {"x": 1692028800000, "y": 291, "sc": "880"}, {
    "x": 1692115200000,
    "y": 291,
    "sc": "882"
}, {"x": 1692201600000, "y": 311, "sc": "882"}, {"x": 1692288000000, "y": 295, "sc": "884"}, {
    "x": 1692547200000,
    "y": 269,
    "sc": "883"
}, {"x": 1692633600000, "y": 274, "sc": "883"}, {"x": 1692720000000, "y": 228, "sc": "885"}, {
    "x": 1692806400000,
    "y": 224,
    "sc": "885"
}, {"x": 1692892800000, "y": 190, "sc": "886"}, {"x": 1693152000000, "y": 209, "sc": "883"}, {
    "x": 1693238400000,
    "y": 293,
    "sc": "883"
}, {"x": 1693324800000, "y": 300, "sc": "883"}, {"x": 1693411200000, "y": 277, "sc": "883"}, {
    "x": 1693497600000,
    "y": 290,
    "sc": "884"
}, {"x": 1693756800000, "y": 262, "sc": "883"}, {"x": 1693843200000, "y": 275, "sc": "883"}, {
    "x": 1693929600000,
    "y": 343,
    "sc": "883"
}, {"x": 1694016000000, "y": 324, "sc": "883"}, {"x": 1694102400000, "y": 347, "sc": "884"}, {
    "x": 1694361600000,
    "y": 334,
    "sc": "883"
}, {"x": 1694448000000, "y": 307, "sc": "883"}, {"x": 1694534400000, "y": 212, "sc": "885"}, {
    "x": 1694620800000,
    "y": 165,
    "sc": "885"
}, {"x": 1694707200000, "y": 139, "sc": "886"}, {"x": 1694966400000, "y": 143, "sc": "883"}, {
    "x": 1695052800000,
    "y": 149,
    "sc": "883"
}, {"x": 1695139200000, "y": 147, "sc": "884"}, {"x": 1695225600000, "y": 152, "sc": "884"}, {
    "x": 1695312000000,
    "y": 179,
    "sc": "885"
}, {"x": 1695571200000, "y": 173, "sc": "884"}, {"x": 1695657600000, "y": 174, "sc": "884"}, {
    "x": 1695744000000,
    "y": 176,
    "sc": "886"
}, {"x": 1695830400000, "y": 189, "sc": "887"}, {"x": 1696780800000, "y": 175, "sc": "891"}, {
    "x": 1696867200000,
    "y": 170,
    "sc": "891"
}, {"x": 1696953600000, "y": 197, "sc": "894"}, {"x": 1697040000000, "y": 207, "sc": "894"}, {
    "x": 1697126400000,
    "y": 162,
    "sc": "895"
}, {"x": 1697385600000, "y": 154, "sc": "895"}, {"x": 1697472000000, "y": 184, "sc": "895"}, {
    "x": 1697558400000,
    "y": 194,
    "sc": "895"
}, {"x": 1697644800000, "y": 209, "sc": "895"}, {"x": 1697731200000, "y": 223, "sc": "896"}, {
    "x": 1697990400000,
    "y": 206,
    "sc": "895"
}, {"x": 1698076800000, "y": 253, "sc": "895"}, {"x": 1698163200000, "y": 214, "sc": "899"}, {
    "x": 1698249600000,
    "y": 249,
    "sc": "899"
}, {"x": 1698336000000, "y": 334, "sc": "900"}, {"x": 1698595200000, "y": 364, "sc": "899"}, {
    "x": 1698681600000,
    "y": 285,
    "sc": "899"
}, {"x": 1698768000000, "y": 288, "sc": "899"}, {"x": 1698854400000, "y": 235, "sc": "899"}, {
    "x": 1698940800000,
    "y": 284,
    "sc": "901"
}, {"x": 1699200000000, "y": 338, "sc": "900"}, {"x": 1699286400000, "y": 332, "sc": "900"}, {
    "x": 1699372800000,
    "y": 380,
    "sc": "900"
}, {"x": 1699459200000, "y": 387, "sc": "902"}, {"x": 1699545600000, "y": 353, "sc": "901"}, {
    "x": 1699804800000,
    "y": 374,
    "sc": "900"
}, {"x": 1699891200000, "y": 389, "sc": "901"}, {"x": 1699977600000, "y": 474, "sc": "901"}, {
    "x": 1700064000000,
    "y": 425,
    "sc": "902"
}, {"x": 1700150400000, "y": 396, "sc": "903"}, {"x": 1700409600000, "y": 476, "sc": "902"}, {
    "x": 1700496000000,
    "y": 472,
    "sc": "903"
}, {"x": 1700582400000, "y": 448, "sc": "905"}, {"x": 1700668800000, "y": 550, "sc": "905"}, {
    "x": 1700755200000,
    "y": 467,
    "sc": "906"
}, {"x": 1701014400000, "y": 579, "sc": "905"}, {"x": 1701100800000, "y": 567, "sc": "905"}, {
    "x": 1701187200000,
    "y": 472,
    "sc": "905"
}, {"x": 1701273600000, "y": 417, "sc": "905"}, {"x": 1701360000000, "y": 419, "sc": "907"}, {
    "x": 1701619200000,
    "y": 387,
    "sc": "906"
}, {"x": 1701705600000, "y": 386, "sc": "908"}, {"x": 1701792000000, "y": 389, "sc": "908"}, {
    "x": 1701878400000,
    "y": 378,
    "sc": "908"
}, {"x": 1701964800000, "y": 414, "sc": "910"}, {"x": 1702224000000, "y": 432, "sc": "910"}, {
    "x": 1702310400000,
    "y": 429,
    "sc": "910"
}, {"x": 1702396800000, "y": 479, "sc": "910"}, {"x": 1702483200000, "y": 510, "sc": "910"}, {
    "x": 1702569600000,
    "y": 522,
    "sc": "912"
}, {"x": 1702828800000, "y": 482, "sc": "911"}, {"x": 1702915200000, "y": 525, "sc": "913"}, {
    "x": 1703001600000,
    "y": 529,
    "sc": "913"
}, {"x": 1703088000000, "y": 553, "sc": "913"}, {"x": 1703174400000, "y": 490, "sc": "914"}, {
    "x": 1703433600000,
    "y": 553,
    "sc": "913"
}, {"x": 1703520000000, "y": 464, "sc": "913"}, {"x": 1703606400000, "y": 482, "sc": "914"}, {
    "x": 1703692800000,
    "y": 515,
    "sc": "914"
}, {"x": 1703779200000, "y": 528, "sc": "915"}, {"x": 1703952000000, "y": 528, "sc": "915"}, {
    "x": 1704124800000,
    "y": 465,
    "sc": "914"
}, {"x": 1704211200000, "y": 390, "sc": "914"}, {"x": 1704297600000, "y": 348, "sc": "914"}, {
    "x": 1704384000000,
    "y": 313,
    "sc": "915"
}, {"x": 1704643200000, "y": 298, "sc": "914"}, {"x": 1704729600000, "y": 340, "sc": "914"}, {
    "x": 1704816000000,
    "y": 340,
    "sc": "914"
}, {"x": 1704902400000, "y": 389, "sc": "914"}, {"x": 1704988800000, "y": 379, "sc": "915"}, {
    "x": 1705248000000,
    "y": 400,
    "sc": "914"
}, {"x": 1705334400000, "y": 481, "sc": "914"}, {"x": 1705420800000, "y": 389, "sc": "914"}, {
    "x": 1705507200000,
    "y": 426,
    "sc": "915"
}, {"x": 1705593600000, "y": 384, "sc": "916"}, {"x": 1705852800000, "y": 370, "sc": "915"}, {
    "x": 1705939200000,
    "y": 412,
    "sc": "915"
}, {"x": 1706025600000, "y": 341, "sc": "919"}, {"x": 1706112000000, "y": 364, "sc": "919"}, {
    "x": 1706198400000,
    "y": 308,
    "sc": "920"
}, {"x": 1706457600000, "y": 206, "sc": "920"}, {"x": 1706544000000, "y": 169, "sc": "920"}, {
    "x": 1706630400000,
    "y": 189,
    "sc": "925"
}, {"x": 1706716800000, "y": 185, "sc": "925"}, {"x": 1706803200000, "y": 188, "sc": "926"}, {
    "x": 1707062400000,
    "y": 193,
    "sc": "925"
}, {"x": 1707148800000, "y": 147, "sc": "927"}, {"x": 1707235200000, "y": 171, "sc": "927"}, {
    "x": 1707321600000,
    "y": 174,
    "sc": "930"
}, {"x": 1708272000000, "y": 225, "sc": "933"}, {"x": 1708358400000, "y": 204, "sc": "933"}, {
    "x": 1708444800000,
    "y": 226,
    "sc": "935"
}, {"x": 1708531200000, "y": 242, "sc": "935"}, {"x": 1708617600000, "y": 252, "sc": "936"}, {
    "x": 1708876800000,
    "y": 298,
    "sc": "935"
}, {"x": 1708963200000, "y": 320, "sc": "933"}, {"x": 1709049600000, "y": 278, "sc": "933"}, {
    "x": 1709136000000,
    "y": 328,
    "sc": "933"
}, {"x": 1709222400000, "y": 331, "sc": "934"}, {"x": 1709481600000, "y": 385, "sc": "933"}, {
    "x": 1709568000000,
    "y": 392,
    "sc": "935"
}, {"x": 1709654400000, "y": 372, "sc": "935"}, {"x": 1709740800000, "y": 386, "sc": "937"}, {
    "x": 1709827200000,
    "y": 384,
    "sc": "938"
}, {"x": 1710086400000, "y": 416, "sc": "937"}, {"x": 1710172800000, "y": 483, "sc": "940"}, {
    "x": 1710259200000,
    "y": 495,
    "sc": "941"
}, {"x": 1710345600000, "y": 526, "sc": "942"}, {"x": 1710432000000, "y": 558, "sc": "943"}, {
    "x": 1710691200000,
    "y": 602,
    "sc": "942"
}, {"x": 1710777600000, "y": 595, "sc": "942"}, {"x": 1710864000000, "y": 619, "sc": "938"}, {
    "x": 1710950400000,
    "y": 611,
    "sc": "938"
}, {"x": 1711036800000, "y": 563, "sc": "943"}, {"x": 1711296000000, "y": 537, "sc": "940"}, {
    "x": 1711382400000,
    "y": 554,
    "sc": "943"
}, {"x": 1711468800000, "y": 465, "sc": "945"}, {"x": 1711555200000, "y": 464, "sc": "945"}, {
    "x": 1711641600000,
    "y": 430,
    "sc": "946"
}, {"x": 1711900800000, "y": 466, "sc": "943"}, {"x": 1711987200000, "y": 507, "sc": "943"}, {
    "x": 1712073600000,
    "y": 487,
    "sc": "944"
}, {"x": 1712505600000, "y": 540, "sc": "943"}, {"x": 1712592000000, "y": 557, "sc": "943"}, {
    "x": 1712678400000,
    "y": 494,
    "sc": "944"
}, {"x": 1712764800000, "y": 442, "sc": "944"}, {"x": 1712851200000, "y": 410, "sc": "945"}, {
    "x": 1713110400000,
    "y": 400,
    "sc": "944"
}, {"x": 1713196800000, "y": 350, "sc": "944"}, {"x": 1713283200000, "y": 353, "sc": "944"}, {
    "x": 1713369600000,
    "y": 335,
    "sc": "944"
}, {"x": 1713456000000, "y": 330, "sc": "945"}, {"x": 1713715200000, "y": 325, "sc": "944"}, {
    "x": 1713801600000,
    "y": 369,
    "sc": "944"
}, {"x": 1713888000000, "y": 427, "sc": "944"}, {"x": 1713974400000, "y": 435, "sc": "944"}, {
    "x": 1714060800000,
    "y": 555,
    "sc": "945"
}, {"x": 1714320000000, "y": 636, "sc": "944"}, {"x": 1714406400000, "y": 686, "sc": "945"}, {
    "x": 1714924800000,
    "y": 775,
    "sc": "945"
}, {"x": 1715011200000, "y": 750, "sc": "947"}, {"x": 1715097600000, "y": 699, "sc": "947"}, {
    "x": 1715184000000,
    "y": 745,
    "sc": "947"
}, {"x": 1715270400000, "y": 698, "sc": "948"}, {"x": 1715529600000, "y": 621, "sc": "947"}, {
    "x": 1715616000000,
    "y": 614,
    "sc": "947"
}, {"x": 1715702400000, "y": 613, "sc": "947"}];/*同类排名百分比*/
var Data_rateInSimilarPersent = [[1438790400000, 12.2400], [1438876800000, 14.1400], [1439136000000, 18.3700], [1439222400000, 28.5700], [1439308800000, 38.3800], [1439395200000, 39.3900], [1439481600000, 37.00], [1439740800000, 34.00], [1439827200000, 37.6200], [1439913600000, 45.5400], [1440000000000, 49.0200], [1440086400000, 60.1900], [1440345600000, 41.7500], [1440432000000, 45.6300], [1440518400000, 50.0], [1440604800000, 47.1200], [1440691200000, 37.1400], [1440950400000, 28.8500], [1441036800000, 31.7300], [1441123200000, 39.8100], [1441555200000, 26.8500], [1441641600000, 20.3700], [1441728000000, 18.1800], [1441814400000, 25.4500], [1441900800000, 28.8300], [1442160000000, 27.2700], [1442246400000, 22.7300], [1442332800000, 20.9100], [1442419200000, 22.7300], [1442505600000, 18.9200], [1442764800000, 14.2900], [1442851200000, 15.1800], [1442937600000, 15.0400], [1443024000000, 15.6500], [1443110400000, 14.5300], [1443369600000, 5.1700], [1443456000000, 5.9800], [1443542400000, 8.4700], [1444233600000, 11.8600], [1444320000000, 28.5700], [1444579200000, 28.5700], [1444665600000, 24.3700], [1444752000000, 15.00], [1444838400000, 20.8300], [1444924800000, 11.5700], [1445184000000, 8.3300], [1445270400000, 6.6700], [1445356800000, 3.3300], [1445443200000, 3.3300], [1445529600000, 2.4800], [1445788800000, 5.8300], [1445875200000, 18.1800], [1445961600000, 18.1800], [1446048000000, 14.7500], [1446134400000, 12.2000], [1446393600000, 10.5700], [1446480000000, 18.7000], [1446566400000, 12.1000], [1446652800000, 12.9000], [1446739200000, 25.00], [1446998400000, 9.3000], [1447084800000, 20.1600], [1447171200000, 22.4800], [1447257600000, 27.1300], [1447344000000, 16.1500], [1447603200000, 32.5600], [1447689600000, 20.9300], [1447776000000, 30.7700], [1447862400000, 32.3100], [1447948800000, 41.2200], [1448208000000, 40.4600], [1448294400000, 58.7800], [1448380800000, 63.3600], [1448467200000, 65.1500], [1448553600000, 65.4100], [1448812800000, 72.7300], [1448899200000, 87.3100], [1448985600000, 80.6000], [1449072000000, 82.8400], [1449158400000, 83.7000], [1449417600000, 82.8400], [1449504000000, 85.8200], [1449590400000, 89.5500], [1449676800000, 88.0600], [1449763200000, 88.8900], [1450022400000, 89.5500], [1450108800000, 88.8100], [1450195200000, 88.8100], [1450281600000, 89.5500], [1450368000000, 89.6300], [1450627200000, 90.3000], [1450713600000, 90.3000], [1450800000000, 91.7900], [1450886400000, 91.7900], [1450972800000, 91.8500], [1451232000000, 93.2800], [1451318400000, 94.7800], [1451404800000, 94.8500], [1451491200000, 94.8900], [1451836800000, 94.8500], [1451923200000, 93.3800], [1452009600000, 93.3800], [1452096000000, 93.3800], [1452182400000, 90.5100], [1452441600000, 83.8200], [1452528000000, 72.7900], [1452614400000, 70.5900], [1452700800000, 75.7400], [1452787200000, 82.4800], [1453046400000, 91.1800], [1453132800000, 89.7100], [1453219200000, 88.2400], [1453305600000, 91.9700], [1453392000000, 88.4100], [1453651200000, 91.9700], [1453737600000, 87.5900], [1453824000000, 78.8300], [1453910400000, 72.6600], [1453996800000, 78.5700], [1454256000000, 85.6100], [1454342400000, 92.8100], [1454428800000, 92.1400], [1454515200000, 90.7100], [1454601600000, 87.9400], [1455465600000, 83.6900], [1455552000000, 78.7200], [1455638400000, 79.4300], [1455724800000, 85.8200], [1455811200000, 80.9900], [1456070400000, 77.3000], [1456156800000, 83.6900], [1456243200000, 77.3000], [1456329600000, 68.0900], [1456416000000, 65.0300], [1456675200000, 62.6800], [1456761600000, 47.8900], [1456848000000, 64.5800], [1456934400000, 56.9400], [1457020800000, 42.7600], [1457280000000, 40.0], [1457366400000, 32.4100], [1457452800000, 28.2800], [1457539200000, 30.8200], [1457625600000, 28.3800], [1457884800000, 29.2500], [1457971200000, 34.6900], [1458057600000, 29.9300], [1458144000000, 31.2900], [1458230400000, 33.1100], [1458489600000, 45.5800], [1458576000000, 48.3000], [1458662400000, 58.5000], [1458748800000, 55.1000], [1458835200000, 31.0800], [1459094400000, 41.5000], [1459180800000, 35.1400], [1459267200000, 28.00], [1459353600000, 30.6700], [1459440000000, 30.4600], [1459785600000, 43.3300], [1459872000000, 45.3300], [1459958400000, 48.6700], [1460044800000, 68.2100], [1460304000000, 83.3300], [1460390400000, 88.6700], [1460476800000, 87.3300], [1460563200000, 83.3300], [1460649600000, 78.1500], [1460908800000, 53.3300], [1460995200000, 52.00], [1461081600000, 44.7400], [1461168000000, 52.6300], [1461254400000, 53.2500], [1461513600000, 46.0500], [1461600000000, 65.3600], [1461686400000, 69.4800], [1461772800000, 79.8700], [1461859200000, 75.00], [1462204800000, 53.1600], [1462291200000, 58.4900], [1462377600000, 52.8300], [1462464000000, 63.7500], [1462723200000, 69.8100], [1462809600000, 73.5800], [1462896000000, 70.4400], [1462982400000, 71.0700], [1463068800000, 73.1200], [1463328000000, 69.1800], [1463414400000, 72.3300], [1463500800000, 62.2600], [1463587200000, 66.6700], [1463673600000, 71.2500], [1463932800000, 72.500], [1464019200000, 81.2500], [1464105600000, 88.7500], [1464192000000, 96.8800], [1464278400000, 96.2700], [1464537600000, 97.500], [1464624000000, 96.2500], [1464710400000, 95.6500], [1464796800000, 93.1700], [1464883200000, 93.8300], [1465142400000, 94.4100], [1465228800000, 91.9300], [1465315200000, 91.9800], [1465747200000, 95.0900], [1465833600000, 94.4800], [1465920000000, 90.3600], [1466006400000, 90.9600], [1466092800000, 89.2200], [1466352000000, 88.5500], [1466438400000, 87.9500], [1466524800000, 82.6300], [1466611200000, 77.8400], [1466697600000, 74.4000], [1466956800000, 85.6300], [1467043200000, 79.6400], [1467129600000, 79.0400], [1467216000000, 83.9300], [1467302400000, 83.3300], [1467561600000, 76.6500], [1467648000000, 75.4500], [1467734400000, 70.0600], [1467820800000, 72.4600], [1467907200000, 76.1900], [1468166400000, 66.6700], [1468252800000, 64.2900], [1468339200000, 67.2600], [1468425600000, 62.500], [1468512000000, 59.5200], [1468771200000, 57.7400], [1468857600000, 64.8800], [1468944000000, 74.5600], [1469030400000, 65.6800], [1469116800000, 67.4600], [1469376000000, 72.1900], [1469462400000, 66.0700], [1469548800000, 55.9500], [1469635200000, 52.9800], [1469721600000, 53.8500], [1469980800000, 53.5700], [1470067200000, 50.0], [1470153600000, 47.6200], [1470240000000, 39.8800], [1470326400000, 42.6000], [1470585600000, 32.1400], [1470672000000, 25.00], [1470758400000, 26.7900], [1470844800000, 28.5700], [1470931200000, 32.5400], [1471190400000, 25.00], [1471276800000, 17.2600], [1471363200000, 14.8800], [1471449600000, 14.2900], [1471536000000, 14.7900], [1471795200000, 14.2900], [1471881600000, 14.2900], [1471968000000, 16.6700], [1472054400000, 14.8800], [1472140800000, 11.2400], [1472400000000, 10.0], [1472486400000, 10.0], [1472572800000, 9.4100], [1472659200000, 9.4100], [1472745600000, 9.9400], [1473004800000, 10.0], [1473091200000, 8.2400], [1473177600000, 8.8200], [1473264000000, 11.7000], [1473350400000, 11.6300], [1473609600000, 12.2800], [1473696000000, 12.2800], [1473782400000, 9.3000], [1474214400000, 9.9400], [1474300800000, 9.9400], [1474387200000, 8.1900], [1474473600000, 9.3600], [1474560000000, 8.1400], [1474819200000, 8.7700], [1474905600000, 9.9400], [1474992000000, 11.7000], [1475078400000, 12.3500], [1475164800000, 11.7000], [1476028800000, 12.3500], [1476115200000, 13.4500], [1476201600000, 20.4700], [1476288000000, 17.4400], [1476374400000, 19.0800], [1476633600000, 19.1900], [1476720000000, 20.3500], [1476806400000, 22.6700], [1476892800000, 27.9100], [1476979200000, 29.6500], [1477238400000, 23.5600], [1477324800000, 18.9700], [1477411200000, 18.3900], [1477497600000, 30.8600], [1477584000000, 39.7700], [1477843200000, 38.2900], [1477929600000, 44.00], [1478016000000, 44.00], [1478102400000, 47.4300], [1478188800000, 48.8600], [1478448000000, 40.5700], [1478534400000, 42.2900], [1478620800000, 34.4600], [1478707200000, 34.2700], [1478793600000, 34.0800], [1479052800000, 33.1500], [1479139200000, 39.8900], [1479225600000, 51.1200], [1479312000000, 56.1800], [1479398400000, 54.1900], [1479657600000, 62.3600], [1479744000000, 57.2200], [1479830400000, 58.8900], [1479916800000, 49.4400], [1480003200000, 48.6200], [1480262400000, 43.3300], [1480348800000, 47.2200], [1480435200000, 49.1900], [1480521600000, 43.7800], [1480608000000, 38.7100], [1480867200000, 45.4100], [1480953600000, 53.5100], [1481040000000, 63.4900], [1481126400000, 65.0800], [1481212800000, 66.8400], [1481472000000, 41.8000], [1481558400000, 37.5700], [1481644800000, 42.8600], [1481731200000, 51.8500], [1481817600000, 56.8400], [1482076800000, 61.3800], [1482163200000, 70.9000], [1482249600000, 76.7200], [1482336000000, 82.0100], [1482422400000, 92.6300], [1482681600000, 82.3500], [1482768000000, 82.3500], [1482854400000, 85.7100], [1482940800000, 88.9500], [1483027200000, 89.5300], [1483113600000, 89.4200], [1483372800000, 86.8400], [1483459200000, 84.2100], [1483545600000, 85.2600], [1483632000000, 79.5800], [1483891200000, 76.3200], [1483977600000, 78.9500], [1484064000000, 73.1600], [1484150400000, 61.5800], [1484236800000, 64.9200], [1484496000000, 73.6800], [1484582400000, 75.7900], [1484668800000, 71.0500], [1484755200000, 70.5300], [1484841600000, 62.8300], [1485100800000, 60.0], [1485187200000, 61.0500], [1485273600000, 65.4300], [1485360000000, 67.2000], [1486051200000, 61.9300], [1486310400000, 58.1600], [1486396800000, 61.7300], [1486483200000, 60.2000], [1486569600000, 65.8200], [1486656000000, 53.7700], [1486915200000, 52.2600], [1487001600000, 50.2500], [1487088000000, 51.2600], [1487174400000, 49.7500], [1487260800000, 50.2500], [1487520000000, 46.500], [1487606400000, 47.500], [1487692800000, 45.00], [1487779200000, 42.500], [1487865600000, 41.7900], [1488124800000, 46.500], [1488211200000, 56.00], [1488297600000, 54.500], [1488384000000, 59.500], [1488470400000, 61.1900], [1488729600000, 56.00], [1488816000000, 58.7100], [1488902400000, 57.7100], [1488988800000, 65.6700], [1489075200000, 65.3500], [1489334400000, 86.5700], [1489420800000, 85.0700], [1489507200000, 81.0900], [1489593600000, 73.1300], [1489680000000, 74.2600], [1489939200000, 63.6800], [1490025600000, 62.6900], [1490112000000, 55.7200], [1490198400000, 51.2400], [1490284800000, 49.0100], [1490544000000, 46.2700], [1490630400000, 45.7700], [1490716800000, 40.8900], [1490803200000, 36.1800], [1490889600000, 36.500], [1491321600000, 41.3800], [1491408000000, 42.1600], [1491494400000, 48.7800], [1491753600000, 42.6500], [1491840000000, 46.0800], [1491926400000, 43.1400], [1492012800000, 40.2000], [1492099200000, 40.0], [1492358400000, 32.500], [1492444800000, 34.1500], [1492531200000, 31.5500], [1492617600000, 35.4400], [1492704000000, 30.4300], [1492963200000, 43.0000], [1493049600000, 41.3500], [1493136000000, 50.4800], [1493222400000, 48.5600], [1493308800000, 46.8900], [1493654400000, 44.2300], [1493740800000, 43.6300], [1493827200000, 41.3500], [1493913600000, 39.7100], [1494172800000, 40.8700], [1494259200000, 43.2700], [1494345600000, 46.6300], [1494432000000, 44.2300], [1494518400000, 49.2800], [1494777600000, 45.1900], [1494864000000, 45.6700], [1494950400000, 42.3100], [1495036800000, 45.1900], [1495123200000, 42.1100], [1495382400000, 43.7500], [1495468800000, 53.1100], [1495555200000, 51.2000], [1495641600000, 54.1500], [1495728000000, 52.9100], [1496160000000, 51.6700], [1496246400000, 52.6300], [1496332800000, 51.4300], [1496592000000, 47.3700], [1496678400000, 48.8000], [1496764800000, 47.8500], [1496851200000, 47.6200], [1496937600000, 52.6100], [1497196800000, 56.8700], [1497283200000, 49.2900], [1497369600000, 45.9700], [1497456000000, 43.4000], [1497542400000, 41.4000], [1497801600000, 45.3300], [1497888000000, 36.7400], [1497974400000, 41.4000], [1498060800000, 39.0700], [1498147200000, 40.5500], [1498406400000, 44.5000], [1498492800000, 48.1700], [1498579200000, 46.3300], [1498665600000, 56.4200], [1498752000000, 56.1600], [1499011200000, 50.9200], [1499097600000, 57.8000], [1499184000000, 51.8300], [1499270400000, 54.7900], [1499356800000, 44.5500], [1499616000000, 47.0300], [1499702400000, 47.0300], [1499788800000, 47.5100], [1499875200000, 42.0800], [1499961600000, 46.4000], [1500220800000, 44.8000], [1500307200000, 45.7000], [1500393600000, 40.7200], [1500480000000, 47.9600], [1500566400000, 47.7500], [1500825600000, 44.1400], [1500912000000, 45.0500], [1500998400000, 36.0400], [1501084800000, 40.5400], [1501171200000, 40.8100], [1501430400000, 43.6900], [1501516800000, 43.2400], [1501603200000, 44.5900], [1501689600000, 49.1000], [1501776000000, 52.0200], [1502035200000, 44.5900], [1502121600000, 45.2900], [1502208000000, 42.1500], [1502294400000, 44.3900], [1502380800000, 54.0200], [1502640000000, 47.0900], [1502726400000, 55.6100], [1502812800000, 63.6800], [1502899200000, 60.3500], [1502985600000, 63.1600], [1503244800000, 60.0900], [1503331200000, 60.9600], [1503417600000, 57.0800], [1503504000000, 64.0400], [1503590400000, 55.9000], [1503849600000, 62.7200], [1503936000000, 67.5400], [1504022400000, 64.0400], [1504108800000, 67.9800], [1504195200000, 59.8300], [1504454400000, 64.4700], [1504540800000, 72.3700], [1504627200000, 70.1800], [1504713600000, 75.5500], [1504800000000, 72.7300], [1505059200000, 64.7800], [1505145600000, 62.6100], [1505232000000, 64.7800], [1505318400000, 71.7400], [1505404800000, 76.2900], [1505664000000, 75.4300], [1505750400000, 77.1600], [1505836800000, 84.0500], [1505923200000, 76.9200], [1506009600000, 79.5700], [1506268800000, 84.1900], [1506355200000, 83.7600], [1506441600000, 84.6200], [1506528000000, 88.7000], [1506614400000, 87.500], [1507478400000, 92.0200], [1507564800000, 96.2200], [1507651200000, 96.2200], [1507737600000, 97.0700], [1507824000000, 99.1700], [1508083200000, 97.9100], [1508169600000, 99.1600], [1508256000000, 99.1700], [1508342400000, 99.5800], [1508428800000, 99.5900], [1508688000000, 99.5900], [1508774400000, 98.7600], [1508860800000, 99.5900], [1508947200000, 99.1700], [1509033600000, 98.7600], [1509292800000, 97.5100], [1509379200000, 97.1000], [1509465600000, 94.6700], [1509552000000, 99.1800], [1509638400000, 97.9700], [1509897600000, 95.9200], [1509984000000, 99.1800], [1510070400000, 98.3700], [1510156800000, 95.5100], [1510243200000, 95.1400], [1510502400000, 92.7100], [1510588800000, 96.3600], [1510675200000, 97.1700], [1510761600000, 95.1400], [1510848000000, 94.7600], [1511107200000, 94.7400], [1511193600000, 94.7400], [1511280000000, 95.5500], [1511366400000, 98.3900], [1511452800000, 94.3800], [1511712000000, 95.5600], [1511798400000, 97.5800], [1511884800000, 97.5800], [1511971200000, 97.9800], [1512057600000, 99.200], [1512316800000, 97.1900], [1512403200000, 93.5700], [1512489600000, 96.8300], [1512576000000, 95.2400], [1512662400000, 94.0700], [1512921600000, 96.0300], [1513008000000, 96.4300], [1513094400000, 95.2600], [1513180800000, 95.2600], [1513267200000, 96.1500], [1513526400000, 93.0500], [1513612800000, 93.8200], [1513699200000, 93.0800], [1513785600000, 95.00], [1513872000000, 96.1700], [1514131200000, 95.3100], [1514217600000, 94.9200], [1514304000000, 95.7700], [1514390400000, 91.5700], [1514476800000, 93.1600], [1514649600000, 93.1600], [1514822400000, 91.9800], [1514908800000, 91.6000], [1514995200000, 87.7900], [1515081600000, 88.9700], [1515340800000, 86.6400], [1515427200000, 84.7300], [1515513600000, 80.9200], [1515600000000, 81.3000], [1515686400000, 82.5100], [1515945600000, 82.0600], [1516032000000, 76.3400], [1516118400000, 74.8100], [1516204800000, 71.7600], [1516291200000, 71.4800], [1516550400000, 71.3700], [1516636800000, 69.0800], [1516723200000, 74.4300], [1516809600000, 72.6200], [1516896000000, 77.1900], [1517155200000, 78.3300], [1517241600000, 84.4100], [1517328000000, 74.1400], [1517414400000, 77.1900], [1517500800000, 74.1400], [1517760000000, 73.3800], [1517846400000, 57.2000], [1517932800000, 66.2900], [1518019200000, 78.7900], [1518105600000, 89.3000], [1518364800000, 91.1400], [1518451200000, 89.1000], [1518537600000, 87.3100], [1519228800000, 74.9100], [1519315200000, 76.3800], [1519574400000, 84.8700], [1519660800000, 95.2000], [1519747200000, 96.3200], [1519833600000, 93.7700], [1519920000000, 90.8400], [1520179200000, 97.4700], [1520265600000, 96.0300], [1520352000000, 95.6700], [1520438400000, 92.0600], [1520524800000, 92.7800], [1520784000000, 87.4100], [1520870400000, 88.4900], [1520956800000, 71.0700], [1521043200000, 73.2100], [1521129600000, 72.1400], [1521388800000, 87.1400], [1521475200000, 86.7900], [1521561600000, 79.2900], [1521648000000, 82.5600], [1521734400000, 79.0000], [1521993600000, 86.1200], [1522080000000, 86.8800], [1522166400000, 86.9700], [1522252800000, 83.8000], [1522339200000, 82.5600], [1522598400000, 85.7700], [1522684800000, 86.8300], [1522771200000, 88.3000], [1523203200000, 89.0800], [1523289600000, 87.3200], [1523376000000, 87.3200], [1523462400000, 86.9700], [1523548800000, 88.0300], [1523808000000, 89.4400], [1523894400000, 90.8500], [1523980800000, 90.4900], [1524067200000, 90.9100], [1524153600000, 91.2600], [1524412800000, 86.0100], [1524499200000, 87.1100], [1524585600000, 87.8000], [1524672000000, 86.3200], [1524758400000, 87.0200], [1525190400000, 88.9300], [1525276800000, 89.2400], [1525363200000, 89.2400], [1525622400000, 88.2400], [1525708800000, 88.0100], [1525795200000, 85.2700], [1525881600000, 86.6400], [1525968000000, 85.3700], [1526227200000, 87.4600], [1526313600000, 87.8000], [1526400000000, 87.4600], [1526486400000, 87.4600], [1526572800000, 87.8000], [1526832000000, 86.4400], [1526918400000, 85.3200], [1527004800000, 86.4400], [1527091200000, 86.1000], [1527177600000, 86.4400], [1527436800000, 81.0200], [1527523200000, 83.7300], [1527609600000, 85.0800], [1527696000000, 87.1200], [1527782400000, 87.4600], [1528041600000, 86.8200], [1528128000000, 85.4700], [1528214400000, 83.4500], [1528300800000, 84.1800], [1528387200000, 83.1600], [1528646400000, 80.1300], [1528732800000, 80.1300], [1528819200000, 79.4600], [1528905600000, 82.2700], [1528992000000, 79.9300], [1529337600000, 74.9200], [1529424000000, 75.9200], [1529510400000, 71.1000], [1529596800000, 69.1000], [1529856000000, 72.1900], [1529942400000, 65.8900], [1530028800000, 56.9500], [1530115200000, 57.2800], [1530201600000, 66.5600], [1530460800000, 55.3000], [1530547200000, 55.2300], [1530633600000, 54.8700], [1530720000000, 56.1700], [1530806400000, 61.0400], [1531065600000, 60.3900], [1531152000000, 64.6100], [1531238400000, 63.3100], [1531324800000, 60.0600], [1531411200000, 55.8400], [1531670400000, 45.7800], [1531756800000, 49.3500], [1531843200000, 50.1600], [1531929600000, 60.1900], [1532016000000, 52.1000], [1532275200000, 60.7700], [1532361600000, 66.2400], [1532448000000, 59.1100], [1532534400000, 58.7900], [1532620800000, 55.2700], [1532880000000, 44.4100], [1532966400000, 43.1300], [1533052800000, 53.0400], [1533139200000, 46.9600], [1533225600000, 42.8100], [1533484800000, 49.5200], [1533571200000, 49.2000], [1533657600000, 42.8600], [1533744000000, 40.0], [1533830400000, 42.2200], [1534089600000, 35.9600], [1534176000000, 36.2800], [1534262400000, 30.9100], [1534348800000, 31.2300], [1534435200000, 32.2900], [1534694400000, 26.0200], [1534780800000, 26.9600], [1534867200000, 27.5900], [1534953600000, 28.5300], [1535040000000, 26.0200], [1535299200000, 21.3200], [1535385600000, 24.4500], [1535472000000, 16.9300], [1535558400000, 15.00], [1535644800000, 10.9000], [1535904000000, 11.8400], [1535990400000, 10.9000], [1536076800000, 10.5900], [1536163200000, 12.7700], [1536249600000, 12.4600], [1536508800000, 10.2800], [1536595200000, 11.2100], [1536681600000, 13.4000], [1536768000000, 17.0800], [1536854400000, 19.8800], [1537113600000, 19.8800], [1537200000000, 20.1900], [1537286400000, 17.3900], [1537372800000, 15.0900], [1537459200000, 16.6700], [1537804800000, 22.0800], [1537891200000, 21.9100], [1537977600000, 25.7900], [1538064000000, 29.5000], [1538928000000, 25.9300], [1539014400000, 27.1600], [1539100800000, 37.9600], [1539187200000, 40.4300], [1539273600000, 39.8100], [1539532800000, 41.9800], [1539619200000, 39.2000], [1539705600000, 39.1200], [1539792000000, 41.6700], [1539878400000, 32.7200], [1540137600000, 37.6500], [1540224000000, 33.0200], [1540310400000, 31.7900], [1540396800000, 32.1000], [1540483200000, 32.1000], [1540742400000, 37.3500], [1540828800000, 42.0200], [1540915200000, 38.0400], [1541001600000, 34.9700], [1541088000000, 35.8900], [1541347200000, 31.2900], [1541433600000, 26.0700], [1541520000000, 22.0200], [1541606400000, 25.6900], [1541692800000, 32.4200], [1541952000000, 34.8600], [1542038400000, 38.8400], [1542124800000, 35.7800], [1542211200000, 37.9900], [1542297600000, 47.1100], [1542556800000, 43.7700], [1542643200000, 44.0700], [1542729600000, 43.4700], [1542816000000, 44.9800], [1542902400000, 42.8600], [1543161600000, 43.7700], [1543248000000, 44.9800], [1543334400000, 47.1100], [1543420800000, 52.2800], [1543507200000, 51.9800], [1543766400000, 48.9400], [1543852800000, 49.8500], [1543939200000, 46.2000], [1544025600000, 50.7600], [1544112000000, 58.6100], [1544371200000, 74.9200], [1544457600000, 75.2300], [1544544000000, 64.9500], [1544630400000, 57.4000], [1544716800000, 54.8200], [1544976000000, 55.4200], [1545062400000, 47.4300], [1545148800000, 52.8700], [1545235200000, 57.5300], [1545321600000, 59.3400], [1545580800000, 60.1200], [1545667200000, 55.6600], [1545753600000, 56.8400], [1545840000000, 49.5500], [1545926400000, 37.4600], [1546358400000, 32.0400], [1546444800000, 34.1300], [1546531200000, 29.9400], [1546790400000, 38.4400], [1546876800000, 39.0400], [1546963200000, 38.7400], [1547049600000, 27.9300], [1547136000000, 42.9400], [1547395200000, 47.4500], [1547481600000, 41.4400], [1547568000000, 45.0500], [1547654400000, 35.4400], [1547740800000, 24.0200], [1548000000000, 27.0300], [1548086400000, 30.4500], [1548172800000, 31.9400], [1548259200000, 34.0300], [1548345600000, 41.4900], [1548604800000, 40.6000], [1548691200000, 25.0700], [1548777600000, 26.2700], [1548864000000, 25.9800], [1548950400000, 22.3600], [1549814400000, 25.00], [1549900800000, 34.8200], [1549987200000, 32.1400], [1550073600000, 30.9700], [1550160000000, 31.2700], [1550419200000, 20.6500], [1550505600000, 27.1400], [1550592000000, 27.1400], [1550678400000, 26.8400], [1550764800000, 30.5900], [1551024000000, 34.3100], [1551110400000, 37.5400], [1551196800000, 38.7100], [1551283200000, 32.8500], [1551369600000, 27.0300], [1551628800000, 24.7100], [1551715200000, 28.2000], [1551801600000, 29.3600], [1551888000000, 34.8800], [1551974400000, 42.1500], [1552233600000, 39.2400], [1552320000000, 41.5700], [1552406400000, 46.8000], [1552492800000, 41.8600], [1552579200000, 39.8300], [1552838400000, 40.4100], [1552924800000, 39.3600], [1553011200000, 35.2800], [1553097600000, 37.0300], [1553184000000, 37.0300], [1553443200000, 35.2800], [1553529600000, 35.0700], [1553616000000, 46.6700], [1553702400000, 52.1700], [1553788800000, 46.6700], [1554048000000, 46.9600], [1554134400000, 50.4300], [1554220800000, 57.9700], [1554307200000, 58.5500], [1554652800000, 53.0400], [1554739200000, 48.4100], [1554825600000, 60.0], [1554912000000, 55.9400], [1554998400000, 60.5800], [1555257600000, 67.5400], [1555344000000, 75.9400], [1555430400000, 74.9300], [1555516800000, 83.2900], [1555603200000, 83.8700], [1555862400000, 78.0100], [1555948800000, 75.7900], [1556035200000, 74.6400], [1556121600000, 71.1800], [1556208000000, 71.1800], [1556467200000, 73.2600], [1556553600000, 72.8300], [1557072000000, 74.8600], [1557158400000, 72.5700], [1557244800000, 76.2900], [1557331200000, 74.5700], [1557417600000, 73.1400], [1557676800000, 70.0600], [1557763200000, 72.8600], [1557849600000, 70.5700], [1557936000000, 72.2900], [1558022400000, 72.5700], [1558281600000, 76.9200], [1558368000000, 77.4900], [1558454400000, 77.4900], [1558540800000, 76.3500], [1558627200000, 76.0700], [1558886400000, 74.6400], [1558972800000, 71.7500], [1559059200000, 71.7500], [1559145600000, 70.6200], [1559232000000, 69.4900], [1559491200000, 77.1200], [1559577600000, 78.8100], [1559664000000, 78.4300], [1559750400000, 74.7900], [1560096000000, 65.5500], [1560182400000, 60.5000], [1560268800000, 60.7800], [1560355200000, 59.6100], [1560441600000, 63.5100], [1560700800000, 65.7400], [1560787200000, 64.6200], [1560873600000, 65.7400], [1560960000000, 61.9400], [1561046400000, 54.7200], [1561305600000, 51.1100], [1561392000000, 51.6700], [1561478400000, 54.2900], [1561564800000, 53.4600], [1561651200000, 50.9700], [1561910400000, 53.8000], [1561996800000, 54.5700], [1562083200000, 46.7000], [1562169600000, 52.4700], [1562256000000, 53.3000], [1562515200000, 52.7500], [1562601600000, 54.4000], [1562688000000, 43.4100], [1562774400000, 44.5100], [1562860800000, 37.9100], [1563120000000, 27.7500], [1563206400000, 29.4000], [1563292800000, 29.1200], [1563379200000, 24.4500], [1563465600000, 21.9800], [1563724800000, 23.9000], [1563811200000, 24.7300], [1563897600000, 28.8500], [1563984000000, 24.0400], [1564070400000, 25.4100], [1564329600000, 24.3200], [1564416000000, 23.2200], [1564502400000, 24.8600], [1564588800000, 22.4000], [1564675200000, 22.1300], [1564934400000, 22.9500], [1565020800000, 27.1700], [1565107200000, 25.8200], [1565193600000, 20.1100], [1565280000000, 23.1000], [1565539200000, 29.8900], [1565625600000, 29.6200], [1565712000000, 27.8400], [1565798400000, 25.4100], [1565884800000, 29.7300], [1566144000000, 32.4300], [1566230400000, 33.5100], [1566316800000, 36.2200], [1566403200000, 34.3200], [1566489600000, 34.0500], [1566748800000, 39.7300], [1566835200000, 39.0800], [1566921600000, 41.2400], [1567008000000, 45.1600], [1567094400000, 49.0600], [1567353600000, 51.7400], [1567440000000, 53.3500], [1567526400000, 48.7900], [1567612800000, 50.400], [1567699200000, 49.3400], [1567958400000, 53.8500], [1568044800000, 57.8200], [1568131200000, 55.2800], [1568217600000, 54.7200], [1568563200000, 52.5200], [1568649600000, 50.1300], [1568736000000, 49.6000], [1568822400000, 52.1200], [1568908800000, 56.0800], [1569168000000, 54.5000], [1569254400000, 55.2900], [1569340800000, 55.0300], [1569427200000, 55.0300], [1569513600000, 56.1800], [1569772800000, 56.1800], [1570464000000, 49.0800], [1570550400000, 52.7400], [1570636800000, 51.7000], [1570723200000, 50.1300], [1570982400000, 51.9600], [1571068800000, 51.8300], [1571155200000, 48.1700], [1571241600000, 48.1700], [1571328000000, 50.3900], [1571587200000, 53.9300], [1571673600000, 48.9500], [1571760000000, 44.7600], [1571846400000, 41.1000], [1571932800000, 42.5600], [1572192000000, 39.2700], [1572278400000, 41.6200], [1572364800000, 45.5500], [1572451200000, 46.8800], [1572537600000, 50.2600], [1572796800000, 51.7000], [1572883200000, 53.2600], [1572969600000, 55.8700], [1573056000000, 59.7900], [1573142400000, 60.9400], [1573401600000, 59.0100], [1573488000000, 53.5200], [1573574400000, 51.4400], [1573660800000, 56.1400], [1573747200000, 62.7600], [1574006400000, 53.7900], [1574092800000, 52.7400], [1574179200000, 52.7400], [1574265600000, 57.7000], [1574352000000, 62.500], [1574611200000, 67.1000], [1574697600000, 63.9700], [1574784000000, 63.4500], [1574870400000, 63.7100], [1574956800000, 63.3500], [1575216000000, 57.8500], [1575302400000, 52.6200], [1575388800000, 61.4600], [1575475200000, 54.1700], [1575561600000, 63.1200], [1575820800000, 63.0200], [1575907200000, 59.6400], [1575993600000, 58.8100], [1576080000000, 58.8100], [1576166400000, 56.0700], [1576425600000, 63.4700], [1576512000000, 71.0600], [1576598400000, 77.8400], [1576684800000, 70.6200], [1576771200000, 75.3200], [1577030400000, 80.1500], [1577116800000, 79.9000], [1577203200000, 78.8000], [1577289600000, 78.9100], [1577376000000, 79.5900], [1577635200000, 80.0500], [1577721600000, 80.6100], [1577894400000, 76.4700], [1577980800000, 75.7700], [1578240000000, 76.7300], [1578326400000, 80.5600], [1578412800000, 81.0700], [1578499200000, 78.2600], [1578585600000, 80.1000], [1578844800000, 79.8000], [1578931200000, 79.0300], [1579017600000, 76.5300], [1579104000000, 75.7700], [1579190400000, 76.7900], [1579449600000, 72.9600], [1579536000000, 70.4100], [1579622400000, 70.9800], [1579708800000, 72.5400], [1580659200000, 72.5200], [1580745600000, 72.5200], [1580832000000, 69.4700], [1580918400000, 67.4300], [1581004800000, 69.4700], [1581264000000, 68.9600], [1581350400000, 68.7000], [1581436800000, 68.1900], [1581523200000, 69.9700], [1581609600000, 69.7200], [1581868800000, 68.9600], [1581955200000, 68.9600], [1582041600000, 70.4800], [1582128000000, 70.1500], [1582214400000, 68.1900], [1582473600000, 65.0500], [1582560000000, 63.2700], [1582646400000, 62.500], [1582732800000, 65.0500], [1582819200000, 64.8900], [1583078400000, 63.7800], [1583164800000, 61.9900], [1583251200000, 67.0900], [1583337600000, 71.6800], [1583424000000, 67.1800], [1583683200000, 67.8600], [1583769600000, 63.3600], [1583856000000, 71.2500], [1583942400000, 69.4700], [1584028800000, 68.2700], [1584288000000, 69.4700], [1584374400000, 67.3400], [1584460800000, 65.7500], [1584547200000, 64.1800], [1584633600000, 64.0200], [1584892800000, 65.9200], [1584979200000, 64.1800], [1585065600000, 65.9300], [1585152000000, 66.1700], [1585238400000, 64.7900], [1585497600000, 68.6300], [1585584000000, 67.6500], [1585670400000, 66.4200], [1585756800000, 64.8600], [1585843200000, 68.1400], [1586188800000, 63.0800], [1586275200000, 67.2400], [1586361600000, 65.7700], [1586448000000, 73.2800], [1586707200000, 77.8900], [1586793600000, 77.3200], [1586880000000, 79.2700], [1586966400000, 82.4400], [1587052800000, 83.7000], [1587312000000, 85.6100], [1587398400000, 85.1600], [1587484800000, 85.4700], [1587571200000, 85.7100], [1587657600000, 85.5100], [1587916800000, 85.4700], [1588003200000, 84.4300], [1588089600000, 87.5900], [1588176000000, 88.5600], [1588694400000, 89.5900], [1588780800000, 84.5000], [1588867200000, 82.6100], [1589126400000, 84.7500], [1589212800000, 81.1100], [1589299200000, 79.9000], [1589385600000, 78.2100], [1589472000000, 79.2300], [1589731200000, 75.7900], [1589817600000, 77.0000], [1589904000000, 76.8100], [1589990400000, 72.1800], [1590076800000, 75.5400], [1590336000000, 76.5000], [1590422400000, 77.9400], [1590508800000, 76.9800], [1590595200000, 80.3400], [1590681600000, 79.3800], [1590940800000, 79.6200], [1591027200000, 78.6600], [1591113600000, 76.9800], [1591200000000, 75.0600], [1591286400000, 74.7000], [1591545600000, 79.0500], [1591632000000, 76.9000], [1591718400000, 74.8200], [1591804800000, 72.2100], [1591891200000, 75.1200], [1592150400000, 75.8300], [1592236800000, 71.0900], [1592323200000, 70.5500], [1592409600000, 67.4500], [1592496000000, 61.4100], [1592755200000, 57.0800], [1592841600000, 54.9800], [1592928000000, 59.8100], [1593360000000, 61.0300], [1593446400000, 58.3100], [1593532800000, 60.8500], [1593619200000, 69.2500], [1593705600000, 65.5700], [1593964800000, 63.8500], [1594051200000, 65.6500], [1594137600000, 62.3800], [1594224000000, 72.0300], [1594310400000, 68.1400], [1594569600000, 62.3300], [1594656000000, 64.8800], [1594742400000, 69.2800], [1594828800000, 72.9800], [1594915200000, 78.1100], [1595174400000, 91.6900], [1595260800000, 88.5100], [1595347200000, 87.4100], [1595433600000, 84.3200], [1595520000000, 92.0600], [1595779200000, 96.3600], [1595865600000, 94.3200], [1595952000000, 90.4500], [1596038400000, 89.0900], [1596124800000, 88.8900], [1596384000000, 89.3200], [1596470400000, 89.5500], [1596556800000, 88.6400], [1596643200000, 92.2700], [1596729600000, 95.7000], [1596988800000, 96.1500], [1597075200000, 95.7000], [1597161600000, 95.4800], [1597248000000, 97.2900], [1597334400000, 97.0700], [1597593600000, 97.2900], [1597680000000, 97.2900], [1597766400000, 97.7400], [1597852800000, 97.7500], [1597939200000, 97.9800], [1598198400000, 95.5800], [1598284800000, 95.8000], [1598371200000, 98.8900], [1598457600000, 98.0100], [1598544000000, 98.4600], [1598803200000, 98.9000], [1598889600000, 98.6800], [1598976000000, 97.8000], [1599062400000, 97.8000], [1599148800000, 98.9000], [1599408000000, 98.4600], [1599494400000, 98.2500], [1599580800000, 98.9000], [1599667200000, 98.4600], [1599753600000, 97.8100], [1600012800000, 96.9400], [1600099200000, 97.1600], [1600185600000, 97.1700], [1600272000000, 97.3900], [1600358400000, 97.8300], [1600617600000, 97.8300], [1600704000000, 98.2600], [1600790400000, 97.6100], [1600876800000, 98.0400], [1600963200000, 98.0400], [1601222400000, 97.8200], [1601308800000, 98.9200], [1601395200000, 97.6100], [1602172800000, 94.3600], [1602432000000, 94.7900], [1602518400000, 95.6600], [1602604800000, 96.9600], [1602691200000, 96.5300], [1602777600000, 96.5400], [1603036800000, 96.1100], [1603123200000, 90.5000], [1603209600000, 89.4200], [1603296000000, 88.1700], [1603382400000, 86.1100], [1603641600000, 78.2100], [1603728000000, 70.6400], [1603814400000, 74.2600], [1603900800000, 64.4100], [1603987200000, 65.5400], [1604246400000, 67.3700], [1604332800000, 70.9700], [1604419200000, 75.1100], [1604505600000, 69.4100], [1604592000000, 62.3900], [1604851200000, 61.2600], [1604937600000, 60.3800], [1605024000000, 68.4800], [1605110400000, 69.1000], [1605196800000, 67.8400], [1605456000000, 66.2500], [1605542400000, 67.5600], [1605628800000, 64.6000], [1605715200000, 65.6300], [1605801600000, 67.1500], [1606060800000, 64.5400], [1606147200000, 64.8900], [1606233600000, 66.3200], [1606320000000, 59.8400], [1606406400000, 60.7300], [1606665600000, 54.4700], [1606752000000, 50.3000], [1606838400000, 52.5300], [1606924800000, 50.5100], [1607011200000, 49.0900], [1607270400000, 53.5400], [1607356800000, 54.1400], [1607443200000, 59.8400], [1607529600000, 62.00], [1607616000000, 64.3400], [1607875200000, 57.5700], [1607961600000, 44.4200], [1608048000000, 42.5400], [1608134400000, 34.0000], [1608220800000, 36.2400], [1608480000000, 35.1900], [1608566400000, 37.7000], [1608652800000, 42.2900], [1608739200000, 46.1700], [1608825600000, 38.6300], [1609084800000, 37.8900], [1609171200000, 40.6200], [1609257600000, 31.6400], [1609344000000, 28.2100], [1609689600000, 29.8800], [1609776000000, 33.4000], [1609862400000, 29.4900], [1609948800000, 28.1200], [1610035200000, 28.6000], [1610294400000, 33.0100], [1610380800000, 26.7600], [1610467200000, 27.7300], [1610553600000, 23.2400], [1610640000000, 23.5400], [1610899200000, 27.8800], [1610985600000, 28.8500], [1611072000000, 24.9000], [1611158400000, 27.6300], [1611244800000, 28.7400], [1611504000000, 25.7300], [1611590400000, 27.4900], [1611676800000, 26.9000], [1611763200000, 30.7400], [1611849600000, 44.6800], [1612108800000, 41.7500], [1612195200000, 36.5000], [1612281600000, 37.0900], [1612368000000, 35.3800], [1612454400000, 35.1800], [1612713600000, 43.9500], [1612800000000, 42.3100], [1612886400000, 42.9100], [1613577600000, 42.5900], [1613664000000, 42.2300], [1613923200000, 51.7100], [1614009600000, 65.3400], [1614096000000, 75.9500], [1614182400000, 72.9200], [1614268800000, 70.1900], [1614528000000, 72.4000], [1614614400000, 71.8300], [1614700800000, 75.5200], [1614787200000, 81.7300], [1614873600000, 81.0500], [1615132800000, 87.0300], [1615219200000, 87.5900], [1615305600000, 85.3400], [1615392000000, 82.7400], [1615478400000, 83.9000], [1615737600000, 89.8700], [1615824000000, 91.2500], [1615910400000, 92.9200], [1615996800000, 92.1600], [1616083200000, 91.8200], [1616342400000, 93.3000], [1616428800000, 92.7400], [1616515200000, 90.3200], [1616601600000, 90.5000], [1616688000000, 90.3500], [1616947200000, 87.9900], [1617033600000, 89.8200], [1617120000000, 90.0], [1617206400000, 89.2700], [1617292800000, 87.6600], [1617638400000, 85.8200], [1617724800000, 85.0900], [1617811200000, 84.7300], [1617897600000, 86.2100], [1618156800000, 88.4500], [1618243200000, 89.0300], [1618329600000, 89.3900], [1618416000000, 86.9200], [1618502400000, 85.8700], [1618761600000, 80.1100], [1618848000000, 85.1100], [1618934400000, 77.1300], [1619020800000, 84.1600], [1619107200000, 82.6500], [1619366400000, 81.6900], [1619452800000, 77.9700], [1619539200000, 73.0000], [1619625600000, 62.0200], [1619712000000, 63.0800], [1620230400000, 61.8300], [1620316800000, 64.2600], [1620576000000, 52.1300], [1620662400000, 49.9100], [1620748800000, 48.5500], [1620835200000, 52.6400], [1620921600000, 51.7000], [1621180800000, 47.1900], [1621267200000, 43.6100], [1621353600000, 38.5000], [1621440000000, 40.0300], [1621526400000, 45.2400], [1621785600000, 19.4600], [1621872000000, 17.6000], [1621958400000, 16.0200], [1622044800000, 22.6000], [1622131200000, 17.3400], [1622390400000, 16.8600], [1622476800000, 14.1700], [1622563200000, 9.0800], [1622649600000, 16.2800], [1622736000000, 14.2400], [1622995200000, 18.7900], [1623081600000, 20.9700], [1623168000000, 22.7400], [1623254400000, 20.5700], [1623340800000, 22.3700], [1623686400000, 25.4200], [1623772800000, 26.4700], [1623859200000, 32.9400], [1623945600000, 29.7700], [1624204800000, 28.4500], [1624291200000, 22.3000], [1624377600000, 23.1800], [1624464000000, 27.2700], [1624550400000, 28.2000], [1624809600000, 31.3600], [1624896000000, 33.3900], [1624982400000, 38.4700], [1625068800000, 35.7300], [1625155200000, 42.6700], [1625414400000, 41.4400], [1625500800000, 43.8800], [1625587200000, 36.0500], [1625673600000, 41.2700], [1625760000000, 30.4600], [1626019200000, 24.3100], [1626105600000, 23.6500], [1626192000000, 21.2100], [1626278400000, 24.1400], [1626364800000, 25.3200], [1626624000000, 24.2300], [1626710400000, 24.8400], [1626796800000, 25.7300], [1626883200000, 27.6700], [1626969600000, 33.1200], [1627228800000, 35.7600], [1627315200000, 44.0300], [1627401600000, 36.6100], [1627488000000, 38.8700], [1627574400000, 43.3200], [1627833600000, 37.9000], [1627920000000, 32.2600], [1628006400000, 29.5200], [1628092800000, 27.9000], [1628179200000, 29.7900], [1628438400000, 33.2300], [1628524800000, 41.7300], [1628611200000, 44.4300], [1628697600000, 47.9300], [1628784000000, 44.3600], [1629043200000, 45.1500], [1629129600000, 45.8700], [1629216000000, 42.6800], [1629302400000, 44.5900], [1629388800000, 47.3800], [1629648000000, 46.8200], [1629734400000, 43.6500], [1629820800000, 42.0900], [1629907200000, 42.2700], [1629993600000, 37.6400], [1630252800000, 39.2700], [1630339200000, 37.5400], [1630425600000, 38.2100], [1630512000000, 37.1100], [1630598400000, 38.3600], [1630857600000, 37.4200], [1630944000000, 33.4900], [1631030400000, 34.6900], [1631116800000, 33.2800], [1631203200000, 33.3300], [1631462400000, 34.0600], [1631548800000, 32.8100], [1631635200000, 30.1700], [1631721600000, 29.8600], [1631808000000, 20.5300], [1632240000000, 28.7900], [1632326400000, 32.1500], [1632412800000, 31.9500], [1632672000000, 25.6900], [1632758400000, 25.3800], [1632844800000, 22.0500], [1632931200000, 17.2800], [1633622400000, 23.1800], [1633881600000, 43.8500], [1633968000000, 48.3300], [1634054400000, 41.7500], [1634140800000, 43.1200], [1634227200000, 39.4300], [1634486400000, 36.1600], [1634572800000, 39.1800], [1634659200000, 33.1800], [1634745600000, 38.0100], [1634832000000, 33.8900], [1635091200000, 29.8600], [1635177600000, 28.7200], [1635264000000, 16.3400], [1635350400000, 27.2900], [1635436800000, 31.5900], [1635696000000, 39.9700], [1635782400000, 47.9000], [1635868800000, 54.3500], [1635955200000, 70.3100], [1636041600000, 79.6700], [1636300800000, 77.2100], [1636387200000, 70.5100], [1636473600000, 65.2700], [1636560000000, 62.7200], [1636646400000, 58.6100], [1636905600000, 74.3300], [1636992000000, 68.1000], [1637078400000, 68.1000], [1637164800000, 71.6000], [1637251200000, 71.7500], [1637510400000, 63.0700], [1637596800000, 71.1800], [1637683200000, 76.3900], [1637769600000, 82.0400], [1637856000000, 75.4700], [1638115200000, 74.6000], [1638201600000, 78.2300], [1638288000000, 69.0900], [1638374400000, 67.8800], [1638460800000, 66.0400], [1638720000000, 69.8100], [1638806400000, 79.4500], [1638892800000, 69.7100], [1638979200000, 78.5500], [1639065600000, 73.2700], [1639324800000, 69.2200], [1639411200000, 78.0300], [1639497600000, 79.9100], [1639584000000, 83.5700], [1639670400000, 89.2100], [1639929600000, 90.4900], [1640016000000, 93.3700], [1640102400000, 94.8100], [1640188800000, 88.9000], [1640275200000, 92.9700], [1640534400000, 96.4100], [1640620800000, 93.7100], [1640707200000, 94.5600], [1640793600000, 97.4200], [1640880000000, 97.00], [1641225600000, 98.2900], [1641312000000, 98.4300], [1641398400000, 98.00], [1641484800000, 97.8600], [1641744000000, 97.5700], [1641830400000, 93.1300], [1641916800000, 93.4400], [1642003200000, 92.3000], [1642089600000, 94.5900], [1642348800000, 95.8600], [1642435200000, 96.4400], [1642521600000, 96.1500], [1642608000000, 97.1500], [1642694400000, 97.8700], [1642953600000, 96.4400], [1643040000000, 95.4500], [1643126400000, 94.3300], [1643212800000, 95.3300], [1643299200000, 93.6400], [1644163200000, 81.5800], [1644249600000, 79.6100], [1644336000000, 75.1100], [1644422400000, 75.6700], [1644508800000, 74.5800], [1644768000000, 74.5400], [1644854400000, 72.5000], [1644940800000, 70.1000], [1645027200000, 69.3900], [1645113600000, 69.1500], [1645372800000, 69.8600], [1645459200000, 64.9300], [1645545600000, 61.6900], [1645632000000, 64.6500], [1645718400000, 70.2700], [1645977600000, 64.4400], [1646064000000, 64.4900], [1646150400000, 69.6300], [1646236800000, 71.6100], [1646323200000, 73.6800], [1646582400000, 73.9300], [1646668800000, 72.4100], [1646755200000, 69.2400], [1646841600000, 73.3800], [1646928000000, 74.8300], [1647187200000, 73.9300], [1647273600000, 73.0400], [1647360000000, 58.7300], [1647446400000, 48.0800], [1647532800000, 53.0200], [1647792000000, 32.6900], [1647878400000, 23.5900], [1647964800000, 29.4900], [1648051200000, 18.3800], [1648137600000, 24.0100], [1648396800000, 32.6500], [1648483200000, 32.3800], [1648569600000, 15.5300], [1648656000000, 17.4400], [1648742400000, 16.0500], [1649174400000, 11.2900], [1649260800000, 7.0700], [1649347200000, 6.7900], [1649606400000, 22.4600], [1649692800000, 26.7900], [1649779200000, 29.1500], [1649865600000, 26.3200], [1649952000000, 29.1100], [1650211200000, 22.8100], [1650297600000, 25.8400], [1650384000000, 29.2100], [1650470400000, 32.1700], [1650556800000, 30.2400], [1650816000000, 47.4600], [1650902400000, 46.3400], [1650988800000, 44.9500], [1651075200000, 40.1900], [1651161600000, 42.7800], [1651680000000, 49.4700], [1651766400000, 51.7900], [1652025600000, 52.3900], [1652112000000, 44.8300], [1652198400000, 34.2600], [1652284800000, 42.9900], [1652371200000, 41.8800], [1652630400000, 46.5200], [1652716800000, 42.9700], [1652803200000, 39.5500], [1652889600000, 36.9300], [1652976000000, 37.0100], [1653235200000, 39.6600], [1653321600000, 42.6700], [1653408000000, 47.3200], [1653494400000, 50.4600], [1653580800000, 44.5200], [1653840000000, 51.2400], [1653926400000, 47.7100], [1654012800000, 57.6800], [1654099200000, 53.4500], [1654444800000, 36.1500], [1654531200000, 33.6800], [1654617600000, 38.1000], [1654704000000, 42.4700], [1654790400000, 45.7600], [1655049600000, 33.5900], [1655136000000, 27.6700], [1655222400000, 37.4500], [1655308800000, 52.7000], [1655395200000, 52.8900], [1655654400000, 50.3900], [1655740800000, 46.7900], [1655827200000, 37.4000], [1655913600000, 30.1700], [1656000000000, 31.6700], [1656259200000, 28.3700], [1656345600000, 25.6400], [1656432000000, 33.3300], [1656518400000, 33.0400], [1656604800000, 31.9800], [1656864000000, 25.7600], [1656950400000, 22.4600], [1657036800000, 16.5000], [1657123200000, 19.6700], [1657209600000, 19.9200], [1657468800000, 17.2600], [1657555200000, 19.5400], [1657641600000, 19.8000], [1657728000000, 19.9500], [1657814400000, 18.3000], [1658073600000, 13.7200], [1658160000000, 15.1200], [1658246400000, 11.9400], [1658332800000, 17.0300], [1658419200000, 20.9700], [1658678400000, 15.1200], [1658764800000, 20.0800], [1658851200000, 21.6000], [1658937600000, 28.8400], [1659024000000, 24.7800], [1659283200000, 23.7600], [1659369600000, 25.9200], [1659456000000, 27.3200], [1659542400000, 26.4300], [1659628800000, 28.0300], [1659888000000, 25.6000], [1659974400000, 26.8700], [1660060800000, 24.5900], [1660147200000, 26.8700], [1660233600000, 24.0800], [1660492800000, 22.9100], [1660579200000, 22.2500], [1660665600000, 22.6300], [1660752000000, 17.5700], [1660838400000, 13.2700], [1661097600000, 16.3500], [1661184000000, 15.9700], [1661270400000, 12.4500], [1661356800000, 8.9300], [1661443200000, 7.3000], [1661702400000, 9.4300], [1661788800000, 8.1800], [1661875200000, 10.0600], [1661961600000, 10.4300], [1662048000000, 8.5400], [1662307200000, 12.3100], [1662393600000, 10.2800], [1662480000000, 15.7900], [1662566400000, 23.4300], [1662652800000, 17.4200], [1662998400000, 21.6800], [1663084800000, 29.1200], [1663171200000, 36.7500], [1663257600000, 33.5800], [1663516800000, 38.3300], [1663603200000, 32.3300], [1663689600000, 36.8300], [1663776000000, 48.2500], [1663862400000, 55.3600], [1664121600000, 46.2600], [1664208000000, 43.7700], [1664294400000, 45.0100], [1664380800000, 44.1400], [1664467200000, 62.7200], [1665331200000, 77.8600], [1665417600000, 74.7500], [1665504000000, 70.5200], [1665590400000, 70.4000], [1665676800000, 76.6200], [1665936000000, 80.6000], [1666022400000, 82.7900], [1666108800000, 75.0600], [1666195200000, 76.2700], [1666281600000, 72.9300], [1666540800000, 78.8900], [1666627200000, 76.0500], [1666713600000, 73.8300], [1666800000000, 77.4000], [1666886400000, 80.0200], [1667145600000, 77.0800], [1667232000000, 75.4900], [1667318400000, 71.8100], [1667404800000, 67.9300], [1667491200000, 64.1400], [1667750400000, 51.9000], [1667836800000, 59.6100], [1667923200000, 61.3200], [1668009600000, 65.7700], [1668096000000, 68.4100], [1668355200000, 69.3900], [1668441600000, 72.6800], [1668528000000, 72.7500], [1668614400000, 76.7000], [1668700800000, 82.5200], [1668960000000, 82.3500], [1669046400000, 84.8900], [1669132800000, 87.3000], [1669219200000, 87.1700], [1669305600000, 88.9800], [1669564800000, 89.1000], [1669651200000, 88.1400], [1669737600000, 88.8600], [1669824000000, 89.7100], [1669910400000, 88.6200], [1670169600000, 87.8900], [1670256000000, 87.7700], [1670342400000, 84.0200], [1670428800000, 80.1500], [1670515200000, 82.9300], [1670774400000, 81.1100], [1670860800000, 79.0600], [1670947200000, 77.1200], [1671033600000, 76.6300], [1671120000000, 76.5100], [1671379200000, 75.9100], [1671465600000, 81.8400], [1671552000000, 79.6600], [1671638400000, 72.2200], [1671724800000, 72.0500], [1671984000000, 81.5900], [1672070400000, 86.4200], [1672156800000, 85.4200], [1672243200000, 83.6900], [1672329600000, 81.2600], [1672675200000, 82.9700], [1672761600000, 83.0900], [1672848000000, 80.8200], [1672934400000, 79.7800], [1673193600000, 78.1800], [1673280000000, 74.8200], [1673366400000, 74.0400], [1673452800000, 76.8600], [1673539200000, 74.7600], [1673798400000, 75.2100], [1673884800000, 73.8900], [1673971200000, 75.8100], [1674057600000, 74.3700], [1674144000000, 76.9400], [1675008000000, 68.5700], [1675094400000, 73.9300], [1675180800000, 77.6200], [1675267200000, 81.1500], [1675353600000, 82.1900], [1675612800000, 85.8000], [1675699200000, 88.5600], [1675785600000, 89.1500], [1675872000000, 86.5300], [1675958400000, 87.5400], [1676217600000, 90.7400], [1676304000000, 90.4000], [1676390400000, 91.3500], [1676476800000, 92.3200], [1676563200000, 91.6500], [1676822400000, 91.8400], [1676908800000, 91.6100], [1676995200000, 90.2600], [1677081600000, 90.2600], [1677168000000, 89.9300], [1677427200000, 88.4200], [1677513600000, 91.6000], [1677600000000, 93.2300], [1677686400000, 94.5200], [1677772800000, 94.7500], [1678032000000, 96.8500], [1678118400000, 97.9000], [1678204800000, 97.2000], [1678291200000, 97.3200], [1678377600000, 98.0200], [1678636800000, 97.5500], [1678723200000, 97.3200], [1678809600000, 98.4800], [1678896000000, 97.3200], [1678982400000, 97.0900], [1679241600000, 96.7400], [1679328000000, 96.3900], [1679414400000, 95.8000], [1679500800000, 92.6600], [1679587200000, 92.5400], [1679846400000, 94.1700], [1679932800000, 94.2900], [1680019200000, 92.6600], [1680105600000, 93.9400], [1680192000000, 92.4200], [1680451200000, 92.2000], [1680537600000, 91.7300], [1680710400000, 90.9200], [1680796800000, 90.1000], [1681056000000, 91.7300], [1681142400000, 92.9000], [1681228800000, 93.2500], [1681315200000, 93.2500], [1681401600000, 91.6300], [1681660800000, 94.5300], [1681747200000, 94.5300], [1681833600000, 94.4100], [1681920000000, 91.7300], [1682006400000, 93.1400], [1682265600000, 93.2500], [1682352000000, 93.6000], [1682438400000, 96.0400], [1682524800000, 96.9700], [1682611200000, 95.5800], [1683129600000, 96.2700], [1683216000000, 96.6300], [1683475200000, 95.1100], [1683561600000, 96.9700], [1683648000000, 96.6300], [1683734400000, 96.4000], [1683820800000, 96.8600], [1684080000000, 96.9800], [1684166400000, 97.1000], [1684252800000, 93.9800], [1684339200000, 92.8200], [1684425600000, 93.1600], [1684684800000, 94.7800], [1684771200000, 94.2100], [1684857600000, 93.1300], [1684944000000, 93.7100], [1685030400000, 91.0500], [1685289600000, 91.2700], [1685376000000, 89.7600], [1685462400000, 89.1700], [1685548800000, 88.4700], [1685635200000, 86.3000], [1685894400000, 85.8300], [1685980800000, 89.5600], [1686067200000, 87.1200], [1686153600000, 89.9300], [1686240000000, 88.0900], [1686499200000, 87.1500], [1686585600000, 83.9100], [1686672000000, 82.6000], [1686758400000, 80.1800], [1686844800000, 76.1800], [1687104000000, 74.2300], [1687190400000, 73.4200], [1687276800000, 78.9000], [1687708800000, 83.4900], [1687795200000, 83.8300], [1687881600000, 86.3500], [1687968000000, 88.8800], [1688054400000, 87.1400], [1688313600000, 82.3000], [1688400000000, 71.6100], [1688486400000, 78.6200], [1688572800000, 75.8600], [1688659200000, 81.8600], [1688918400000, 82.5300], [1689004800000, 78.1000], [1689091200000, 71.6700], [1689177600000, 69.2700], [1689264000000, 78.1200], [1689523200000, 76.6600], [1689609600000, 75.6900], [1689696000000, 77.9800], [1689782400000, 80.8500], [1689868800000, 81.5800], [1690128000000, 83.0500], [1690214400000, 60.6900], [1690300800000, 75.200], [1690387200000, 74.1200], [1690473600000, 71.9800], [1690732800000, 65.9100], [1690819200000, 64.9900], [1690905600000, 62.2600], [1690992000000, 63.6300], [1691078400000, 44.6600], [1691337600000, 48.3500], [1691424000000, 46.6400], [1691510400000, 42.7800], [1691596800000, 47.1000], [1691683200000, 50.9100], [1691942400000, 54.2000], [1692028800000, 66.9300], [1692115200000, 67.0100], [1692201600000, 64.7400], [1692288000000, 66.6300], [1692547200000, 69.5400], [1692633600000, 68.9700], [1692720000000, 74.2400], [1692806400000, 74.6900], [1692892800000, 78.5600], [1693152000000, 76.3300], [1693238400000, 66.8200], [1693324800000, 66.0200], [1693411200000, 68.6300], [1693497600000, 67.1900], [1693756800000, 70.3300], [1693843200000, 68.8600], [1693929600000, 61.1600], [1694016000000, 63.3100], [1694102400000, 60.7500], [1694361600000, 62.1700], [1694448000000, 65.2300], [1694534400000, 76.0500], [1694620800000, 81.3600], [1694707200000, 84.3100], [1694966400000, 83.8100], [1695052800000, 83.1300], [1695139200000, 83.3700], [1695225600000, 82.8100], [1695312000000, 79.7700], [1695571200000, 80.4300], [1695657600000, 80.3200], [1695744000000, 80.1400], [1695830400000, 78.6900], [1696780800000, 80.3600], [1696867200000, 80.9200], [1696953600000, 77.9600], [1697040000000, 76.8500], [1697126400000, 81.9000], [1697385600000, 82.7900], [1697472000000, 79.4400], [1697558400000, 78.3200], [1697644800000, 76.6500], [1697731200000, 75.1100], [1697990400000, 76.9800], [1698076800000, 71.7300], [1698163200000, 76.2000], [1698249600000, 72.3000], [1698336000000, 62.8900], [1698595200000, 59.5100], [1698681600000, 68.3000], [1698768000000, 67.9600], [1698854400000, 73.8600], [1698940800000, 68.4800], [1699200000000, 62.4400], [1699286400000, 63.1100], [1699372800000, 57.7800], [1699459200000, 57.1000], [1699545600000, 60.8200], [1699804800000, 58.4400], [1699891200000, 56.8300], [1699977600000, 47.3900], [1700064000000, 52.8800], [1700150400000, 56.1500], [1700409600000, 47.2300], [1700496000000, 47.7300], [1700582400000, 50.5000], [1700668800000, 39.2300], [1700755200000, 48.4500], [1701014400000, 36.0200], [1701100800000, 37.3500], [1701187200000, 47.8500], [1701273600000, 53.9200], [1701360000000, 53.8000], [1701619200000, 57.2800], [1701705600000, 57.4900], [1701792000000, 57.1600], [1701878400000, 58.3700], [1701964800000, 54.5100], [1702224000000, 52.5300], [1702310400000, 52.8600], [1702396800000, 47.3600], [1702483200000, 43.9600], [1702569600000, 42.7600], [1702828800000, 47.0900], [1702915200000, 42.5000], [1703001600000, 42.0600], [1703088000000, 39.4300], [1703174400000, 46.3900], [1703433600000, 39.4300], [1703520000000, 49.1800], [1703606400000, 47.2600], [1703692800000, 43.6500], [1703779200000, 42.3000], [1703952000000, 42.3000], [1704124800000, 49.1200], [1704211200000, 57.3300], [1704297600000, 61.9300], [1704384000000, 65.7900], [1704643200000, 67.4000], [1704729600000, 62.8000], [1704816000000, 62.8000], [1704902400000, 57.4400], [1704988800000, 58.5800], [1705248000000, 56.2400], [1705334400000, 47.3700], [1705420800000, 57.4400], [1705507200000, 53.4400], [1705593600000, 58.0800], [1705852800000, 59.5600], [1705939200000, 54.9700], [1706025600000, 62.8900], [1706112000000, 60.3900], [1706198400000, 66.5200], [1706457600000, 77.6100], [1706544000000, 81.6300], [1706630400000, 79.5700], [1706716800000, 80.0], [1706803200000, 79.7000], [1707062400000, 79.1400], [1707148800000, 84.1400], [1707235200000, 81.5500], [1707321600000, 81.2900], [1708272000000, 75.8800], [1708358400000, 78.1400], [1708444800000, 75.8300], [1708531200000, 74.1200], [1708617600000, 73.0800], [1708876800000, 68.1300], [1708963200000, 65.7000], [1709049600000, 70.2000], [1709136000000, 64.8400], [1709222400000, 64.5600], [1709481600000, 58.7400], [1709568000000, 58.0700], [1709654400000, 60.2100], [1709740800000, 58.8000], [1709827200000, 59.0600], [1710086400000, 55.6000], [1710172800000, 48.6200], [1710259200000, 47.4000], [1710345600000, 44.1600], [1710432000000, 40.8300], [1710691200000, 36.0900], [1710777600000, 36.8400], [1710864000000, 34.0100], [1710950400000, 34.8600], [1711036800000, 40.3000], [1711296000000, 42.8700], [1711382400000, 41.2500], [1711468800000, 50.7900], [1711555200000, 50.9000], [1711641600000, 54.5500], [1711900800000, 50.5800], [1711987200000, 46.2400], [1712073600000, 48.4100], [1712505600000, 42.7400], [1712592000000, 40.9300], [1712678400000, 47.6700], [1712764800000, 53.1800], [1712851200000, 56.6100], [1713110400000, 57.6300], [1713196800000, 62.9200], [1713283200000, 62.6100], [1713369600000, 64.5100], [1713456000000, 65.0800], [1713715200000, 65.5700], [1713801600000, 60.9100], [1713888000000, 54.7700], [1713974400000, 53.9200], [1714060800000, 41.2700], [1714320000000, 32.6300], [1714406400000, 27.4100], [1714924800000, 17.9900], [1715011200000, 20.8000], [1715097600000, 26.1900], [1715184000000, 21.3300], [1715270400000, 26.3700], [1715529600000, 34.4200], [1715616000000, 35.1600], [1715702400000, 35.2700]];/*规模变动 mom-较上期环比*/
var Data_fluctuationScale = {
    "categories": ["2023-03-31", "2023-06-30", "2023-09-30", "2023-12-31", "2024-03-31"],
    "series": [{"y": 11.96, "mom": "8.82%"}, {"y": 17.46, "mom": "46.04%"}, {"y": 15.04, "mom": "-13.88%"}, {
        "y": 15.52,
        "mom": "3.20%"
    }, {"y": 19.28, "mom": "24.24%"}]
};/*持有人结构*/
var Data_holderStructure = {
    "series": [{
        "name": "机构持有比例",
        "data": [37.1, 37.04, 55.08, 52.99]
    }, {"name": "个人持有比例", "data": [62.9, 62.96, 44.92, 47.01]}, {
        "name": "内部持有比例",
        "data": [0.0863, 0.0275, 0.0784, 0.0756]
    }], "categories": ["2022-06-30", "2022-12-31", "2023-06-30", "2023-12-31"]
};/*资产配置*/
var Data_assetAllocation = {
    "series": [{
        "name": "股票占净比",
        "type": null,
        "data": [83.59, 85.0, 86.16, 83.91],
        "yAxis": 0
    }, {"name": "债券占净比", "type": null, "data": [0, 0, 0, 0], "yAxis": 0}, {
        "name": "现金占净比",
        "type": null,
        "data": [20.55, 15.51, 15.19, 16.28],
        "yAxis": 0
    }, {"name": "净资产", "type": "line", "data": [23.7481, 22.4249, 20.7686, 24.2043], "yAxis": 1}],
    "categories": ["2023-06-30", "2023-09-30", "2023-12-31", "2024-03-31"]
};/*业绩评价 ['选股能力', '收益率', '抗风险', '稳定性','择时能力']*/
var Data_performanceEvaluation = {
    "avr": "85.25",
    "categories": ["选证能力", "收益率", "抗风险", "稳定性", "择时能力"],
    "dsc": ["反映基金挑选证券而实现风险\u003cbr\u003e调整后获得超额收益的能力", "根据阶段收益评分，反映基金的盈利能力", "反映基金投资收益的回撤情况", "反映基金投资收益的波动性", "反映基金根据对市场走势的判断，\u003cbr\u003e通过调整仓位及配置而跑赢基金业\u003cbr\u003e绩基准的能力"],
    "data": [90.0, 80.0, 85.0, 100.0, 80.0]
};/*现任基金经理*/
var Data_currentFundManager = [{
    "id": "30339268",
    "pic": "https://pdf.dfcfw.com/pdf/H8_30339268_1.PNG",
    "name": "林庆",
    "star": 5,
    "workTime": "9年又13天",
    "fundSize": "69.77亿(6只基金)",
    "power": {
        "avr": "91.01",
        "categories": ["经验值", "收益率", "抗风险", "稳定性", "择时能力"],
        "dsc": ["反映基金经理从业年限和管理基金的经验", "根据基金经理投资的阶段收益评分，反映\u003cbr\u003e基金经理投资的盈利能力", "反映基金经理投资的回撤控制能力", "反映基金经理投资收益的波动", "反映基金经理根据对市场的判断，通过\u003cbr\u003e调整仓位及配置而跑赢业绩的基准能力"],
        "data": [91.50, 89.40, 94.40, 97.70, 86.40],
        "jzrq": "2024-05-15"
    },
    "profit": {
        "categories": ["任期收益", "同类平均", "沪深300"],
        "series": [{
            "data": [{"name": null, "color": "#7cb5ec", "y": 119.1}, {
                "name": null,
                "color": "#414c7b",
                "y": 15.86
            }, {"name": null, "color": "#f7a35c", "y": -20.36}]
        }],
        "jzrq": "2024-05-15"
    }
}];/*申购赎回*/
var Data_buySedemption = {
    "series": [{"name": "期间申购", "data": [2.75, 0.57, 1.17, 2.93]}, {
        "name": "期间赎回",
        "data": [0.45, 1.41, 0.58, 0.95]
    }, {"name": "总份额", "data": [7.55, 6.71, 7.30, 9.28]}],
    "categories": ["2023-06-30", "2023-09-30", "2023-12-31", "2024-03-31"]
};/*同类型基金涨幅榜（页面底部通栏）*/
var swithSameType = [['000979_景顺长城沪港深精选股_12.43', '009601_招商科技动力3个月滚_8.13', '003956_南方产业智选股票_7.34', '014376_东吴新能源汽车股票A_7.30', '009602_招商科技动力3个月滚_7.28'], ['000979_景顺长城沪港深精选股_30.67', '001678_英大国企改革主题股票_21.96', '006675_宝盈品牌消费股票A_10.98', '540007_汇丰晋信中小盘股票_10.88', '010434_红土创新医疗保健股票_9.57'], ['005669_前海开源公用事业股票_54.10', '007130_中庚小盘价值股票_41.32', '005505_前海开源中药股票A_38.31', '005161_华商上游产业股票A_37.46', '005506_前海开源中药股票C_37.28'], ['003624_创金合信资源股票发起_154.37', '000991_工银战略转型股票A_154.23', '001476_中银智能制造股票A_150.40', '003625_创金合信资源股票发起_150.18', '000828_宏利转型机遇股票A_144.41'], ['011220_南方匠心优选股票A_14.34', '000925_汇添富外延增长股票A_14.31', '011221_南方匠心优选股票C_14.21', '011424_汇添富外延增长股票C_14.16', '000828_宏利转型机遇股票A_14.11']];