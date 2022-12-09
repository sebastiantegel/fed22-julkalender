let listOfSnowflakes = [
  8412483, 8736697, 3104303, 9076605, 6868823, 3227646, 7010367, 6743494,
  6834034, 1585381, 189414, 9456178, 920838, 216541, 749249, 1142603, 9025874,
  9835480, 1877967, 7562390, 6773371, 3550216, 6826743, 5626589, 3351566,
  7502223, 8924509, 9733740, 7154974, 3156375, 7313523, 8314257, 999590,
  4641075, 2985519, 4777330, 7765791, 3149379, 2758527, 64095, 9498537, 3772840,
  7557970, 1661064, 2001712, 4872596, 5736995, 1427890, 6477211, 2678845,
  6188576, 7748327, 6710419, 5417887, 3036422, 6008042, 6139926, 291212,
  9438092, 8717093, 2658949, 9847447, 8038648, 6992181, 4607145, 2071909,
  9784087, 8435119, 7380490, 9507841, 1273472, 703608, 9519231, 8506156, 772792,
  8572311, 736236, 6808558, 6428081, 2529741, 2387532, 7653279, 1707887,
  2203135, 2122998, 5403823, 475850, 5767506, 3857019, 6226649, 8151379,
  7549594, 1605038, 7583303, 2185594, 7202032, 5848676, 4346137, 3080767,
  5971667, 8567813, 3374682, 1101568, 9131331, 7472381, 6674892, 1715234,
  1175617, 6010617, 9733243, 1308925, 2782854, 925764, 6331090, 8806962,
  1303811, 4970662, 1035031, 5858144, 7153942, 4212752, 9040847, 305877, 421495,
  7334813, 3372554, 4988388, 4644222, 6188291, 5002191, 9544665, 6784932,
  9380031, 4409900, 1851380, 7914304, 7902158, 7101767, 5662888, 1471029,
  5454685, 5493766, 9038907, 6784068, 6112993, 6027240, 8118489, 4616511,
  3553902, 4751353, 8368937, 7385341, 5774209, 4738074, 1042137, 2362758,
  8104991, 2197007, 6087853, 881435, 3913422, 3640648, 8356695, 7229253,
  2286308, 6661234, 7152997, 6701952, 4483468, 6072352, 7680047, 8790687,
  2334587, 6213466, 2520762, 6089649, 1061844, 6515227, 7747660, 9996973,
  2346553, 8484182, 6895344, 7082215, 3701753, 2865136, 4367584, 6664432,
  351585, 9359316, 4160253, 8214937, 767190, 731666, 5971483, 2453012, 8335877,
  4141205, 1931179, 2270744, 490951, 4988601, 6394722, 6660963, 3055643,
  2654906, 7727699, 1393930, 9398594, 9613557, 9372194, 7323828, 2809046,
  7095652, 5825537, 2773141, 6021355, 9538129, 8824181, 6751523, 7116175,
  2325079, 4520643, 4293901, 8259519, 9684812, 8468265, 3266833, 2463440,
  6061250, 5906731, 3784389, 9867825, 7292095, 4713717, 3798838, 8370184,
  4075379, 952024, 131424, 2881465, 2949247, 5376470, 7337664, 7072912, 4533307,
  5979019, 3011063, 5609931, 6663413, 7510187, 679656, 1815409, 4719207,
  1237145, 3889049, 3130018, 4264809, 8981912, 793404, 102447, 303251, 8456331,
  6427647, 5641414, 2192573, 9206292, 8583800, 4040006, 2871745, 7577257,
  5674421, 2636762, 2418723, 5722866, 7782073, 6873635, 1134081, 7151649,
  2714746, 3999060, 4962257, 3398869, 2803337, 2280258, 7858954, 7596475,
  156417, 2889886, 675416, 7585804, 3276599, 898088, 1461750, 8263697, 6616731,
  602583, 1525410, 6995935, 9235235, 4039479, 7312303, 4641946, 2381748,
  5125728, 9674077, 6215803, 4030924, 9340782, 3008310, 4950911, 996746,
  9110390, 9361607, 4468401, 8261808, 5914800, 1269324, 3904663, 2146990,
  3994988, 7409002, 5933383, 658869, 5535850, 8302718, 1092035, 5457928,
  8609532, 8191301, 5954715, 7124030, 3767708, 7610303, 4970321, 9803761,
  9733644, 8739631, 9221573, 4544449, 1654896, 9121780, 9793487, 3419657,
  2200310, 7080443, 9877396, 1811870, 6455440, 1884760, 1243172, 5199089,
  5260336, 2080305, 4665685, 6652326, 4927444, 3520373, 2429257, 3525606,
  2996841, 3063294, 9013804, 6533455, 1083837, 8296117, 4933098, 8060181,
  2998980, 403885, 5171390, 7836158, 1131326, 1095673, 4040362, 8839641,
  2261555, 8484714, 8373871, 9233653, 391434, 7652333, 2187949, 5804947,
  2854381, 4850046, 3507604, 3015498, 8922783, 9573606, 7568115, 6612966,
  5416454, 3487647, 7003764, 7538666, 1196942, 4625773, 9999928, 3786978,
  9570261, 7101201, 7747385, 3994533, 7317842, 5856240, 2248963, 4196758,
  1511977, 8438946, 3562714, 1636861, 3734584, 7581142, 6573468, 4762214,
  1617860, 7191719, 6658271, 6371087, 330179, 930825, 3907792, 7818992, 5693134,
  4835273, 2611397, 4816755, 8985578, 2053912, 4135484, 6701518, 8576345,
  4916613, 5829449, 8839242, 8351175, 8140853, 391691, 2205238, 2382095,
  1974909, 4171448, 3213955, 1217928, 5256848, 4019110, 3869679, 6463651,
  2202333, 6660355, 4748182, 1020549, 2586554, 4205437, 6996316, 3878191,
  7223390, 8192890, 9195864, 3173327, 8307042, 9966911, 748862, 3343030,
  6856990, 4866605, 8673029, 847953, 4442531, 8244158, 6753380, 898307, 8575367,
  6044269, 7449914, 6798162, 4840768, 7030422, 2216306, 421887, 7562731,
  4738639, 4612332, 5139723, 2178602, 5894418, 7975275, 6897350, 1072006,
  7131765, 6907551, 1443007, 655469, 3685689, 9577450, 2166375, 7427741, 958580,
  3682309, 7785918, 4684906, 9635142, 3013747, 3851814, 6725872, 260684,
  3531011, 278025, 5535779, 3516680, 5538453, 9425166, 7634960, 9586504,
  3637948, 7827450, 8960746, 210692, 313441, 3089054, 8819129, 4744925, 2484480,
  1845598, 7632738, 5045289, 4909360, 9987370, 7479024, 3688967, 4653335,
  1180035, 6580884, 1104856, 6944081, 6170846, 65874, 6325512, 195276, 505183,
  2011694, 417197, 7710267, 5460752, 554836, 1302973, 1109994, 6523345, 240765,
  6734821, 1467196, 9548492, 4697907, 9163933, 2982883, 6082334, 5457255,
  2026780, 2135126, 2317858, 6399416, 8752650, 6587528, 2984205, 9266641,
  7178581, 4650623, 7896965, 9167466, 9404827, 9746341, 2785619, 2314390,
  2474192, 610198, 4245620, 253393, 8115725, 5880159, 1307393, 7273960, 6438670,
  1752245, 9439865, 9465462, 855516, 5595614, 5341520, 6740198, 6849759,
  4105556, 5860626, 3950235, 6992702, 8139276, 6865084, 5223806, 810034,
  1785152, 1044571, 2927111, 737844, 6777144, 8231753, 3473641, 5646142,
  6372777, 8619983, 6795505, 5347391, 4404207, 9168199, 6078502, 1065672,
  3252979, 8310498, 4447675, 838790, 2409664, 1654831, 6479320, 3373936,
  8150454, 7667361, 4181111, 5517629, 5132911, 6725410, 7305773, 7807451,
  8808698, 4636967, 2678912, 8805018, 2937718, 7911061, 4794997, 2286349,
  5711490, 2966664, 7477893, 9615288, 2795351, 2535394, 1960126, 6150965,
  9588864, 571231, 7418956, 3276167, 5860954, 9688924, 3953869, 6934526,
  1211286, 8813209, 3308630, 3223162, 8365213, 550403, 5462839, 5117247,
  2094316, 2649721, 8907373, 7551225, 4385081, 4689406, 5988162, 7319837,
  6798217, 8076184, 2805690, 9872028, 1652259, 7974769, 8047063, 1106519,
  1992409, 9133394, 2304280, 5028819, 364619, 6947280, 4770023, 8352313,
  1528911, 9456324, 5202426, 7871584, 8972893, 4055019, 4336640, 3699842,
  4449415, 6149175, 4228233, 7556181, 2499046, 3309196, 5058510, 2230963,
  6278248, 8570393, 9765291, 7333645, 4052717, 3209638, 6026364, 8910248,
  2341132, 1713555, 957710, 9362512, 3488588, 1683466, 4187793, 7609500,
  1993778, 9744356, 127477, 2837372, 2920728, 8342983, 4720165, 3498702,
  7772088, 739990, 5053550, 7943287, 8141563, 6363649, 6355127, 1342781, 473615,
  3555642, 6000916, 6641571, 9013443, 363275, 3814875, 8121031, 8067883,
  7126567, 3042007, 1722818, 4155858, 3369684, 3127689, 8829395, 5577167,
  3226469, 2004804, 9065381, 4186784, 9710030, 1252287, 3501426, 2107070,
  7234246, 1154700, 9006109, 3523946, 4160716, 653311, 8213005, 5988993,
  2560346, 6608731, 5379400, 7117214, 604513, 7671124, 8601208, 6014964,
  1564435, 652489, 4459395, 7318230, 2757698, 978533, 3884244, 5514428, 7305299,
  9160510, 2726330, 4279803, 2372225, 7707821, 5864706, 2367412, 6561897,
  2178644, 6511459, 3120430, 837582, 6314892, 6996450, 1915548, 9961486, 55814,
  6017024, 6433211, 5681782, 157996, 6282939, 3895143, 6981194, 9564331,
  4513259, 1068077, 6243088, 2983929, 3942991, 1159032, 4013288, 4049356,
  3843076, 4430554, 598698, 8155955, 9790018, 4131436, 9124466, 6365459,
  7129790, 1739583, 8762166, 706296, 1965209, 6169177, 5054801, 4560958,
  2604870, 69700, 3572713, 8743300, 6743268, 6670850, 1968828, 5311253, 1885741,
  9945730, 1276511, 5672208, 1353553, 9171636, 1949514, 4306131, 7983014,
  3702961, 7596021, 4833263, 8856046, 2334102, 1101138, 8185470, 2923011,
  5528784, 5437024, 1780946, 7850297, 1836751, 6379194, 13846, 8934596, 4396621,
  9275784, 4066447, 3663046, 4185530, 2807620, 8816088, 735460, 263538, 3501527,
  2729846, 5555665, 2416410, 6207117, 5509314, 2648682, 7328340, 1637261,
  622714, 3656482, 8014922, 936071, 8190220, 2438546, 5729632, 8970323, 1198853,
  6756868, 2375710, 7781421, 6946441, 8000216, 307962, 3189429, 5793143,
  5402641, 4386497, 1864228, 1146446, 7951565, 5882662, 9685406, 6462582,
  3782652, 9342796, 3861321, 4021651, 1023531, 8100348, 7014663, 1053472,
  9193150, 2579086, 6134177, 3034433, 3448634, 7304662, 7787720, 2319262,
  1559513, 5184810, 1094756, 5530441, 770785, 9998757, 3096111, 1451129,
  5686965, 8277021, 8555219, 6427488, 4125432, 6559135, 1357083, 5598030,
  7726300, 3386044, 9117266, 413583, 2421004, 1189662, 2215780, 5781699,
  5181700, 654422, 1775745, 5680373, 1296434, 903296, 747836, 2108633, 547899,
  8497843, 2812726, 8720571, 552102, 4362025, 5225180, 4195224, 4269371,
  8300334, 4406508, 3887718, 1618280, 9512973, 3421897, 3216440, 9406862,
  8508952, 3575242, 9363224, 6263076, 6204651, 9156220, 9334669, 2279931,
  9393665, 7895364, 8013222, 3137740, 3377262, 8508223, 6700267, 2157606,
  8329903, 6110286, 9057764, 3379423, 9520387, 9692148, 7878543, 2169384,
  4683019,
];

(document.getElementById("result") as HTMLHeadingElement).innerHTML = "Nej";

for (let i = 0; i < listOfSnowflakes.length; i += 2) {
  if (listOfSnowflakes[i] * 32 < listOfSnowflakes[i + 1]) {
    (document.getElementById("result") as HTMLHeadingElement).innerHTML =
      "Ja - " + listOfSnowflakes[i].toString() + ": " + listOfSnowflakes[i + 1];
  }
}
