

//arrays
/*let temperaturas: number[]= [22.5, 19.8, 25.1, 18.3];
let eventos: string[] = ["login", "logout", "error"];

//tuplas
let servidor: [string, number, boolean] = ["192.168.1.1", 8080, true];
console.log(`IP:${servidor[0]}, Puerto:${servidor[1]}}`);

//Funcion con retorno estricto
function calcularMedia( datos: number[]): number | null {
    if (datos.length === 0) return null;
    const suma = datos.reduce((acc, val) => acc + val, 0);
    return suma / datos.length;
}   
const media = calcularMedia(temperaturas);
if (media !== null) {
    console.log(`Media: ${media.toFixed(2)}`);
} else {
    console.log("no hay datos");
}*/



/*interface servidor {
    ip: string;
    puerto: number;
    activo: boolean;
}
const servidorBien: servidor = {
    ip: "192.168.1.1",
    puerto: 8080,
    activo: true
};

const servidorMal= {
    ip: "192.168.1.1",
    puerto: 8080,
} as servidor;
//Esto fallaraen runtime sin que typescript te avise
console.log (`Servidor mal: ${servidorMal.activo}`);
//veras servidorMal.activo como undefined
//console.log (`servidor bien: ${servidorBien.activo}`);
//veras servidorBien.activo como true*/


/*const configMutable= {host: "localhost", port: 3000};
configMutable.port = 4000; // Esto es permitido
console.log(`Config mutable: :${configMutable.port}`);//Config mutable: :4000

const configFija = {host: "localhost", port: 3000} as const;
console.log( `Puerto fijo: ${configFija.port}`); //Puerto fijo: 3000
//configFija.port = 4000; // Esto generará un error de compilación 

const ROLES = ["admin", "user", "guest"] as const;
console.log (`Roles disponibles: ${ROLES.join(", ")}`); //Roles disponibles: admin, user, guest
//ROLES.push("superadmin"); // Esto generará un error de compilación*/
