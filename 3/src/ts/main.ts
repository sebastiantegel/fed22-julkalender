let numberToFind = 83 * 60 * 24;

let listOfMovies = [
  286560, 102240, 214560, 46080, 254880, 218880, 118080, 201600, 139680, 180000,
  142560, 237600, 243360, 259200, 156960, 243360, 216000, 161280, 205920,
  207360, 184320, 181440, 257760, 126720, 259200, 172800, 172800, 120960,
  217440, 172800, 51840, 102240, 72000, 269280, 144000, 59040, 151200, 99360,
  244800, 237600, 152640, 113760, 115200, 234720, 132480, 171360, 230400,
  276480, 250560, 204480, 50400, 236160, 257760, 158400, 279360, 263520, 144000,
  172800, 110880, 95040, 240480, 84960, 204480, 256320, 194400, 120960, 151200,
  217440, 200160, 230400, 177120, 115200, 125280, 227520, 60480, 74880, 282240,
  77760, 154080, 214560, 80640, 283680, 234720, 191520, 190080, 146880, 236160,
  167040, 70560, 138240, 87840, 217440, 89280, 54720, 231840, 161280, 214560,
  77760, 237600, 97920, 237600, 254880, 74880, 83520, 77760, 76320, 46080,
  125280, 187200, 243360, 122400, 87840, 178560, 188640, 213120, 246240, 216000,
  97920, 221760, 145440, 108000, 76320, 144000, 95040, 224640, 156960, 99360,
  161280, 263520, 203040, 145440, 95040, 264960, 82080, 103680, 234720, 214560,
  185760, 228960, 162720, 260640, 53280, 243360, 246240, 115200, 214560, 205920,
  182880, 86400, 125280, 120960, 109440, 123840, 97920, 198720, 184320, 123840,
  167040, 198720, 257760, 165600, 165600, 197280, 95040, 109440, 244800, 96480,
  182880, 46080, 197280, 224640, 194400, 208800, 197280, 156960, 250560, 115200,
  46080, 249120, 181440, 285120, 136800, 231840, 83520, 231840, 285120, 118080,
  112320, 123840, 125280, 269280, 123840, 205920, 205920, 203040, 161280, 73440,
  162720, 203040, 46080, 84960, 113760, 266400, 53280, 148320, 109440, 152640,
  90720, 105120, 190080, 69120, 243360, 187200, 175680, 113760, 123840, 102240,
  224640, 141120, 262080, 69120, 162720, 165600, 243360, 125280, 244800, 97920,
  97920, 240480, 72000, 53280, 174240, 203040, 105120, 269280, 197280, 159840,
  237600, 171360, 184320, 257760, 131040, 269280, 182880, 262080, 237600,
  253440, 115200, 241920, 276480, 109440, 158400, 188640, 74880, 74880, 66240,
  269280, 201600, 237600, 198720, 97920, 239040, 250560, 174240, 103680, 276480,
  151200, 277920, 90720, 178560, 123840, 216000, 108000, 70560, 239040, 93600,
  103680, 241920, 54720, 110880, 252000, 226080, 57600, 197280, 158400, 262080,
  216000, 269280, 216000, 207360, 105120, 266400, 169920, 243360, 131040,
  252000, 218880, 148320, 195840, 145440, 125280, 276480, 109440, 69120, 80640,
  233280, 83520, 247680, 109440, 144000, 47520, 113760, 218880, 269280, 70560,
  63360, 270720, 151200, 194400, 97920, 224640, 87840, 109440, 200160, 230400,
  105120, 154080, 109440, 79200, 96480, 122400, 142560, 164160, 154080, 223200,
  96480, 108000, 253440, 60480, 240480, 82080, 237600, 48960, 60480, 164160,
  108000, 129600, 70560, 48960, 267840, 257760, 247680, 231840, 211680, 169920,
  230400, 84960, 178560, 148320, 50400, 46080, 128160, 240480, 99360, 95040,
  181440, 213120, 249120, 86400, 276480, 47520, 66240, 116640, 83520, 99360,
  279360, 174240, 257760, 59040, 115200, 90720, 129600, 116640, 205920, 181440,
  259200, 110880, 136800, 125280, 230400, 144000, 87840, 79200, 106560, 171360,
  269280, 233280, 109440, 105120, 201600, 47520, 198720, 198720, 190080, 260640,
  247680, 79200, 103680, 277920, 230400, 178560, 270720, 165600, 285120, 246240,
  64800, 231840, 177120, 159840, 168480, 249120, 131040, 96480, 165600, 122400,
  145440, 244800, 194400, 158400, 253440, 216000, 96480, 214560, 57600, 224640,
  185760, 234720, 256320, 210240, 53280, 230400, 50400, 172800, 276480, 279360,
  95040, 285120, 207360, 102240, 103680, 50400, 264960, 118080, 122400, 220320,
  93600, 267840, 69120, 149760, 116640, 89280, 280800, 214560, 105120, 92160,
  233280, 67680, 252000, 205920, 149760, 231840, 126720, 204480, 210240, 246240,
  46080, 218880, 144000, 214560, 194400, 136800, 146880, 63360, 70560, 224640,
  259200, 270720, 77760, 266400, 122400, 220320, 231840, 259200, 250560, 152640,
  57600, 285120, 198720, 67680, 249120, 283680, 99360, 152640, 72000, 241920,
  46080, 246240, 100800, 264960, 233280, 174240, 136800, 138240, 149760, 256320,
  67680, 280800, 259200, 188640, 171360, 224640, 97920, 195840, 220320, 230400,
  64800, 120960, 126720, 110880, 135360, 208800, 156960, 56160, 93600, 239040,
  177120, 227520, 135360, 60480, 224640, 198720, 48960, 253440, 177120, 241920,
  180000, 89280, 87840, 54720, 118080, 106560, 201600, 285120, 224640, 84960,
  141120, 95040, 105120, 214560, 185760, 113760, 174240, 275040, 50400, 181440,
  159840, 177120, 141120, 204480, 216000, 205920, 144000, 50400, 168480, 205920,
  246240, 182880, 276480, 115200, 191520, 236160, 239040, 72000, 252000, 120960,
  51840, 84960, 246240, 126720, 152640, 162720, 224640, 285120, 96480, 276480,
  126720, 92160, 100800, 162720, 243360, 64800, 283680, 253440, 256320, 263520,
  131040, 63360, 182880, 69120, 123840, 174240, 197280, 191520, 154080, 266400,
  181440, 162720, 61920, 270720, 234720, 200160, 192960, 201600, 95040, 213120,
  59040, 72000, 123840, 244800, 112320, 273600, 116640, 139680, 67680, 139680,
  188640, 205920, 252000, 144000, 224640, 174240, 164160, 53280, 253440, 203040,
  269280, 267840, 283680, 129600, 198720, 168480, 73440, 109440, 74880, 231840,
  109440, 113760, 243360, 51840, 144000, 256320, 120960, 100800, 198720, 218880,
  158400, 132480, 103680, 208800, 138240, 102240, 162720, 256320, 70560, 109440,
  217440, 285120, 190080, 116640, 50400, 224640, 86400, 259200, 99360, 247680,
  95040, 220320, 267840, 200160, 156960, 48960, 154080, 136800, 181440, 174240,
  257760, 197280, 126720, 177120, 66240, 56160, 240480, 146880, 145440, 168480,
  122400, 95040, 87840, 195840, 256320, 64800, 234720, 105120, 86400, 171360,
  115200, 158400, 122400, 76320, 188640, 279360, 200160, 131040, 158400, 131040,
  174240, 155520, 102240, 146880, 133920, 156960, 285120, 67680, 73440, 213120,
  198720, 128160, 123840, 106560, 195840, 103680, 129600, 158400, 217440, 82080,
  76320, 149760, 214560, 175680, 273600, 109440, 228960, 250560, 279360, 128160,
  154080, 203040, 145440, 67680, 191520, 254880, 275040, 129600, 198720, 119520,
  73440, 69120, 272160, 216000, 218880, 109440, 112320, 167040, 187200, 97920,
  56160, 103680, 198720, 70560, 227520, 207360, 178560, 216000, 191520, 74880,
  66240, 54720, 139680, 243360, 195840, 257760, 214560, 277920, 181440, 241920,
  112320, 159840, 129600, 230400, 276480, 144000, 116640, 135360, 213120,
  262080, 60480, 226080, 57600, 136800, 99360, 285120, 96480, 214560, 165600,
  201600, 227520, 277920, 270720, 184320, 131040, 200160, 182880, 224640,
  138240, 64800, 226080, 187200, 139680, 54720, 221760, 79200, 280800, 239040,
  185760, 263520, 66240, 190080, 61920, 154080, 48960, 149760, 253440, 56160,
  144000, 120960, 89280, 138240, 132480, 51840, 249120, 60480, 174240, 220320,
  195840, 96480, 48960, 285120, 84960, 180000, 74880, 249120, 84960, 113760,
  53280, 195840, 236160, 102240, 247680, 82080, 144000, 228960, 174240, 125280,
  161280, 285120, 116640, 263520, 250560, 73440, 182880, 126720, 171360, 129600,
  118080, 223200, 280800, 154080, 138240, 79200, 262080, 63360, 279360, 115200,
  76320, 128160, 184320, 159840, 136800, 254880, 97920, 210240, 99360, 244800,
  171360, 162720, 181440, 253440, 87840, 128160, 66240, 129600, 70560, 165600,
  123840, 226080, 73440, 76320, 169920, 64800, 106560, 95040, 195840, 83520,
  74880, 264960, 167040, 253440, 142560, 194400, 122400, 275040, 269280, 264960,
  46080, 200160, 208800, 165600, 54720, 95040, 135360, 237600, 89280, 70560,
  253440, 106560, 267840, 259200, 221760, 191520, 152640, 241920, 70560, 237600,
  116640, 64800, 227520, 267840, 182880, 145440, 195840, 48960, 171360, 95040,
  263520, 185760, 233280, 138240, 277920, 223200, 247680, 110880, 80640, 187200,
  131040, 152640, 118080, 203040, 178560, 61920, 167040, 231840, 256320, 84960,
  197280, 168480, 259200, 280800, 263520, 218880, 191520, 66240, 79200, 154080,
  146880, 264960, 116640, 54720, 190080, 102240, 133920,
];

for (let i = 0; i < listOfMovies.length; i++) {
  if (listOfMovies[i] === numberToFind) {
    (document.getElementById("result") as HTMLHeadingElement).innerHTML = (
      i + 1
    ).toString();
  }
}