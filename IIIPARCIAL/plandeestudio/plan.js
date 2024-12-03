const demoPlanEstudio = [
    {
        "id": 1,
        "bloque": "I",
        "asignaturas": [
            {
                "id": "ES101",
                "nombre": "ESPAÑOL",
                "creditos": 3,
                "orden": 0,
            },
            {
                "id": "MT101",
                "nombre": "MATEMATICAS",
                "creditos": 4,
                "orden": 1,
            },
            {
                "id": 'IF112',
                "nombre": "INTRODUCCIÓN A LAS CIENCIAS DE LA COMPUTACIÓN ",
                "creditos": 3,
                "orden": 2,
            },
            {
                "id": 'SC101',
                "nombre": "SOCIOLOGÍA",
                "creditos": 3,
                "orden": 3
            },
            {
                "id": 'FI101',
                "nombre": "FILOSOFÍA",
                "creditos": 3,
                "orden": 4
            },
        ]
    },
    {
        "id": 2,
        "bloque": "II",
        "asignaturas": [
            {
                "id": "ES201",
                "nombre": "EXPRESIÓN ORAL Y ESCRITA",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['ES101']
            },
            {
                "id": "MT201",
                "nombre": "PRE CALCULO",
                "creditos": 4,
                "orden": 1,
                "requisitos": ['MT101']
            },
            {
                "id": 'IF200',
                "nombre": "FUNDAMENTOS Y LÓGICA DE PROGRAMACIÓN",
                "creditos": 4,
                "orden": 2,
                "requisitos": ['IF112']
            },
            {
                "id": 'HS101',
                "nombre": "HISTORIA DE HONDURAS",
                "creditos": 3,
                "orden": 3,
            },
            {
                "id": 'CR201',
                "nombre": "EL HOMBRE FRENTE A LA VIDA",
                "creditos": 3,
                "orden": 4,
                "requisitos": ['FI101']
            },
        ]
    },
    {
        "id": 3,
        "bloque": "III",
        "asignaturas": [
            {
                "id": "MT202",
                "nombre": "ESTADÍSTICA I",
                "creditos": 4,
                "orden": 0,
                "requisitos": ['MT101']
            },
            {
                "id": "MT201",
                "nombre": "CALCULO I",
                "creditos": 4,
                "orden": 1,
                "requisitos": ['MT201']
            },
            {
                "id": 'IF214',
                "nombre": "PROGRAMACIÓN ESTRUCTURADA I",
                "creditos": 3,
                "orden": 2,
                "requisitos": ['IF200']
            },
            {
                "id": 'IF213',
                "nombre": "ESTRUCTURAS DISCRETAS",
                "creditos": 3,
                "orden": 3,
                "requisitos": ['IF200']
            }
        ]
    },

    {
        "id": 4,
        "bloque": "IV",
        "asignaturas": [
            {
                "id": "AD302",
                "nombre": "MÉTODOS Y TÉCNICAS DE INVESTIGACIÓN",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['MT202']
            },
            {
                "id": "MT401",
                "nombre": "CALCULO II",
                "creditos": 4,
                "orden": 1,
                "requisitos": ['MT303']
            },
            {
                "id": 'IF303',
                "nombre": "PROGRAMACIÓN ESTRUCTURADA II",
                "creditos": 3,
                "orden": 2,
                "requisitos": ['IF214']
            },
            {
                "id": 'FS201',
                "nombre": "FÍSICA I",
                "creditos": 3,
                "orden": 3,
                "requisitos": ['MT101']
            },
            {
                "id": 'CR201',
                "nombre": "ADMINISTRACIÓN",
                "creditos": 3,
                "orden": 4,
            },
        ]
    },

    {
        "id": 5,
        "bloque": "V",
        "asignaturas": [
            {
                "id": "IF322",
                "nombre": "BASES DE DATOS I",
                "creditos": 3,
                "orden": 0,
            },
            {
                "id": "CT201",
                "nombre": "CONTABILIDAD",
                "creditos": 3,
                "orden": 1,
            },
            {
                "id": 'IF325',
                "nombre": "PROGRAMACIÓN EN ENTORNOS DE DESARROLLO VISUAL",
                "creditos": 3,
                "orden": 2,
                "requisitos": ['IF303']
            },
            {
                "id": 'IF319',
                "nombre": "PRINCIPIOS DE ELETRÓNICA",
                "creditos": 3,
                "orden": 3,
                "requisitos": ['FS201']
            },
            {
                "id": 'MT204',
                "nombre": "MATEMÁTICAS FINANCIERA",
                "creditos": 3,
                "orden": 4,
                "requisitos": ['MT101']
            },
        ]
    },

    {
        "id": 6,
        "bloque": "VI",
        "asignaturas": [
            {
                "id": "IF327",
                "nombre": "BASES DE DATOS II",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['IF322']
            },
            {
                "id": "FI501",
                "nombre": "ÉTICA PROFESIONAL",
                "creditos": 3,
                "orden": 1,
                "requisitos": ['CR201']
            },
            {
                "id": 'IF212',
                "nombre": "ANÁLISIS Y DISEÑO DE SISTEMAS",
                "creditos": 4,
                "orden": 2,
            },
            {
                "id": 'IF323',
                "nombre": "REDES I",
                "creditos": 4,
                "orden": 3,
            },
            {
                "id": 'IF324',
                "nombre": "CIRCUITOS LÓGICOS",
                "creditos": 3,
                "orden": 4,
                "requisitos": ['IF319']
            },
        ]
    },

    {
        "id": 7,
        "bloque": "VII",
        "asignaturas": [
            {
                "id": "IF342",
                "nombre": "BASES DE DATOS MULTIDIMENSIONAL",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['IF327']
            },
            {
                "id": "IF340",
                "nombre": "PROGRAMACIÓN MULTIPLATAFORMA ",
                "creditos": 3,
                "orden": 1,
            },
            {
                "id": 'IF314',
                "nombre": "DESARROLLO DE SOFTWARE ",
                "creditos": 4,
                "orden": 2,
                "requisitos": ['IF212']
            },
            {
                "id": 'IF328',
                "nombre": "REDES II",
                "creditos": 4,
                "orden": 3,
                "requisitos": ['IF323']
            },
            {
                "id": 'IF329',
                "nombre": "SISTEMAS AUTOMATIZADOS",
                "creditos": 3,
                "orden": 4,
                "requisitos": ['IF324']
            },
        ]
    },

    {
        "id": 8,
        "bloque": "VIII",
        "asignaturas": [
            {
                "id": "IF391",
                "nombre": "SISTEMAS INTELIGENTES PARA NEGOCIOS",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['IF342']
            },
            {
                "id": "IF346",
                "nombre": "IMPLEMENTACIÓN DE SISTEMAS DE SOFTWARE",
                "creditos": 3,
                "orden": 1,
                "requisitos": ['IF314']
            },
            {
                "id": 'IF345',
                "nombre": "SISTEMAS OPERATIVOS I",
                "creditos": 3,
                "orden": 2,
            },
            {
                "id": 'IF370',
                "nombre": "MICROCONTROLADORES",
                "creditos": 3,
                "orden": 3,
            }
        ]
    },

    {
        "id": 9,
        "bloque": "IX",
        "asignaturas": [
            {
                "id": "IF353",
                "nombre": "DESARROLLO DE PORTALES WEB I",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['IF340']
            },
            {
                "id": "IF351",
                "nombre": "PROGRAMACIÓN MOVIL I",
                "creditos": 3,
                "orden": 1,
            },
            {
                "id": 'AD104',
                "nombre": "GESTIÓN DE LA CALIDAD TOTAL",
                "creditos": 3,
                "orden": 2,
            },
            {
                "id": 'IF352',
                "nombre": "SISTEMAS OPERATIVOS II ",
                "creditos": 3,
                "orden": 3,
                "requisitos": ['IF323']
            },
            {
                "id": 'IF381',
                "nombre": "SEMINARIO DE HARDWARE Y ELECTRICIDAD ",
                "creditos": 3,
                "orden": 4,
                "requisitos": ['IF370']
            },
        ]
    },

    {
        "id": 10,
        "bloque": "X",
        "asignaturas": [
            {
                "id": "IF357",
                "nombre": "DESARROLLO DE PORTALES WEB II",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['IF353']
            },
            {
                "id": "IF355",
                "nombre": "PROGRAMACIÓN MOVIL II",
                "creditos": 3,
                "orden": 1,
                "requisitos": ['IF351']
            },
            {
                "id": 'MT304',
                "nombre": "CONTROL ESTADÍSTICO DE LA CALIDAD",
                "creditos": 3,
                "orden": 2,
                "requisitos": ['AD104']
            },
            {
                "id": 'IF356',
                "nombre": "GESTIÓN Y ESTANDARES DE TECNOLOGÍA DE INFORMACIÓN",
                "creditos": 3,
                "orden": 3,
            },
            {
                "id": 'CR501',
                "nombre": "DOCTRINA SOCIAL DE LA IGLESIA",
                "creditos": 3,
                "orden": 4,
                "requisitos": ['FI501']
            },
        ]
    },

    {
        "id": 11,
        "bloque": "XI",
        "asignaturas": [
            {
                "id": "IF362",
                "nombre": "NEGOCIOS WEB",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['IF357']
            },
            {
                "id": "IF347",
                "nombre": "PROGRAMACIÓN DE NEGOCIOS",
                "creditos": 3,
                "orden": 1,
            },
            {
                "id": 'AD402',
                "nombre": "PLANEACIÓN Y DISEÑO DE UN MODELO DE CALIDAD",
                "creditos": 3,
                "orden": 2,
                "requisitos": ['MT304']
            },
            {
                "id": 'IF360',
                "nombre": "SEGURIDAD INFORMÁTICA Y GESTIÓN DE RIESGO",
                "creditos": 3,
                "orden": 3,
                "requisitos": ['IF356']
            },
            {
                "id": 'IF358',
                "nombre": "ADMINISTRACIÓN DE CENTROS DE COMPUTO",
                "creditos": 3,
                "orden": 4,
                "requisitos": ['IF356']
            },
        ]
    },

    {
        "id": 12,
        "bloque": "XII",
        "asignaturas": [
            {
                "id": "IF361",
                "nombre": "SEMINARIO-TALLER DE SOFTWARE",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['IF362']
            },
            {
                "id": "IF392",
                "nombre": "GESTIÓN DE PROYECTOS INFORMÁTICOS",
                "creditos": 3,
                "orden": 1,
                "requisitos": ['IF347']
            },
            {
                "id": 'IF350',
                "nombre": "BIG DATA",
                "creditos": 4,
                "orden": 2,
                "requisitos": ['IF391']
            },
            {
                "id": 'IF380',
                "nombre": "AUDITORÍA DE SISTEMAS DE INFORMACIÓN ",
                "creditos": 4,
                "orden": 3,
                "requisitos": ['IF360']
            }    
        ]
    },

    {
        "id": 13,
        "bloque": "XIII",
        "asignaturas": [
            {
                "id": "IF400",
                "nombre": "PRÁCTICA PROFESIONAL SUPERVISADA",
                "creditos": "",
                "requisitosBloques": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                "orden": 0,
            }
        ]
    },

    {
        "id": 14,
        "bloque": "XIV",
        "asignaturas": [
            {
                "id": "IF395",
                "nombre": "INVESTIGACIÓN TECNOLÓGICA",
                "creditos": "",
                "orden": 0,
            }
        ]
    }
];

class PlanDeEstudio {
    planDeEstudio = [];
    contenedor = null;
    currentAsignatura = null;

    asignaturasRef = {};

    constructor(planDeEstudio, contenedorSelector = '#planDeEstudio'){
        if(planDeEstudio) {
            this.planDeEstudio = planDeEstudio;
            this.planDeEstudio.forEach(bloque => {
                bloque.asignaturas.forEach(asignatura => {
                    this.asignaturasRef[asignatura.id] = {}; 
                });
            });
        } else {
            throw new Error("Plan de Estudio es Requerido");
        }
        this.contenedor = document.querySelector(contenedorSelector);
    
        if (this.contenedor) {
            this.updateUI();
        } else {
            throw new Error(`El selector ${contenedorSelector} no representa un nodo en el documento actual`);
        }
    }

    updateUI(){
        this.contenedor.classList.add("plan");
        this.planDeEstudio.forEach( (bloque) => {
            console.log(`Rendering block: ${bloque.bloque}`); 
            this.contenedor.appendChild(this.generateBlockUI(bloque));
        });
    }

    generateBlockUI(bloque){
        const bloqueUI = document.createElement("SECTION");
        bloqueUI.classList.add('bloque');
        const bloqueLabel = document.createElement("DIV");
        bloqueLabel.classList.add('label');
        bloqueLabel.setAttribute("id",`blq_${bloque.id}]`)
        bloqueLabel.innerHTML = bloque.bloque;
        const bloqueAsignaturas = document.createElement("DIV");
        bloqueAsignaturas.classList.add('asignaturas');

        bloque.asignaturas.forEach((asignatura)=>{
            bloqueAsignaturas.appendChild(this.generateAsignatura(asignatura));
        });

        bloqueUI.appendChild(bloqueLabel);
        bloqueUI.appendChild(bloqueAsignaturas);
        return bloqueUI;
    }


    generateAsignatura(asignatura) {
        const asignaturaUI = document.createElement("DIV");
        asignaturaUI.classList.add("asignatura");
        asignaturaUI.setAttribute('id', `${asignatura.id}`);
    
        // Crear el contenido de la asignatura
        let creditosTexto = asignatura.creditos ? `Créditos: ${asignatura.creditos}` : '';
    
        asignaturaUI.innerHTML = `<span>${asignatura.nombre}<br/>(${asignatura.id})<br> ${creditosTexto}</span>`;
    
        // Si la asignatura tiene requisitos
        if (asignatura.requisitos) {
            asignaturaUI.setAttribute('data-requisitos', JSON.stringify(asignatura.requisitos));
            asignatura.requisitos.forEach((req) => {
                let apertura = [];
                if (this.asignaturasRef[req] && this.asignaturasRef[req].getAttribute) {
                    apertura = JSON.parse(this.asignaturasRef[req].getAttribute('data-apertura') || '[]');
                }
    
                if (!apertura.includes(asignatura.id)) {
                    apertura.push(asignatura.id);
                }
    
                if (apertura.length > 0 && this.asignaturasRef[req] && this.asignaturasRef[req].setAttribute) {
                    this.asignaturasRef[req].setAttribute('data-apertura', JSON.stringify(apertura));
                }
            });
        }
    
        // Eventos del mouse (mouseenter y mouseleave)
        asignaturaUI.addEventListener('mouseenter', () => {
            this.currentAsignatura = asignaturaUI;
            this.currentAsignatura.classList.add("selected");
            let requisitos = JSON.parse(this.currentAsignatura.dataset.requisitos || '[]');
            let apertura = JSON.parse(this.currentAsignatura.dataset.apertura || '[]');
    
            requisitos.forEach((req) => {
                if (this.asignaturasRef[req]) {
                    this.asignaturasRef[req].classList.add('requisito');
                }
            });
    
            apertura.forEach((apt) => {
                if (this.asignaturasRef[apt]) {
                    this.asignaturasRef[apt].classList.add('apertura');
                }
            });
        });
    
        asignaturaUI.addEventListener('mouseleave', () => {
            if (this.currentAsignatura) {
                this.currentAsignatura.classList.remove("selected");
                let requisitos = JSON.parse(this.currentAsignatura.dataset.requisitos || '[]');
                let apertura = JSON.parse(this.currentAsignatura.dataset.apertura || '[]');
                requisitos.forEach((req) => {
                    if (this.asignaturasRef[req]) {
                        this.asignaturasRef[req].classList.remove('requisito');
                    }
                });
                apertura.forEach((apt) => {
                    if (this.asignaturasRef[apt]) {
                        this.asignaturasRef[apt].classList.remove('apertura');
                    }
                });
                this.currentAsignatura = null;
            }
        });
    
        this.asignaturasRef[asignatura.id] = asignaturaUI;
    
        return asignaturaUI;
    }}