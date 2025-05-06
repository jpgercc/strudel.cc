
//note("C D E F G A B")  // Isso toca as notas de uma oitava.
//note("C# D# F# G# A#")  // Isso toca as notas sustenidas da oitava.

// Notas das teclas pretas:
//37, 39, 42, 44, 46, 49, 51, 54, 56, 58, 61, 63, 66, 68, 70, 73, 75, 78, 80, 82
// Notas das teclas brancas:
//36, 38, 40, 41, 43, 45, 47, 48, 50, 52, 53, 55, 57, 59, 60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83 

///C = DÓ, D = RÉ, E = MI, F = FÁ, G = SOL, A = LÁ, B = SI

//Segurar multiplas teclas ao mesmo tempo:
//note("<[c3,eb3,g3] [f3,a3,c4]>")
//<> define o tempo de acordo com o numero de argumentos
// [] agrupa o som
//note("[c e]< e f g a b>").gain(".2")
note("<g ~ g g [g a] f4 d d c6>").gain(".9").s("sawtooth")
//s("sawtooth square triangle sine")
//.s("piano")
//.delay("2")
._pitchwheel()
.scope()
//.s("sawtooth")
//.cutoff(300)
//.delay(1.6)
//.room(1.7)
