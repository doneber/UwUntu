import { $ } from "./utils"

const outputElement = $('.terminal__output')
const promptElement = $('.terminal__input')

export const commands = [
  // command 'clear' that clears the terminal
  {
    name: 'clear',
    handler: () => {
      outputElement.innerHTML = ''
      return ''
    },
    description: 'Clear the terminal screen',
    usage: '',
    options: []
  },
  {
    name: 'uwu',
    handler: () => {
      promptElement.style.display = 'none'
      // messages
      const defaultMessages = [
        ["Tú eres capaz de lograr cosas extraordinarias.", "¡Ve tras tus sueños!", "💪🔥"],
        ["No te rindas, porque dentro de ti hay una fuerza que puede superar cualquier obstáculo.", "🌟🏆"],
        ["Confía en ti mismo y en tus habilidades.", "Eres más fuerte de lo que crees.", "🌈✨"],
        ["No importa cuántas veces te caigas, levántate una vez más y sigue adelante.", "🚀💫"],
        ["Cada paso que das te acerca más a tus metas.", "Sigue avanzando, no te detengas.", "🌞🌻"],
        ["El éxito no llega de la noche a la mañana.", "Sigue trabajando duro y los resultados vendrán.", "🙌🎯"],
        ["Tienes el poder de cambiar tu vida.", "Empieza por creer en ti mismo.", "🌙⭐"],
        ["No permitas que el miedo te detenga.", "Enfrenta tus miedos y descubrirás tu verdadero potencial.", "🌺🌟"],
        ["Eres único y tienes talentos especiales.", "Aprovecha tus fortalezas y marca la diferencia.", "🌟💡"],
        ["Las dificultades son oportunidades para crecer.", "Afróntalas con valentía y aprenderás lecciones importantes.", "🌱🌿"],
        ["Cada día es una nueva oportunidad para ser mejor.", "Aprovecha al máximo cada momento.", "🌟🌠"],
        ["No te compares con otros.", "Tu camino es único y debes caminar a tu propio ritmo.", "🌈❤️"],
        ["Tú eres el autor de tu propia historia.", "Escribe un capítulo lleno de éxito y superación.", "🌟🚀"],
        ["Mantén la vista en tus metas y no te distraigas por los obstáculos en el camino.", "🎉🎈"],
        ["No importa cuánto tiempo tome, persevera y alcanzarás el éxito que deseas.", "🌟⚡"],
        ["Las pequeñas acciones que tomas hoy pueden tener un gran impacto en tu futuro.", "¡No subestimes su poder!", "🌟💫"],
        ["No permitas que el pasado defina tu futuro.", "Cada día es una nueva oportunidad para cambiar y crecer.", "🌟🔑"],
        ["Cuando te sientas desanimado, recuerda cuánto has superado en el pasado.", "Eres más fuerte de lo que piensas.", "🌟🎓"],
        ["El éxito requiere esfuerzo y dedicación.", "Trabaja duro y persevera, los resultados valdrán la pena.", "💖🌟"],
        ["No te conformes con menos de lo que mereces.", "Busca la grandeza y alcanza nuevas alturas.", "⏳🌟"],
        ["El camino hacia el éxito puede ser difícil, pero cada desafío te acerca más a tus metas.", "¡No te rindas!", "🌟🌈"],
        ["Eres capaz de enfrentar cualquier adversidad.", "Recuerda que dentro de ti hay una fuerza inquebrantable.", "🌟🔥"],
        ["No dejes que el miedo al fracaso te paralice.", " Atrévete a salir de tu zona de confort y persigue tus sueños.", "💪🌟"],
        ["Recuerda que cada pequeño paso cuenta.", " No subestimes el poder de la consistencia y la perseverancia.", "🚶‍♂️🚶‍♀️"],
        ["La vida está llena de oportunidades, pero debes estar dispuesto a buscarlas y aprovecharlas.", "🌟🔍"],
        ["No te preocupes por los obstáculos en tu camino.", " Enfócate en las soluciones y encontrarás la forma de superarlos.", "🧗‍♂️🔝"],
        ["Confía en tu intuición y en tu capacidad para tomar decisiones.", " Eres más sabio de lo que crees.", "🤲🧠"],
        ["Celebra tus logros, por pequeños que sean.", " Cada paso adelante es motivo de orgullo.", "🎉🏆"],
        ["No permitas que las críticas te afecten.", " Enfócate en tu propio crecimiento y en convertirte en la mejor versión de ti mismo.", "🚫👥"],
        ["A veces, los momentos más difíciles nos brindan las lecciones más valiosas.", " Aprende de ellos y sigue adelante.", "🌅📚"],
        ["La vida es demasiado corta para vivir con arrepentimientos.", " Toma riesgos y persigue tus pasiones.", "🌟🔥"],
        ["Mantén una mentalidad positiva y optimista.", " Tus pensamientos tienen el poder de influir en tu realidad.", "😊🌈"],
        ["No te compares con los demás, sigue tu propio camino y crea tu propia definición de éxito.", "🚶‍♂️🌟"],
        ["Aprecia cada día y encuentra la belleza en las pequeñas cosas.", " La felicidad se encuentra en el presente.", "🌸😊"],
        ["No dejes que los fracasos te desanimen.", " Utilízalos como trampolines para impulsarte hacia el éxito.", "🚫😔"],
        ["No hay límites para lo que puedes lograr.", " Si puedes soñarlo, puedes hacerlo realidad.", "💫🌟"],
        ["El éxito no es solo un destino, es un viaje.", " Disfruta del proceso y aprende de cada paso del camino.", "🏞🚶‍♂️"],
        ["El secreto del éxito está en levantarte una vez más después de cada caída.", " Nunca te rindas.", "🏋️‍♂️👊"],
        ["Cree en tu capacidad para superar cualquier desafío.", " Eres más fuerte de lo que imaginas.", "💪🌟"],
        ["No esperes a que las condiciones sean perfectas para actuar.", " El momento de empezar es ahora.", "⏳💥"],
        ["Celebra tus progresos, por pequeños que sean.", " Cada paso cuenta en tu camino hacia el éxito.", "🎉🚶‍♂️"],
        ["Recuerda que el fracaso no define tu valor.", " Lo que importa es cómo te levantas y sigues adelante.", "💔🚶‍♂️"],
        ["Enfócate en soluciones en lugar de enfocarte en problemas.", " Encuentra la manera de convertir los desafíos en oportunidades.", "🕵️‍♂️💡"],
        ["No permitas que el pasado defina tu futuro.", " Tú tienes el poder de crear una nueva historia para ti mismo.", "⏮🔜"],
        ["Confía en tu instinto y en tu capacidad para tomar decisiones.", " Eres más sabio de lo que crees.", "🙌🤔"],
        ["El éxito no se trata solo de alcanzar metas, sino de disfrutar el proceso y aprender en el camino.", "🏆🚶‍♀️"],
        ["Cada día es una oportunidad para crecer y mejorar.", " Aprovecha al máximo cada momento.", "📈🌱"],
        ["No te conformes con la mediocridad.", " Busca la grandeza y persigue la excelencia en todo lo que hagas.", "💫🌟"],
        ["Tu actitud determina tu altitud.", " Mantén una actitud positiva y abierta ante los desafíos.", "💪👁️‍🗨️"],
        ["No tengas miedo de pedir ayuda cuando la necesites.", " Todos necesitamos apoyo en nuestro camino hacia el éxito.", "🤝🆘"],
        ["La autodisciplina es la clave para alcanzar tus metas.", " Mantén el enfoque y sé constante en tus esfuerzos.", "🧭🏃‍♂️"],
        ["No te rindas por miedo al fracaso.", " Recuerda que cada intento es una oportunidad de aprendizaje y crecimiento.", "😨📖"],
        ["No permitas que las opiniones de los demás definan tu valía.", " Eres capaz de lograr cosas extraordinarias.", "🤷‍♂️💪"],
        ["La perseverancia es la clave para superar cualquier obstáculo.", " Mantén tu determinación y sigue adelante.", "🏃‍♀️🔥"],
        ["Aprecia tus fortalezas y trabaja en tus debilidades.", " Cada paso hacia la mejora te acerca más al éxito.", "🌟💪"],
        ["Recuerda que los errores son lecciones enmascaradas.", " Aprende de ellos y úsalos para crecer y mejorar.", "🔄📚"],
        ["La pasión y la dedicación son el combustible que te impulsa hacia el éxito.", " Encuentra lo que te apasiona y persíguelo.", "🔥🌟"],
        ["No te compares con los demás.", " Tu único objetivo debe ser superar a la persona que eras ayer.", "🚶‍♂️⏩"],
        ["La vida está llena de oportunidades, pero debes estar dispuesto a aprovecharlas.", " Toma acción y crea tu propio destino.", "🔍💪"],
        ["No esperes a que las circunstancias sean perfectas.", " Empieza con lo que tienes y haz lo mejor que puedas.", "🌟⏳"],
        ["La verdadera fortaleza se encuentra en levantarte cada vez que caes.", " Nunca subestimes tu capacidad de resiliencia.", "🌟🥊"],
        ["La mentalidad positiva y el pensamiento optimista abren puertas hacia el éxito.", " Aliméntalos cada día.", "😃🌞"],
        ["No te detengas en los fracasos pasados.", " Cada nuevo día es una oportunidad para comenzar de nuevo.", "🌅🔄"],
        ["El éxito no es solo una meta, es un estilo de vida.", " Vive con pasión, propósito y determinación.", "🌟💼"],
        ["Cree en ti mismo y en tu capacidad para lograr tus sueños.", " Eres más poderoso de lo que imaginas.", "💪🌟"],
        ["Celebra tus logros, por pequeños que sean.", " Cada paso adelante es un avance en tu camino hacia el éxito.", "🎉🏃‍♂️"],
        ["La autenticidad es tu superpoder.", " Abraza tu verdadero yo y deja que brille en todo lo que haces.", "🌟🦸‍♂️"],
        ["No permitas que el miedo al qué dirán te detenga.", " Vive tu vida de acuerdo a tus propias convicciones.", "😳🚫"],
        ["La gratitud es la clave para atraer más bendiciones a tu vida.", " Agradece por lo que tienes y verás crecer lo bueno.", "🙏🌟"],
        ["Cada desafío es una oportunidad de crecimiento y superación.", " Enfrenta los obstáculos con valentía y determinación.", "🧗‍♀️💪"],
        ["No te preocupes por el tiempo que tomará alcanzar tus metas.", " Enfócate en el proceso y disfruta el viaje.", "⌛🚶‍♂️"],
        ["Tu mayor competencia eres tú mismo.", " Supera tus propios límites y alcanza nuevas alturas.", "🥇🏃‍♂️"],
        ["La consistencia es la clave del éxito.", " Mantén un enfoque constante en tus metas y avanza un paso a la vez.", "🌟🔑"],
        ["No permitas que los fracasos te definan.", " Utilízalos como trampolines para saltar aún más alto.", "📉🔝"],
        ["No busques la perfección, busca el progreso.", " Cada pequeño avance te acerca más a la excelencia.", "🌟🔝"],
        ["La vida es demasiado corta para vivir con arrepentimientos.", " Toma acción y persigue tus sueños sin temor.", "⌛🔥"],
        ["Tu actitud determina tu éxito.", " Elige ser positivo, resiliente y perseverante en todo momento.", "💪😀"],
        ["No importa cuántas veces caigas, siempre levántate con más fuerza.", " Eres más fuerte de lo que crees.", "🤼‍♂️💪"],
        ["La motivación puede venir de adentro de ti.", " Cultiva tu pasión y encuentra inspiración en cada día.", "💪🔥"],
        ["No te conformes con la mediocridad.", " Busca la grandeza en todo lo que haces y deja una huella duradera.", "🚀💪"],
        ["Recuerda que cada día es una nueva oportunidad para reinventarte.", " Aprovecha al máximo cada amanecer.", "🌅✨"],
        ["El miedo es solo una ilusión.", " Supéralo y descubrirás un mundo de posibilidades infinitas.", "😨🔮"],
        ["No importa cuánto talento tienes, lo que importa es cómo lo utilizas.", " Enfoca tu energía en acciones positivas.", "🌅🆕"],
        ["El éxito no se trata solo de logros materiales, se trata de ser feliz y realizado en todos los aspectos de la vida.", "💼🌟"],
        ["No te desanimes por los obstáculos en tu camino.", " Recuerda que cada desafío te hace más fuerte y más sabio.", "🌟⛰️"],
        ["No te compares con los demás.", " Tu viaje es único y tienes tu propio ritmo.", " Avanza a tu manera y con orgullo.", "🚶‍♂️🏃‍♀️"],
        ["Cree en tus sueños y trabaja arduamente para hacerlos realidad.", " El poder de transformar tu vida está en tus manos.", "💪💭"],
        ["El fracaso es solo una oportunidad para empezar de nuevo de manera más inteligente y con más determinación.", "🌟🔄"],
        ["No pierdas de vista tus metas, incluso cuando enfrentes obstáculos.", " Mantén tu visión clara y sigue adelante.", "🎯🌟"],
        ["No importa cuán difícil parezca, recuerda que siempre hay una solución.", " Busca alternativas y encuentra el camino.", "❓🔍"],
        ["Tu mentalidad es la clave para el éxito.", " Cree en ti mismo y en tus capacidades, y verás cómo todo es posible.", "💭💪"],
        ["No permitas que el miedo al rechazo te detenga.", " Avanza con valentía y sé fiel a quien eres y a lo que deseas.", "😱💔"],
        ["Cada día es una oportunidad para hacer algo extraordinario.", " Aprovecha al máximo cada momento y deja tu huella.", "🌟🌠"],
        ["No esperes a que las circunstancias sean perfectas.", " Empieza ahora mismo con lo que tienes y da el primer paso.", "🌅🏃‍♂️"],
        ["Recuerda que eres el arquitecto de tu propia vida.", " Construye una base sólida y ve creando tu camino hacia el éxito.", "🧱🔨"],
        ["El éxito no se trata solo de lograr metas, sino de convertirte en la mejor versión de ti mismo en el proceso.", "🏆💎"],
        ["No te rindas ante las críticas o los fracasos.", " Utilízalos como impulso para mejorar y demostrar tu verdadero potencial.", "💔📈"],
        ["Confía en tu intuición y sigue tu corazón.", " Encontrarás que tus decisiones más audaces te llevarán a los mayores éxitos.", "💡💔"],
        ["La clave para superar los desafíos está en tu actitud.", " Acepta los desafíos con valentía y busca soluciones creativas.", "💪🔑"],
        ["Tú tienes el poder de crear la vida que deseas.", " Enfócate en tus sueños, trabaja duro y nunca dejes de creer en ti mismo.", "🌟"],
      ]

      const messages = defaultMessages[Math.floor(Math.random() * defaultMessages.length)]
      // this line is to cover the error that not display the last message
      messages.push('')
      let velocity = 1
      const promptPalpitation = document.createElement('span')
      promptPalpitation.className = 'prompt-palpitation'
      promptPalpitation.innerHTML = '&nbsp;'
      // display messages with a delay using promises
      let oldParant: HTMLElement|null = null
      let newParant: HTMLElement|null = null
      messages.reduce((promise, message, index) => {
        let delay = null
        return promise.then(() => {
          return new Promise(resolve => {
            // calculate delay time
            delay = (((messages[index - 1]?.length || 5) * 80) / velocity) + 1000
            setTimeout(() => {
              // create a div element to add the message
              const newLineContainerElement = document.createElement('div')
              newParant = newLineContainerElement
              newLineContainerElement.classList.add('history-line')
              outputElement.appendChild(newLineContainerElement)

              // create a span element to add the message
              const lineMessageElement = document.createElement('span')
              newLineContainerElement.appendChild(lineMessageElement)

              // add the prompt palpitation to the newLineContainerElement
              if (!oldParant) newLineContainerElement.appendChild(promptPalpitation)
              else if (oldParant.lastChild instanceof Node) newLineContainerElement.appendChild(oldParant.lastChild)

              // add letter by letter of the message to the newLineContainerElement every 100ms
              message.split('').reduce((promise, letter) => {
                return promise.then(() => {
                  return new Promise(resolve => {
                    setTimeout(() => {
                      lineMessageElement.innerHTML += letter
                      resolve()
                    }, 80 / velocity)
                  })
                })
              }, Promise.resolve()).then(() => {
                // if message start with https then add a link
                if (message.startsWith('https://')) {
                  lineMessageElement.innerHTML = `<a href="${message}" target="_blank">${message}</a>`
                }
              })
              oldParant = newParant
              resolve()
            }, delay)
          })
        })
      }, Promise.resolve()).then(
        () => {
          if (outputElement.lastChild instanceof Node){
            promptElement.style.display = 'flex'
            outputElement.removeChild(outputElement.lastChild)
            $('.terminal__input input').focus()
          }
        }
      )
      return ''
    },
    description: 'Display a message',
    usage: '',
    options: []
  }
]
