let arrcarragrega = new Array(); //Carga Todas las compras
let objproducto;
let objetocantprodu;
let objetoagregaprodu;
let shotsarray = new Array();
let listproarray = new Array();
let carritocomex = document.getElementById("btcarcomver");
let Padretodocaru = document.getElementById("Padretodocaru");
const params = new URLSearchParams();
let datosJSON;
let datosCodificados;
let arrfiltraproduct;
const cantiingxarray=5;



objproducto = {
  nombre: "Vestidos",
  imagen: "https://i.postimg.cc/bwXHTK3v/Vestido-2025001.jpg",
  Descripcion: "Talla L-XL",
  Codigo: "Codves01",
  Cantidad: 1,
  Precio: 630,
};
shotsarray[0] = objproducto; //Arreglo imagenes

objproducto = {
  nombre: "Vestidos",
  imagen: "https://i.postimg.cc/52w5knR1/Vestido-2025002.jpg",
  Descripcion: "Talla M",
  Codigo: "Codves02",
  Cantidad: 4,
  Precio: 660,
};
shotsarray[1] = objproducto;

objproducto = {
  nombre: "Vestidos",
  imagen: "https://i.postimg.cc/Jzb3dP2r/Vestido-2025003.jpg",
  Descripcion: "Talla S",
  Codigo: "Codves03",
  Cantidad: 1,
  Precio: 200,
};
shotsarray[2] = objproducto;

objproducto = {
  nombre: "Vestidos",
  imagen: "https://i.postimg.cc/rwSGYQPK/Vestido-2025004.jpg",
  Descripcion: "Talla L",
  Codigo: "Codves04",
  Cantidad: 1,
  Precio: 250,
};
shotsarray[3] = objproducto;




objproducto = {
  nombre: "Vestidos",
  imagen: "https://i.postimg.cc/L8zk0Nb1/Vestido-2025005.jpg",
  Descripcion: "Talla L",
  Codigo: "Codves05",
  Cantidad: 1,
  Precio: 800,
};
shotsarray[4] = objproducto;



objproducto = {
  nombre: "Vestidos",
  imagen: "https://i.postimg.cc/Bnx5wMVc/Vestido-2025006.jpg",
  Descripcion: "Talla M",
  Codigo: "Codves06",
  Cantidad: 1,
  Precio: 990,
};
shotsarray[5] = objproducto;

objproducto = {
  nombre: "Vestidos",
  imagen: "https://i.postimg.cc/q74cfyP6/Vestido-2025007.jpg",
  Descripcion: "Talla Unitalla",
  Codigo: "Codves07",
  Cantidad: 1,
  Precio: 500,
};
shotsarray[6] = objproducto;


objproducto = {
  nombre: "Vestidos",
  imagen: "https://i.postimg.cc/W4TmRgBZ/Vestido-2025008.jpg",
  Descripcion: "Talla Unitalla",
  Codigo: "Codves08",
  Cantidad: 1,
  Precio: 500,
};
shotsarray[7] = objproducto;




objproducto = {
  nombre: "Vestidos",
  imagen: "https://i.postimg.cc/xdnGrMwv/Vestido-2025009.jpg",
  Descripcion: "Talla M ",
  Codigo: "Codves09",
  Cantidad: 1,
  Precio: 675,
};
shotsarray[8] = objproducto;


objproducto = {
  nombre: "Vestidos",
  imagen: "https://i.postimg.cc/yNshqcMP/Vestido-2025010.jpg",
  Descripcion: "Talla XL-S",
  Codigo: "Codves10",
  Cantidad: 1,
  Precio: 520,
};
shotsarray[9] = objproducto;



objproducto = {
  nombre: "Vestidos",
  imagen: "https://i.postimg.cc/SKkL0CBv/Vestido-2025011.jpg",
  Descripcion: "Talla L-M-S",
  Codigo: "Codves11",
  Cantidad: 1,
  Precio: 820,
};
shotsarray[10] = objproducto;



objproducto = {
  nombre: "Vestidos",
  imagen: "https://i.postimg.cc/FKNbt3Mq/Vestido-2025012.jpg",
  Descripcion: "Talla M-L",
  Codigo: "Codves12",
  Cantidad: 1,
  Precio: 680,
};
shotsarray[11] = objproducto;



objproducto = {
  nombre: "Vestidos",
  imagen: "https://i.postimg.cc/25rdpnpp/Vestido-2025013.jpg",
  Descripcion: "Talla S",
  Codigo: "Codves13",
  Cantidad: 1,
  Precio: 620,
};
shotsarray[12] = objproducto;



objproducto = {
  nombre: "Vestidos",
  imagen: "https://i.postimg.cc/kgF8yD22/Vestido-2025014.jpg",
  Descripcion: "Talla XL",
  Codigo: "Codves14",
  Cantidad: 1,
  Precio: 600,
};
shotsarray[13] = objproducto;


objproducto = {
  nombre: "Vestidos",
  imagen: "https://i.postimg.cc/2SFvx31Z/Vestido-2025015.jpg",
  Descripcion: "Talla XL-M",
  Codigo: "Codves15",
  Cantidad: 1,
  Precio: 550,
};
shotsarray[14] = objproducto;


objproducto = {
  nombre: "Vestidos",
  imagen: "https://i.postimg.cc/8zVMWLzS/Vestido-2025016.jpg",
  Descripcion: "Talla L-M",
  Codigo: "Codves16",
  Cantidad: 1,
  Precio: 695,
};
shotsarray[15] = objproducto;


objproducto = {
  nombre: "Vestidos",
  imagen: "https://i.postimg.cc/nhY71MX2/Vestido-2025017.jpg",
  Descripcion: "Talla M",
  Codigo: "Codves17",
  Cantidad: 1,
  Precio: 740,
};
shotsarray[16] = objproducto;


objproducto = {
  nombre: "Vestidos",
  imagen: "https://i.postimg.cc/R0Stp9tQ/Vestido-2025018.jpg",
  Descripcion: "Talla L-S",
  Codigo: "Codves18",
  Cantidad: 1,
  Precio: 600,
};
shotsarray[17] = objproducto;


objproducto = {
  nombre: "Vestidos",
  imagen: "https://i.postimg.cc/bvynV8ng/Vestido-2025019.jpg",
  Descripcion: "Talla XL-M",
  Codigo: "Codves19",
  Cantidad: 1,
  Precio: 750,
};
shotsarray[18] = objproducto;


objproducto = {
  nombre: "Vestidos",
  imagen: "https://i.postimg.cc/nLFmSZm5/Vestido-2025020.jpg",
  Descripcion: "Talla S-M-XL",
  Codigo: "Codves20",
  Cantidad: 1,
  Precio: 660,
};
shotsarray[19] = objproducto;



objproducto = {
  nombre: "Vestidos",
  imagen: "https://i.postimg.cc/q7JKD0nV/Vestido-2025021.jpg",
  Descripcion: "Talla S-M-XL",
  Codigo: "Codves21",
  Cantidad: 1,
  Precio: 660,
};
shotsarray[20] = objproducto;

objproducto = {
  nombre: "Blusas",
  imagen: "https://i.postimg.cc/59gy30WZ/Blusa-2025001.jpg",
  Descripcion: "Talla S-M",
  Codigo: "Codblu01",
  Cantidad: 1,
  Precio: 520,
};
shotsarray[21] = objproducto;

objproducto = {
  nombre: "Blusas",
  imagen: "https://i.postimg.cc/NGDF4Mvn/Blusa-2025002.jpg",
  Descripcion: "Talla L-XL",
  Codigo: "Codblu02",
  Cantidad: 1,
  Precio: 520,
};
shotsarray[22] = objproducto;

objproducto = {
  nombre: "Blusas",
  imagen: "https://i.postimg.cc/tRkJ5TGm/Blusa-2025003.jpg",
  Descripcion: "Talla M-S",
  Codigo: "Codblu03",
  Cantidad: 1,
  Precio: 490,
};
shotsarray[23] = objproducto;


objproducto = {
  nombre: "Blusas",
  imagen: "https://i.postimg.cc/KcfjNzh9/Blusa-2025004.jpg",
  Descripcion: "Talla M-XL",
  Codigo: "Codblu04",
  Cantidad: 1,
  Precio: 500,
};
shotsarray[24] = objproducto;


objproducto = {
  nombre: "Blusas",
  imagen: "https://i.postimg.cc/3R7rjMS0/Blusa-2025005.jpg",
  Descripcion: "Talla M-XL",
  Codigo: "Codblu05",
  Cantidad: 1,
  Precio: 500,
};
shotsarray[25] = objproducto;



objproducto = {
  nombre: "Blusas",
  imagen: "https://i.postimg.cc/5NkthR0q/Blusa-2025006.jpg",
  Descripcion: "Talla M-S",
  Codigo: "Codblu06",
  Cantidad: 1,
  Precio: 350,
};
shotsarray[26] = objproducto;


objproducto = {
  nombre: "Blusas",
  imagen: "https://i.postimg.cc/1tPR0xC4/Blusa-2025007.jpg",
  Descripcion: "Talla S",
  Codigo: "Codblu07",
  Cantidad: 1,
  Precio: 660,
};
shotsarray[27] = objproducto;


objproducto = {
  nombre: "Blusas",
  imagen: "https://i.postimg.cc/V61s9yGQ/Blusa-2025008.jpg",
  Descripcion: "Talla XL",
  Codigo: "Codblu08",
  Cantidad: 1,
  Precio: 450,
};
shotsarray[28] = objproducto;

objproducto = {
  nombre: "Blusas",
  imagen: "https://i.postimg.cc/63w6Vsj3/Blusa-2025009.jpg",
  Descripcion: "Talla M",
  Codigo: "Codblu09",
  Cantidad: 1,
  Precio: 560,
};
shotsarray[29] = objproducto;


objproducto = {
  nombre: "Blusas",
  imagen: "https://i.postimg.cc/DZFfQVjs/Blusa-2025010.jpg",
  Descripcion: "Talla S",
  Codigo: "Codblu10",
  Cantidad: 1,
  Precio: 500,
};
shotsarray[30] = objproducto;

objproducto = {
  nombre: "Blusas",
  imagen: "https://i.postimg.cc/630WYHgY/Blusa-2025011.jpg",
  Descripcion: "Talla M",
  Codigo: "Codblu11",
  Cantidad: 1,
  Precio: 520,
};
shotsarray[31] = objproducto;


objproducto = {
  nombre: "Blusas",
  imagen: "https://i.postimg.cc/fLKzBHpf/Blusa-2025012.jpg",
  Descripcion: "Talla XL",
  Codigo: "Codblu12",
  Cantidad: 1,
  Precio: 500,
};
shotsarray[32] = objproducto;

objproducto = {
  nombre: "Blusas",
  imagen: "https://i.postimg.cc/MTD6dsNt/Blusa-2025013.jpg",
  Descripcion: "Talla L-XL",
  Codigo: "Codblu13",
  Cantidad: 1,
  Precio: 500,
};
shotsarray[33] = objproducto;


objproducto = {
  nombre: "Blusas",
  imagen: "https://i.postimg.cc/Hx2YBSR2/Blusa-2025014.jpg",
  Descripcion: "Talla Unitalla",
  Codigo: "Codblu14",
  Cantidad: 1,
  Precio: 385,
};
shotsarray[34] = objproducto;


objproducto = {
  nombre: "Blusas",
  imagen: "https://i.postimg.cc/XJ8jQ2mP/Blusa-2025015.jpg",
  Descripcion: "Talla M-S",
  Codigo: "Codblu15",
  Cantidad: 1,
  Precio: 430,
};
shotsarray[35] = objproducto;


objproducto = {
  nombre: "Blusas",
  imagen: "https://i.postimg.cc/wvVq0WZG/Blusa-2025016.jpg",
  Descripcion: "Talla M-S",
  Codigo: "Codblu16",
  Cantidad: 1,
  Precio: 480,
};
shotsarray[36] = objproducto;


objproducto = {
  nombre: "Blusas",
  imagen: "https://i.postimg.cc/C1NhmvX6/Blusa-2025017.jpg",
  Descripcion: "Talla XL-M",
  Codigo: "Codblu17",
  Cantidad: 1,
  Precio: 380,
};
shotsarray[37] = objproducto;


objproducto = {
  nombre: "Blusas",
  imagen: "https://i.postimg.cc/LXT9NywG/Blusa-2025018.jpg",
  Descripcion: "Talla S-M Color:Negra-Blanca",
  Codigo: "Codblu18",
  Cantidad: 1,
  Precio: 400,
};
shotsarray[38] = objproducto;


objproducto = {
  nombre: "Blusas",
  imagen: "https://i.postimg.cc/Kj8ZVPhq/Blusa-2025019.jpg",
  Descripcion: "Talla M",
  Codigo: "Codblu19",
  Cantidad: 1,
  Precio: 440,
};
shotsarray[39] = objproducto;

objproducto = {
  nombre: "Blusas",
  imagen: "https://i.postimg.cc/4yxJM6RS/Blusa-2025020.jpg",
  Descripcion: "Talla M",
  Codigo: "Codblu20",
  Cantidad: 1,
  Precio: 440,
};
shotsarray[40] = objproducto;


objproducto = {
  nombre: "Blusas",
  imagen: "https://i.postimg.cc/cCLsjRGj/Blusa-2025021.jpg",
  Descripcion: "Talla M-S-L-XL",
  Codigo: "Codblu21",
  Cantidad: 1,
  Precio: 450,
};
shotsarray[41] = objproducto;


objproducto = {
  nombre: "Blusas",
  imagen: "https://i.postimg.cc/d3VqX2cb/Blusa-2025022.jpg",
  Descripcion: "Talla M",
  Codigo: "Codblu22",
  Cantidad: 1,
  Precio: 530,
};
shotsarray[42] = objproducto;

objproducto = {
  nombre: "Blusas",
  imagen: "https://i.postimg.cc/qqvkYsdd/Blusa-2025023.jpg",
  Descripcion: "Talla L",
  Codigo: "Codblu23",
  Cantidad: 1,
  Precio: 500,
};
shotsarray[43] = objproducto;

objproducto = {
  nombre: "Blusas",
  imagen: "https://i.postimg.cc/brwzMxjP/Blusa-2025024.jpg",
  Descripcion: "Talla L-M-S ",
  Codigo: "Codblu24",
  Cantidad: 1,
  Precio: 420,
};
shotsarray[44] = objproducto;


objproducto = {
  nombre: "Blusas",
  imagen: "https://i.postimg.cc/1X39TGZx/Blusa-2025025.jpg",
  Descripcion: "Talla S",
  Codigo: "Codblu25",
  Cantidad: 1,
  Precio: 650,
};
shotsarray[45] = objproducto;

objproducto = {
  nombre: "Blusas",
  imagen: "https://i.postimg.cc/RhZM87zS/Blusa-2025026.jpg",
  Descripcion: "Talla S",
  Codigo: "Codblu26",
  Cantidad: 1,
  Precio: 640,
};
shotsarray[46] = objproducto;



objproducto = {
  nombre: "Pantalones",
  imagen: "https://i.postimg.cc/sXM011zL/Pantalon-M-2025001.jpg",
  Descripcion: "Talla M",
  Codigo: "Codpamu01",
  Cantidad: 1,
  Precio: 790,
};
shotsarray[47] = objproducto;


objproducto = {
  nombre: "Pantalones",
  imagen: "https://i.postimg.cc/LXJ0hhR5/Pantalon-M-2025002.jpg",
  Descripcion: "Talla 7/8",
  Codigo: "Codpamu02",
  Cantidad: 1,
  Precio: 720,
};
shotsarray[48] = objproducto;


objproducto = {
  nombre: "Pantalones",
  imagen: "https://i.postimg.cc/NMKPLLYj/Pantalon-M-2025003.jpg",
  Descripcion: "Talla 13/14",
  Codigo: "Codpamu03",
  Cantidad: 1,
  Precio: 790,
};
shotsarray[49] = objproducto;


objproducto = {
  nombre: "Pantalones",
  imagen: "https://i.postimg.cc/wv1b33HB/Pantalon-M-2025004.jpg",
  Descripcion: "Talla 5/6",
  Codigo: "Codpamu04",
  Cantidad: 1,
  Precio: 790,
};
shotsarray[50] = objproducto;



objproducto = {
  nombre: "Pantalones",
  imagen: "https://i.postimg.cc/63FbZw5t/Pantalon-M-2025005.jpg",
  Descripcion: "Talla 3/4",
  Codigo: "Codpamu05",
  Cantidad: 1,
  Precio: 790,
};
shotsarray[51] = objproducto;


objproducto = {
  nombre: "Pantalones",
  imagen: "https://i.postimg.cc/MTg3BxKc/Pantalon-M-2025006.jpg",
  Descripcion: "Talla L",
  Codigo: "Codpamu06",
  Cantidad: 1,
  Precio: 790,
};
shotsarray[52] = objproducto;



objproducto = {
  nombre: "Pantalones",
  imagen: "https://i.postimg.cc/wMJfcP7N/Pantalon-M-2025007.jpg",
  Descripcion: "Talla 3/4-15/16-5/6",
  Codigo: "Codpamu07",
  Cantidad: 1,
  Precio: 790,
};
shotsarray[53] = objproducto;


objproducto = {
  nombre: "Pantalones",
  imagen: "https://i.postimg.cc/6qRjLSyL/Pantalon-M-2025008.jpg",
  Descripcion: "Talla 5/6",
  Codigo: "Codpamu08",
  Cantidad: 1,
  Precio: 790,
};
shotsarray[54] = objproducto;


objproducto = {
  nombre: "Pantalones",
  imagen: "https://i.postimg.cc/KjLqrVR9/Pantalon-M-2025009.jpg",
  Descripcion: "Talla 5/6",
  Codigo: "Codpamu09",
  Cantidad: 1,
  Precio: 790,
};
shotsarray[55] = objproducto;


objproducto = {
  nombre: "Enterizos",
  imagen: "https://i.postimg.cc/L8Bk8KbC/Entyerizo-2025001.jpg",
  Descripcion: "Talla S-XL",
  Codigo: "Codentermu01",
  Cantidad: 1,
  Precio: 790,
};
shotsarray[56] = objproducto;


objproducto = {
  nombre: "Enterizos",
  imagen: "https://i.postimg.cc/13c03hjK/Entyerizo-2025002.jpg",
  Descripcion: "Talla XL-M",
  Codigo: "Codentermu02",
  Cantidad: 1,
  Precio: 760,
};
shotsarray[57] = objproducto;


objproducto = {
  nombre: "Enterizos",
  imagen: "https://i.postimg.cc/wjc5j8GF/Entyerizo-2025003.jpg",
  Descripcion: "Talla L",
  Codigo: "Codentermu03",
  Cantidad: 1,
  Precio: 900,
};
shotsarray[58] = objproducto;


objproducto = {
  nombre: "Enterizos",
  imagen: "https://i.postimg.cc/CxHCxTQN/Entyerizo-2025004.jpg",
  Descripcion: "Talla L-M",
  Codigo: "Codentermu04",
  Cantidad: 1,
  Precio: 900,
};
shotsarray[59] = objproducto;


objproducto = {
  nombre: "Enterizos",
  imagen: "https://i.postimg.cc/FHgbH5BB/Entyerizo-2025005.jpg",
  Descripcion: "Talla ",
  Codigo: "Codentermu05",
  Cantidad: 1,
  Precio: 720,
};
shotsarray[60] = objproducto;


objproducto = {
  nombre: "Enterizos",
  imagen: "https://i.postimg.cc/52q52dRT/Entyerizo-2025006.jpg",
  Descripcion: "Talla ",
  Codigo: "Codentermu06",
  Cantidad: 1,
  Precio: 720,
};
shotsarray[61] = objproducto;


objproducto = {
  nombre: "Enterizos",
  imagen: "https://i.postimg.cc/Ls9tqCcD/Entyerizo-2025007.jpg",
  Descripcion: "Talla L",
  Codigo: "Codentermu07",
  Cantidad: 1,
  Precio: 820,
};
shotsarray[62] = objproducto;



objproducto = {
  nombre: "Enterizos",
  imagen: "https://i.postimg.cc/6QWr7jkH/Entyerizo-2025008.jpg",
  Descripcion: "Talla XL",
  Codigo: "Codentermu08",
  Cantidad: 1,
  Precio: 650,
};
shotsarray[63] = objproducto;



objproducto = {
  nombre: "Enterizos",
  imagen: "https://i.postimg.cc/hGDLJykN/Entyerizo-2025009.jpg",
  Descripcion: "Talla S-XL-L",
  Codigo: "Codentermu09",
  Cantidad: 1,
  Precio: 650,
};
shotsarray[64] = objproducto;


objproducto = {
  nombre: "Enterizos",
  imagen: "https://i.postimg.cc/W4NGDYRc/Entyerizo-2025010.jpg",
  Descripcion: "Talla XL-M",
  Codigo: "Codentermu10",
  Cantidad: 1,
  Precio: 750,
};
shotsarray[65] = objproducto;


objproducto = {
  nombre: "Enterizos",
  imagen: "https://i.postimg.cc/cJxRKkqy/Entyerizo-2025011.jpg",
  Descripcion: "Talla M-XL",
  Codigo: "Codentermu11",
  Cantidad: 1,
  Precio: 620,
};
shotsarray[66] = objproducto;


objproducto = {
  nombre: "Conjuntos",
  imagen: "https://i.postimg.cc/cHS9CBx1/Conjun-2025001.jpg",
  Descripcion: "Talla 10-12-16",
  Codigo: "Codconjmu01",
  Cantidad: 1,
  Precio: 590,
};
shotsarray[67] = objproducto;


objproducto = {
  nombre: "Conjuntos",
  imagen: "https://i.postimg.cc/1trWqVX0/Conjun-2025002.jpg",
  Descripcion: "Talla M",
  Codigo: "Codconjmu02",
  Cantidad: 1,
  Precio: 850,
};
shotsarray[68] = objproducto;


objproducto = {
  nombre: "Conjuntos",
  imagen: "https://i.postimg.cc/63fHv4q5/Conjun-2025003.jpg",
  Descripcion: "Talla S",
  Codigo: "Codconjmu03",
  Cantidad: 1,
  Precio: 360,
};
shotsarray[69] = objproducto;


objproducto = {
  nombre: "Conjuntos",
  imagen: "https://i.postimg.cc/XqNscNBw/Conjun-2025004.jpg",
  Descripcion: "Talla S",
  Codigo: "Codconjmu04",
  Cantidad: 1,
  Precio: 820,
};
shotsarray[70] = objproducto;

objproducto = {
  nombre: "Conjuntos",
  imagen: "https://i.postimg.cc/3NrtCr0X/Conjun-2025005.jpg",
  Descripcion: "Talla S",
  Codigo: "Codconjmu05",
  Cantidad: 1,
  Precio: 1020,
};
shotsarray[71] = objproducto;

objproducto = {
  nombre: "Conjuntos",
  imagen: "https://i.postimg.cc/Gt3XJ3TP/Conjun-2025006.jpg",
  Descripcion: "Talla S-L",
  Codigo: "Codconjmu06",
  Cantidad: 1,
  Precio: 750,
};
shotsarray[72] = objproducto;


objproducto = {
  nombre: "Faldas",
  imagen: "https://i.postimg.cc/6pLhWj6f/Falda-2025001.jpg",
  Descripcion: "Talla Unitalla",
  Codigo: "Codcfald01",
  Cantidad: 1,
  Precio: 590,
};
shotsarray[73] = objproducto;


objproducto = {
  nombre: "Faldas",
  imagen: "https://i.postimg.cc/JzcQr676/Falda-2025002.jpg",
  Descripcion: "Talla M-L-XL",
  Codigo: "Codcfald02",
  Cantidad: 1,
  Precio: 560,
};
shotsarray[74] = objproducto;


objproducto = {
  nombre: "Faldas",
  imagen: "https://i.postimg.cc/K8r5Gqc0/Falda-2025003.jpg",
  Descripcion: "Talla S-M-L",
  Codigo: "Codcfald03",
  Cantidad: 1,
  Precio: 540,
};
shotsarray[75] = objproducto;

objproducto = {
  nombre: "BodySuit",
  imagen: "https://i.postimg.cc/HsTNQyJM/Body-Suit-2025001.jpg",
  Descripcion: "Talla Unitalla",
  Codigo: "Codbody01",
  Cantidad: 1,
  Precio: 385,
};
shotsarray[76] = objproducto;

objproducto = {
  nombre: "BodySuit",
  imagen: "https://i.postimg.cc/8PTYh6FX/Body-Suit-2025002.jpg",
  Descripcion: "Talla M",
  Codigo: "Codbody02",
  Cantidad: 1,
  Precio: 490,
};
shotsarray[77] = objproducto;

objproducto = {
  nombre: "BodySuit",
  imagen: "https://i.postimg.cc/8Pw0wzWb/Body-Suit-2025003.jpg",
  Descripcion: "Talla L-S",
  Codigo: "Codbody03",
  Cantidad: 1,
  Precio: 490,
};
shotsarray[78] = objproducto;

objproducto = {
  nombre: "CropTop",
  imagen: "https://i.postimg.cc/Qd2wKnc8/Croptop-2025001.jpg",
  Descripcion: "Talla Unitalla",
  Codigo: "Codcropt01",
  Cantidad: 1,
  Precio: 580,
};
shotsarray[79] = objproducto;


objproducto = {
  nombre: "CropTop",
  imagen: "https://i.postimg.cc/GmWVTSGZ/Croptop-2025002.jpg",
  Descripcion: "Talla L-S-M",
  Codigo: "Codcropt02",
  Cantidad: 1,
  Precio: 370,
};
shotsarray[80] = objproducto;

objproducto = {
  nombre: "CropTop",
  imagen: "https://i.postimg.cc/HkqR8PbW/Croptop-2025003.jpg",
  Descripcion: "Talla M-S",
  Codigo: "Codcropt03",
  Cantidad: 1,
  Precio: 350,
};
shotsarray[81] = objproducto;

objproducto = {
  nombre: "CropTop",
  imagen: "https://i.postimg.cc/SQPBpsjG/Croptop-2025004.jpg",
  Descripcion: "Talla L-M",
  Codigo: "Codcropt04",
  Cantidad: 1,
  Precio: 480,
};
shotsarray[82] = objproducto;


objproducto = {
  nombre: "Zapatos",
  imagen: "https://i.postimg.cc/LsvzDLdN/Zapato-2025001.jpg",
  Descripcion: "Talla ",
  Codigo: "CodZapato01",
  Cantidad: 1,
  Precio: 0,
};
shotsarray[83] = objproducto;


objproducto = {
  nombre: "Zapatos",
  imagen: "https://i.postimg.cc/9f1GbZ3Z/Zapato-2025002.jpg",
  Descripcion: "Talla ",
  Codigo: "CodZapato02",
  Cantidad: 1,
  Precio: 0,
};
shotsarray[84] = objproducto;

objproducto = {
  nombre: "Zapatos",
  imagen: "https://i.postimg.cc/VN4jgnyX/Zapato-2025003.jpg",
  Descripcion: "Talla ",
  Codigo: "CodZapato03",
  Cantidad: 1,
  Precio: 0,
};
shotsarray[85] = objproducto;


objproducto = {
  nombre: "Zapatos",
  imagen: "https://i.postimg.cc/1zMpBwxV/Zapato-2025004.jpg",
  Descripcion: "Talla ",
  Codigo: "CodZapato04",
  Cantidad: 1,
  Precio: 0,
};
shotsarray[86] = objproducto;


objproducto = {
  nombre: "Zapatos",
  imagen: "https://i.postimg.cc/PxR1sH5f/Zapato-2025005.jpg",
  Descripcion: "Talla ",
  Codigo: "CodZapato05",
  Cantidad: 1,
  Precio: 0,
};
shotsarray[87] = objproducto;



objproducto = {
  nombre: "Zapatos",
  imagen: "https://i.postimg.cc/4yHVX0YF/Zapato-2025006.jpg",
  Descripcion: "Talla ",
  Codigo: "CodZapato06",
  Cantidad: 1,
  Precio: 0,
};
shotsarray[88] = objproducto;


objproducto = {
  nombre: "Licras",
  imagen: "https://i.postimg.cc/hvSD4zZJ/Licra-2025001.jpg",
  Descripcion: "Talla S",
  Codigo: "CodLicra01",
  Cantidad: 1,
  Precio: 310,
};
shotsarray[89] = objproducto;


objproducto = {
  nombre: "Palazos",
  imagen: "https://i.postimg.cc/qM6JJTjv/Palazo-2025001.jpg",
  Descripcion: "Talla L-XL",
  Codigo: "CodPalazo01",
  Cantidad: 1,
  Precio: 560,
};
shotsarray[90] = objproducto;

objproducto = {
  nombre: "Shorts",
  imagen: "https://i.postimg.cc/FRGyHcFk/Short-2025001.jpg",
  Descripcion: "Talla L",
  Codigo: "CodShort01",
  Cantidad: 1,
  Precio: 570,
};
shotsarray[91] = objproducto;




listproarray[0] = "Vestidos"; //Arreglo imagenes
listproarray[1] = "Blusas";
listproarray[2] = "Pantalones";
listproarray[3] = "Enterizos";
listproarray[4] = "Conjuntos";
listproarray[5] = "Faldas";
listproarray[6] = "BodySuit";
listproarray[7] = "CropTop";
listproarray[8] = "Zapatos";
listproarray[9] = "Licras";
listproarray[10] = "Palazos";
listproarray[11] = "Shorts";

arrfiltraproduct=cantidadarray();

function valorbtcompver() {
  //Funcion que trasnfiere las compras

  datosJSON = JSON.stringify(arrcarragrega);
  datosCodificados = encodeURIComponent(datosJSON);
  window.location.href = `CarritoCompras.html?datos=${datosCodificados}`;
  //window.location.href = `CarritoCompras.html?nombre=${nombre}`;
  //alert("Ver compras: "+arrcarragrega.length);
}

function creacarritocomex() {
  //crea boton ver las compras
  let newcarritocomex = document.createElement("button");
  let newetique = document.createElement("i");
  newcarritocomex.setAttribute("id", "btvercar");
  newcarritocomex.setAttribute("class", "btn-carrito");
  newcarritocomex.setAttribute("onclick", "valorbtcompver( );");

  newetique.setAttribute("class", "fas fa-shopping-cart");
  newetique.textContent = "Ver Pedido";

  carritocomex.appendChild(newcarritocomex);
  newcarritocomex.appendChild(newetique);
}

function Fimgdb(img ){

event.preventDefault();
window.open(img, '_blank'); 

}


function creaimgcar(contenedor, arrimg, idbtcompra) {
  //carga las imagenes y botones de compra
  if (contenedor) {
    for (let i = 0; i < arrimg.length; i++) {
      let newDiv = document.createElement("div");
      let newImg = document.createElement("img");
       let etiqueta=document.createElement("H6");

      newDiv.setAttribute("class", "carousel-item");

      newImg.setAttribute("src", arrimg[i].imagen);
      newImg.setAttribute("class", "w-100 d-block");
      newImg.setAttribute("alt", "Slide " + i);
      newImg.setAttribute("ondblclick", "Fimgdb('"+arrimg[i].imagen+"');");


      etiqueta.textContent =
        arrimg[i].Descripcion +
        ", Precio: C$" +
        arrimg[i].Precio;
      if (i === 0) {
        newDiv.classList.add("active");
      }

      contenedor.appendChild(newDiv);
       
      Btcarritoc(idbtcompra, i, newDiv); //Funcion boton compras
     newDiv.appendChild(etiqueta);
      newDiv.appendChild(newImg);
    }
  }
}

function Btcarritoc(idbtcompra, i, newDiv) {
  //Crea botones de Compras
  let newDivbtn = document.createElement("div");
  let newbtn = document.createElement("button");

  newDivbtn.setAttribute("class", "divinputnum");
  newbtn.setAttribute("id", idbtcompra);
  newbtn.setAttribute("value", i);
  newbtn.setAttribute("class", "btn btn-success");
  newbtn.setAttribute("onclick", "valorbt('" + i + "','" + idbtcompra + "');"); //valorbt(btvalor,idvisorbt)
  
  newbtn.textContent = "Añadir";
  
  newbtn.type = "button";
  newbtn.value = i;

  newDiv.appendChild(newDivbtn);
  Numprod(newDivbtn, idbtcompra, i); //Cantidad de producto
  newDivbtn.appendChild(newbtn);
}

function Numprod(newDiv, idbtcompra, i) {
  //Cantidad de producto a comprar
  let newDivnumprod = document.createElement("div");
  let newInputcant = document.createElement("input");

  newDivnumprod.setAttribute("class", "divconta");

  newInputcant.setAttribute("type", "number");
  newInputcant.setAttribute("name", "cantmeses");
  newInputcant.setAttribute("value", "1");
  newInputcant.setAttribute("class", "inputonumber");
  newInputcant.setAttribute("min", "1");
  newInputcant.setAttribute("placeholder", "1");
  newInputcant.style = "width:50px";
  newInputcant.setAttribute(
    "onclick",
    "valorbtnumeroprod('" + idbtcompra + "','" + i + "');"
  );

  newDiv.appendChild(newDivnumprod);
  newDivnumprod.appendChild(newInputcant);
}

function Btprevio(contenedor, classtarget, principalcontenedor) {
  //Boton previo flecha <

  if (contenedor) {
    let newbtprev = document.createElement("button");
    let newspanprev = document.createElement("span");
    let newspanprevdos = document.createElement("span");

    newbtprev.setAttribute("class", "carousel-control-prev");
    newbtprev.setAttribute("type", "button");
    newbtprev.setAttribute("data-bs-target", classtarget);
    newbtprev.setAttribute("data-bs-slide", "prev");

    newspanprev.setAttribute("class", "carousel-control-prev-icon");
    newspanprev.setAttribute("aria-hidden", "true");

    newspanprevdos.setAttribute("class", "visually-hidden");
    newspanprevdos.setAttribute("aria-hidden", "true");

    principalcontenedor.appendChild(newbtprev);
    newbtprev.appendChild(newspanprev);
    newbtprev.appendChild(newspanprevdos);
  }
}

function Btnext(contenedor, classtarget, principalcontenedor) {
  //Boton next flecha <

  if (contenedor) {
    let newbtnext = document.createElement("button");
    let newspannext = document.createElement("span");
    let newspannextdos = document.createElement("span");

    newbtnext.setAttribute("class", "carousel-control-next");
    newbtnext.setAttribute("type", "button");
    newbtnext.setAttribute("data-bs-target", classtarget);
    newbtnext.setAttribute("data-bs-slide", "next");

    newspannext.setAttribute("class", "carousel-control-next-icon");
    newspannext.setAttribute("aria-hidden", "true");

    newspannextdos.setAttribute("class", "visually-hidden");
    newspannextdos.setAttribute("aria-hidden", "true");

    principalcontenedor.appendChild(newbtnext);
    newbtnext.appendChild(newspannext);
    newbtnext.appendChild(newspannextdos);
  }
}

function crealistimg(contenedor, arrimg, classtarget, principalcontenedor) {
  //Crea control inferios, flechas nex y previo

  if (contenedor) {
    for (let i = 0; i < arrimg.length; i++) {
      let newli = document.createElement("li");

      let labelslide = "Slide " + i;

      newli.setAttribute("data-bs-target", classtarget);
      newli.setAttribute("data-bs-slide-to", i);
      newli.setAttribute("aria-label", labelslide);
      newli.setAttribute("aria-current", "true");

      if (i === 0) {
        newli.classList.add("active");
      }
      contenedor.appendChild(newli);
    }

    Btprevio(contenedor, classtarget, principalcontenedor);
    Btnext(contenedor, classtarget, principalcontenedor);
  }
}

function valorbt(btvalor, idvisorbt) {
  //Funcion que toma pedidos
  let cantisoli = 1;
  let visor;
  let arrcadenasplit;
  let indicecadena=0;

  
  if (objetocantprodu === undefined) {
    visor = idvisorbt;
     
  } else {
    if(objetocantprodu.nombrevisor !== idvisorbt){
            visor = idvisorbt;
           

    }else{

      visor = objetocantprodu.nombrevisor;
      cantisoli = objetocantprodu.eventnum.value;

    }
    
  }

  if (visor === idvisorbt) {
     
    
     arrcadenasplit=idvisorbt.split("-") //"idbtcompra"0-nombre1-Cantidadarreglos2-numero arreglo3-Residuo del ultimo arreglo4
     
      for(let i=0;i<shotsarray.length;i++){
        
         
         if(arrcadenasplit[1]===shotsarray[i].nombre){
                 indicecadena=i; //indice del nombre arreblo principal
                 
                
                 break;
         }

      }  
      
      btvalor=parseInt(btvalor)+indicecadena+((parseInt(arrcadenasplit[3])-1)*cantiingxarray);//Ajusta las apuntadores de las imagens a hotsarray
                                               // alert("La btvalor: "+btvalor); 
                                                                                                                                                                                                                                                                                                

      
    objetoagregaprodu = {
      nombre: shotsarray[btvalor].nombre,
      Descripcion: shotsarray[btvalor].Descripcion,
      Codigo: shotsarray[btvalor].Codigo,
      Cantidad: cantisoli,
      Precio: shotsarray[btvalor].Precio,
      Imagen: shotsarray[btvalor].imagen,
    };

    arrcarragrega[arrcarragrega.length] = objetoagregaprodu;

    //alert("Valor: " + btvalor+" Idboton: "+idvisorbt);
    //alert("El producto es: "+shotsarray[btvalor].nombre);
    //alert("El producto es: "+shotsarray[btvalor].Precio);
    objetocantprodu.eventnum.value=1;
  }

}

  //alert("Visor de imagen: "+ objetocantprodu.nombrevisor);


function valorbtnumeroprod(idbtcompra, i) {
  let elemento = event.target;
  let visorimg = idbtcompra + "Numero de imagen: " + i;
  //alert("El valor onclick "+event.target.value); //da el valor del control
  // alert("El nombre onclick "+elemento.name); // da el nombre del control
  //  alert("El Visor se llama "+visorimg); // da el nombre del control
  // alert("La descripcion es: "+principal.textContent); // da el nombre del control

  if (window.cordova && window.cordova.plugins.keyboard) {
     
      window.cordova.plugins.keyboard.hide();
    }else{

       const inputElement = elemento;
    if (inputElement) {
      inputElement.blur(); // Elimina el foco del elemento
    }
    }

  objetocantprodu = {
    eventnum: elemento,
    nombrevisor: idbtcompra,
  };

  objetocantprodu = {
    eventnum: elemento,
    nombrevisor: idbtcompra,
  };
}

function creaconteprinci(nameiddivprin, principalraiz) {
  //Div principal contenedor del carousel
  let newdivprincipal = document.createElement("div");
  newdivprincipal.setAttribute("id", nameiddivprin);
  newdivprincipal.setAttribute("class", "carousel slide");
  newdivprincipal.setAttribute("data-bs-ride", "carousel");

  principalraiz.appendChild(newdivprincipal);

  return newdivprincipal;
}

function creaindicadorcantimg(nameidol, divraiz) {
  //ol principal contenedor Indicadores inferiores cantidad de imagenes
  let newol = document.createElement("ol");
  newol.setAttribute("class", "carousel-indicators");
  newol.setAttribute("id", "caruindicaa");
  divraiz.appendChild(newol);

  return newol;
}

function creacargaimg(nameiddiv, divraiz) {
  //Div principal de cargado de imagenes
  let newdivimg = document.createElement("div");
  newdivimg.setAttribute("class", "carousel-inner");
  newdivimg.setAttribute("role", "listbox");
  newdivimg.setAttribute("id", nameiddiv);
  divraiz.appendChild(newdivimg);

  return newdivimg;
}

function creatdgeneral(padre) {
  //Creas td general
  let newtd = document.createElement("td");
  padre.appendChild(newtd);
  return newtd;
}

function creaencabezageneral(padre) {
  //Creas H1 general
  let newhuno = document.createElement("h1");
  padre.appendChild(newhuno);
  return newhuno;
}

function Creatrgeneral(padre) {
  //Crea tr general
  let newdivgeneral = document.createElement("tr"); //tr
  padre.appendChild(newdivgeneral);
  return newdivgeneral;
}



function cantidadarray() { //Cantidad de productos por tipo
  //Funcion que cuenta la cantidad de productos por tipo
  let arrayproddescrip = new Array();
  let objetposicion;
  let badenderainicio = 0;
  let iniciopos = 0;
  let finpos = 0;
  let tamtotalprod = 0;
  let dirarray=0;
  let arrayimgproduc=0;
  let cocienteimg=0;
  let residuoimg=0;

  for (let i = 0; i < listproarray.length; i++) {
    iniciopos = 0;
    finpos = 0;
    badenderainicio = 0;
    tamtotalprod = 0;

    for (let j = 0; j < shotsarray.length; j++) {
      if (listproarray[i] === shotsarray[j].nombre) {
        //son iguales los productos

        if (badenderainicio === 0) {
          iniciopos = j;
          //alert("El producto es: " + listproarray[i]);
          //alert("Inicia en: " + iniciopos);
          badenderainicio = 1;
        }
        finpos = j;
      } else {
        if (badenderainicio === 1) {
          break;
        }
      }
    }

    if (badenderainicio === 1) {
      tamtotalprod = finpos - iniciopos + 1;
      cocienteimg=Math.floor(tamtotalprod/cantiingxarray);
      residuoimg=(tamtotalprod%cantiingxarray);
     

      if(cocienteimg===0 && residuoimg>0 ){//Cantidad de arreglos de imagenes por producto
          arrayimgproduc=1;
      }else{
        if(cocienteimg>0 && residuoimg===0){
          arrayimgproduc=cocienteimg; 
        }else{
          if(cocienteimg>0 && residuoimg>0){
            arrayimgproduc=cocienteimg+1; 
            } 
          
      }
    }
      //alert("Total de arreglos de imagenes por producto: " + arrayimgproduc);

      objetposicion = {
        Nombre: listproarray[i],
        Desde: iniciopos,
        Hasta: finpos,
        Tamaño: tamtotalprod,
        Cosiente: cocienteimg,
        Residuo: residuoimg,
        Totalarrayimg: arrayimgproduc,

      };
 
      arrayproddescrip[dirarray] = objetposicion;
      dirarray++;
    }
  }

        
  return arrayproddescrip;
}





function maincarucel() {//Principal Codigo Main
let  arraycantprod=arrfiltraproduct;
      creacarritocomex();


for (let k = 0; k < arraycantprod.length; k++) {
 let subarrayimg=new Array();
 let posinicio=0;
 let posfin=0;



  for (let i = 0; i < arraycantprod[k].Totalarrayimg; i++) {
    //Crea carruseles
    subarrayimg=new Array();

     if(arraycantprod[k].Totalarrayimg===1){//Si el arreglo es solo uno o solo un visor
      posinicio=arraycantprod[k].Desde;
      posfin=parseInt(arraycantprod[k].Hasta)+1;

     }else{
             if(arraycantprod[k].Totalarrayimg===1){
                  posinicio=arraycantprod[k].Desde;
                  posfin=parseInt(arraycantprod[k].Hasta)+1;
                  
             }else{

                  if(arraycantprod[k].Totalarrayimg===(i+1)){//Si llega al final del arreglo
                    posinicio=posfin;
                    posfin=parseInt(arraycantprod[k].Hasta)+1;
                    


                  }else{
                          
                           posfin=parseInt(arraycantprod[k].Desde)+((i+1)*cantiingxarray);
                           posinicio=posfin-cantiingxarray;

                  }
             }


     }

        subarrayimg=shotsarray.slice(posinicio,posfin);//Saca imagenes de un arreglo y hace otro nuevo
         
        

    let namecarusel = arraycantprod[k].Nombre + i; //td id principal del carousel
    let caruseldivname = arraycantprod[k].Nombre+"carouselI" + i; //Div principal contenedor del carousel
    let caruselidolname = arraycantprod[k].Nombre+"caruindica" + i; //ol principal contenedor Indicadores inferiores cantidad de imagenes
    let caruseldivimgname = arraycantprod[k].Nombre+"carucelida" + i; //Div principal de cargado de imagenes
    let getimgid = ("idbtcompra"+"-"+arraycantprod[k].Nombre+"-"+arraycantprod[k].Totalarrayimg+ "-"+ (i+1)+"-"+arraycantprod[k].Residuo);//----------------------
       //"idbtcompra"-nombre-Cantidadarreglos-numero arreglo-Residuo del ultimo arreglo
    let principalraiz = document.getElementById(namecarusel); //td id principal del carousel
    
    let divraiz = creaconteprinci(caruseldivname, principalraiz); //Div principal contenedor del carousel
    let olindicantimg = creaindicadorcantimg(caruselidolname, divraiz); //ol principal contenedor Indicadores inferiores cantidad de imagenes
    let divcargaimg = creacargaimg(caruseldivimgname, divraiz); //Div principal de cargado de imagenes

    creaimgcar(divcargaimg, subarrayimg, getimgid); //Para tener las imagenes

    crealistimg(olindicantimg, subarrayimg, ("#" + divraiz.id), divraiz);
  }

  }
}

maincarucel();

//window.location.href = `CarritoCompras.html?nombre=${arrcarragrega}`
