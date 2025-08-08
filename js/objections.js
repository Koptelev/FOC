// Данные о возражениях из 1.html
const objections = [
    // Возражения секретаря
    {
        title: "Если секретарь упорствует, не пропускает",
        description: "Если секретарь упорствует и не пропускает к руководителю, выбираем один из вариантов ответа. В конце обязательно задаём вопрос для управления вниманием.",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Вариант 1 - Уполномочивание:</h4>
                <p class="text-blue-700">"Я уполномочен решать такие вопросы только с тем, кто непосредственно занимается проверкой КА. Тогда переведите, пожалуйста, звонок на директора, он точно в курсе, кто занимается данным вопросом. <strong>Он сейчас на месте?</strong>"</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Вариант 2 - Стратегический вопрос:</h4>
                <p class="text-green-700">"Это стратегический вопрос безопасности вашей компании. Чтобы обсудить детали, необходимо поговорить с человеком, который непосредственно занимается проверкой. <strong>С кем мне лучше переговорить?</strong>"</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Вариант 3 - Информация о репутации:</h4>
                <p class="text-purple-700">"У меня информация по репутации партнеров. Соедините, пожалуйста, с директором (юристом). Если он сочтёт необходимым, то поставят вас в курс дела. <strong>Он на обед ещё не ушел?</strong>"</p>
            </div>
            
            <div class="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <h4 class="font-semibold text-orange-800 mb-2">Вариант 4 - Ответственность:</h4>
                <p class="text-orange-700">"Вы согласны нести ответственность за то, что ваш руководитель не будет владеть информацией о проявлении должной осмотрительности при заключении договоров в связи с постановлением налоговой службы? <strong>Как я могу с ним оперативно связаться?</strong>"</p>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <h4 class="font-semibold text-red-800 mb-2">Вариант 5 - Арбитражи:</h4>
                <p class="text-red-700">"Если у компании есть арбитражи, в судебном решении зачастую указано, кто именно представлял компанию в суде — у вас есть имя сотрудника компании, спросите сразу его. Вероятнее всего, он сможет подсказать, с кем переговорить по проверке контрагентов."</p>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <h4 class="font-semibold text-yellow-800 mb-2">Вариант 6 - Микропредприятие:</h4>
                <p class="text-yellow-700">"Если это микропредприятие, спросите сразу директора, его имя можно посмотреть в Контур.Фокусе на карточке компании."</p>
            </div>
            
            <div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <h4 class="font-semibold text-indigo-800 mb-2">Вариант 7 - Официальное письмо:</h4>
                <p class="text-indigo-700">"Если секретарь говорит, что общение с сотрудниками компании строится только через официальное письмо, узнаем ФИО, должность, эл. почту и прямой телефон получателя. Отправляем ему официальное письмо, а затем звоним ответственному сотруднику насчет получения письма напрямую или через приемную, и ведем работу с ним."</p>
            </div>
            
            <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
                <h4 class="font-semibold text-gray-800 mb-2">Ключевые принципы:</h4>
                <ul class="list-disc list-inside text-gray-700 space-y-1">
                    <li>В конце обязательно задаём вопрос</li>
                    <li>Управляем вниманием собеседника</li>
                    <li>Даём меньше поводов для отказа</li>
                    <li>Стремимся соединить с ЛПР</li>
                </ul>
            </div>
        </div>`,
        category: "secretary"
    },
    {
        title: "Руководитель не принимает звонки",
        description: "Секретарь говорит, что руководитель не принимает звонки от продавцов. Как преодолеть это возражение?",
        answer: "Предложите отправить информацию на email или оставить сообщение. Покажите ценность сервиса для бизнеса.",
        category: "secretary"
    },
    {
        title: "Секретарь просит перезвонить позже",
        description: "Секретарь постоянно просит перезвонить позже. Как эффективно работать с таким возражением?",
        answer: "Узнайте лучшее время для звонка и договоритесь о конкретном времени. Подготовьте краткое ценностное предложение.",
        category: "secretary"
    },
    {
        title: "Секретарь упорствует, не пропускает",
        description: "Если секретарь упорствует и не пропускает к руководителю, выбираем один из вариантов ответа. В конце обязательно задаём вопрос для управления вниманием.",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Вариант 1 - Уполномочивание:</h4>
                <p class="text-blue-700">"Я уполномочен решать такие вопросы только с тем, кто непосредственно занимается проверкой КА. Тогда переведите, пожалуйста, звонок на директора, он точно в курсе, кто занимается данным вопросом. <strong>Он сейчас на месте?</strong>"</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Вариант 2 - Стратегический вопрос:</h4>
                <p class="text-green-700">"Это стратегический вопрос безопасности вашей компании. Чтобы обсудить детали, необходимо поговорить с человеком, который непосредственно занимается проверкой. <strong>С кем мне лучше переговорить?</strong>"</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Вариант 3 - Информация о репутации:</h4>
                <p class="text-purple-700">"У меня информация по репутации партнеров. Соедините, пожалуйста, с директором (юристом). Если он сочтёт необходимым, то поставят вас в курс дела. <strong>Он на обед ещё не ушел?</strong>"</p>
            </div>
            
            <div class="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <h4 class="font-semibold text-orange-800 mb-2">Вариант 4 - Ответственность:</h4>
                <p class="text-orange-700">"Вы согласны нести ответственность за то, что ваш руководитель не будет владеть информацией о проявлении должной осмотрительности при заключении договоров в связи с постановлением налоговой службы? <strong>Как я могу с ним оперативно связаться?</strong>"</p>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <h4 class="font-semibold text-red-800 mb-2">Вариант 5 - Арбитражи:</h4>
                <p class="text-red-700">"Если у компании есть арбитражи, в судебном решении зачастую указано, кто именно представлял компанию в суде — у вас есть имя сотрудника компании, спросите сразу его. Вероятнее всего, он сможет подсказать, с кем переговорить по проверке контрагентов."</p>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <h4 class="font-semibold text-yellow-800 mb-2">Вариант 6 - Микропредприятие:</h4>
                <p class="text-yellow-700">"Если это микропредприятие, спросите сразу директора, его имя можно посмотреть в Контур.Фокусе на карточке компании."</p>
            </div>
            
            <div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <h4 class="font-semibold text-indigo-800 mb-2">Вариант 7 - Официальное письмо:</h4>
                <p class="text-indigo-700">"Если секретарь говорит, что общение с сотрудниками компании строится только через официальное письмо, узнаем ФИО, должность, эл. почту и прямой телефон получателя. Отправляем ему официальное письмо, а затем звоним ответственному сотруднику насчет получения письма напрямую или через приемную, и ведем работу с ним."</p>
            </div>
            
            <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
                <h4 class="font-semibold text-gray-800 mb-2">Ключевые принципы:</h4>
                <ul class="list-disc list-inside text-gray-700 space-y-1">
                    <li>В конце обязательно задаём вопрос</li>
                    <li>Управляем вниманием собеседника</li>
                    <li>Даём меньше поводов для отказа</li>
                    <li>Стремимся соединить с ЛПР</li>
                </ul>
            </div>
        </div>`,
        category: "secretary"
    },
    {
        title: "По какому вопросу?",
        description: "Секретарь спрашивает: 'По какому вопросу?' Выбираем один из вариантов ответа. В конце обязательно задаём вопрос для управления вниманием.",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Вариант 1 - Юридический вопрос:</h4>
                <p class="text-blue-700">"По юридическому вопросу, связанному с заключением договоров. <strong>Он сейчас на месте?</strong>"</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Вариант 2 - Работа с юрлицами:</h4>
                <p class="text-green-700">"По вопросу работы с юрлицами (по работе с партнерами). <strong>Он на обед еще не ушел?</strong>"</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Вариант 3 - Финансовая благонадежность:</h4>
                <p class="text-purple-700">"По вопросу финансовой благонадежности вашей компании. <strong>С кем мне лучше переговорить?</strong>"</p>
            </div>
            
            <div class="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <h4 class="font-semibold text-orange-800 mb-2">Вариант 4 - Экономическая безопасность:</h4>
                <p class="text-orange-700">"По поводу экономической безопасности. <strong>Кто у вас занимается этим вопросом?</strong>"</p>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <h4 class="font-semibold text-red-800 mb-2">Возможные ответы клиента:</h4>
                <ul class="list-disc list-inside text-red-700 space-y-1">
                    <li>"По какому именно вопросу с договорами /с юрлицами?"</li>
                    <li>"Какое вы имеете отношение к нашим договорам/партнерам?"</li>
                    <li>"Ничего не понятно, поясните нормально суть вопроса."</li>
                </ul>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <h4 class="font-semibold text-yellow-800 mb-2">Ответы на возражения клиента:</h4>
                <div class="space-y-3">
                    <p class="text-yellow-700"><strong>Вопрос:</strong> "А вы юрист/руководитель?"</p>
                    <p class="text-yellow-700"><strong>Вопрос:</strong> "Вы занимаетесь проверкой контрагентов на финансовую надежность?"</p>
                    <p class="text-yellow-700"><strong>Если нет:</strong> "Я уполномочен обсуждать такие вопросы только с тем, кто занимается проверкой КА. Переведите, пожалуйста, звонок на руководителя, он точно в курсе, кто занимается данным вопросом."</p>
                </div>
            </div>
            
            <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
                <h4 class="font-semibold text-gray-800 mb-2">Ключевые принципы:</h4>
                <ul class="list-disc list-inside text-gray-700 space-y-1">
                    <li>В конце обязательно задаём вопрос</li>
                    <li>Управляем вниманием собеседника</li>
                    <li>Даём меньше поводов для отказа</li>
                    <li>Стремимся соединить с ЛПР</li>
                </ul>
            </div>
        </div>`,
        category: "secretary"
    },
    {
        title: "Что вы хотите предложить?",
        description: "Секретарь спрашивает: 'У Вас есть коммерческое предложение?' Речь идет не о предложении, а о проявлении должной осмотрительности.",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Основной ответ:</h4>
                <p class="text-blue-700">"Речь идет не о предложении, а о проявлении должной осмотрительности от лица компании. Переведите, пожалуйста, звонок на руководителя, он точно в курсе, кто у вас этим занимается. <strong>Он сейчас не на обеде ещё?</strong>"</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Ключевые моменты:</h4>
                <ul class="list-disc list-inside text-green-700 space-y-1">
                    <li>Акцент на должной осмотрительности, а не на продаже</li>
                    <li>Ссылка на руководителя как на компетентное лицо</li>
                    <li>Вопрос в конце для управления вниманием</li>
                    <li>Уход от коммерческого предложения к юридической ответственности</li>
                </ul>
            </div>
        </div>`,
        category: "secretary"
    },
    {
        title: "В нашей компании никто этим не занимается",
        description: "Секретарь говорит, что в компании никто не занимается проверкой контрагентов. Как найти ответственного?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Основной ответ:</h4>
                <p class="text-blue-700">"А кто у вас занимается заключением договоров? Наверняка у вас есть человек, который запрашивает у организаций пакет документов, а именно ИНН, КПП, ОГРН, устав и так далее. <strong>(Пауза)</strong> Обычно это юрист либо руководитель. <strong>Он сейчас на месте?</strong>"</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Стратегия ответа:</h4>
                <ul class="list-disc list-inside text-green-700 space-y-1">
                    <li>Переводим разговор на заключение договоров</li>
                    <li>Напоминаем о стандартных процедурах проверки</li>
                    <li>Используем паузу для размышления</li>
                    <li>Предполагаем наличие ответственного лица</li>
                    <li>Задаём вопрос в конце</li>
                </ul>
            </div>
        </div>`,
        category: "secretary"
    },
    {
        title: "А что хотели?",
        description: "Секретарь спрашивает: 'А что хотели?' Выбираем один из вариантов ответа. В конце обязательно задаём вопрос.",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Вводная фраза:</h4>
                <p class="text-blue-700">"Как я сказал — хотел переговорить с … (ЛПР) по вопросу …"</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Вариант 1 - Юридический вопрос:</h4>
                <p class="text-green-700">"По юридическому вопросу, связанному с заключением договоров. <strong>Он сейчас на месте?</strong>"</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Вариант 2 - Работа с юрлицами:</h4>
                <p class="text-purple-700">"По вопросу работы с юрлицами (по работе с партнерами). <strong>Он на обед ещё не убежал?</strong>"</p>
            </div>
            
            <div class="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <h4 class="font-semibold text-orange-800 mb-2">Вариант 3 - Финансовая благонадежность:</h4>
                <p class="text-orange-700">"По вопросу финансовой благонадежности вашей компании. <strong>С кем мне лучше переговорить?</strong>"</p>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <h4 class="font-semibold text-red-800 mb-2">Вариант 4 - Экономическая безопасность:</h4>
                <p class="text-red-700">"По поводу экономической безопасности. <strong>Кто у вас занимается такими вопросами?</strong>"</p>
            </div>
            
            <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
                <h4 class="font-semibold text-gray-800 mb-2">Ключевые принципы:</h4>
                <ul class="list-disc list-inside text-gray-700 space-y-1">
                    <li>В конце обязательно задаём вопрос</li>
                    <li>Управляем вниманием собеседника</li>
                    <li>Даём меньше поводов для отказа</li>
                    <li>Стремимся соединить с ЛПР</li>
                </ul>
            </div>
        </div>`,
        category: "secretary"
    },

    // Ценовые возражения
    {
        title: "Нам нужен разовый доступ",
        description: "Клиент просит разовый доступ вместо подписки. Как объяснить преимущества подписки?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Хорошо что вы выбрали Контур.Фокус.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Однако, как эксперт по КФ, скажу, что даже 20 разовых доступов в год обойдется дороже, чем полноценный тариф. Я могу вам показать преимущества системы, а там дальше поговорим о выгодном для вас тарифе. Все, что вам нужно сделать, – выбрать день и время для презентации сервиса.</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Когда вам удобно?</p>
            </div>
        </div>`,
        category: "price"
    },
    {
        title: "Нет денег",
        description: "Клиент говорит, что у них нет денег на сервис. Как работать с этим возражением?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">ИО ЛПР, действительно логично платить только за нужные сервисы.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Уточняющие вопросы:</h4>
                <ul class="list-disc list-inside text-green-700 space-y-1">
                    <li>Раз вы уделили мне время, значит, у вас есть интерес к этой теме. Могу я узнать, вы не хотите покупать именно Фокус или рассматриваете конкурентные системы?</li>
                    <li>По-видимому, есть причина, по которой вы не хотите покупать сервис. Могу ее узнать?</li>
                </ul>
            </div>
            
            <div class="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <h4 class="font-semibold text-orange-800 mb-2">Ограничен бюджет:</h4>
                <p class="text-orange-700">Чтобы я сделал вам оптимальное предложение, можете сориентировать меня по бюджету. Тогда я подберу для вас вариант сотрудничества. Потому что моя задача — сделать вам лучшее предложение, опираясь на ваши возможности. Сориентируйте, какой у вас бюджет?</p>
            </div>
        </div>`,
        category: "price"
    },
    {
        title: "Сколько стоит?",
        description: "Клиент спрашивает о стоимости сервиса. Как правильно ответить на этот вопрос?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Варианты ответа:</h4>
                <ol class="list-decimal list-inside text-blue-700 space-y-2">
                    <li>Отличный вопрос. Чтобы сориентировать по цене, нужно для начала понять, какие именно возможности вам будут интересны и полезны. Для этого мне нужно задать несколько вопросов. Хорошо?</li>
                    <li>Спасибо за вопрос. С каждым клиентом мы работаем индивидуально, это позволяет подобрать наиболее оптимальные условия именно для него. Сможете уделить 2-3 минуты, чтобы мы могли подобрать вариант предложения?</li>
                    <li>Хорошо, что спросили. Разбег в цене довольно большой, для начала лучше определиться с возможностями. Средняя цена варьируется от 2,5 до 7 тысяч в месяц (28-85 тысяч в год). Чтобы подобрать оптимальное предложение именно для вас, могу я задать пару вопросов?</li>
                    <li>Да, вопрос важный. Ведь пока вы не знаете, за что платите, любая цена будет высокой. Поэтому задам несколько вопросов, чтобы подобрать оптимальный вариант для вас?</li>
                </ol>
            </div>
        </div>`,
        category: "price"
    },

    {
        title: "У вас дорого (вариант 1)",
        description: "Клиент говорит, что сервис слишком дорогой. Как работать с ценовыми возражениями?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю вашу озабоченность ценой.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но давайте разберемся, что именно вы считаете дорогим? Ведь стоимость — это не просто цифра, а соотношение цены и ценности. Можете рассказать, с чем сравниваете?</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Когда вам удобно обсудить детали?</p>
            </div>
        </div>`,
        category: "price"
    },
    {
        title: "У вас дорого (вариант 2)",
        description: "Клиент считает, что сервис слишком дорогой. Как показать ценность?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Согласен, что цена важна.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но давайте посмотрим на это с другой стороны. Сколько может стоить ошибка при выборе контрагента? Один недобросовестный партнер может обойтись в разы дороже, чем годовая подписка на наш сервис.</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите обсудить, как мы можем минимизировать ваши риски?</p>
            </div>
        </div>`,
        category: "price"
    },
    {
        title: "У вас дорого (вариант 3)",
        description: "Клиент говорит о высокой стоимости. Как объяснить ценность сервиса?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю вашу позицию.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но позвольте задать вопрос: сколько времени вы тратите на проверку одного контрагента? А если посчитать стоимость вашего времени, то получается, что наш сервис экономит вам деньги, а не тратит их.</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Можем обсудить конкретные цифры?</p>
            </div>
        </div>`,
        category: "price"
    },

    {
        title: "У вас дороже, чем у конкурента",
        description: "Клиент говорит, что у конкурента дешевле. Как ответить на это возражение?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Интересно, с каким именно сервисом сравниваете?</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Знаете, цена — это не единственный критерий. Важнее то, что вы получаете за эти деньги. Можете рассказать, какие именно функции вам нужны? Тогда я смогу показать, почему наше предложение выгоднее.</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Когда удобно обсудить детали?</p>
            </div>
        </div>`,
        category: "price"
    },
    {
        title: "Хочу дешевле/скидку",
        description: "Клиент просит скидку или более низкую цену. Как работать с этим?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю ваше желание сэкономить.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но давайте подумаем о том, что дешевле не всегда лучше. Наш сервис предлагает уникальные возможности, которых нет у конкурентов. А скидки мы можем обсудить при долгосрочном сотрудничестве.</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите обсудить условия долгосрочного договора?</p>
            </div>
        </div>`,
        category: "price"
    },
    {
        title: "У конкурента дешевле и нет отличий",
        description: "Клиент говорит, что конкурент дешевле и нет различий. Как ответить?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Интересно, с каким сервисом сравниваете?</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Знаете, на первый взгляд может показаться, что все сервисы одинаковые. Но на самом деле есть важные различия в качестве данных, скорости обновления, поддержке клиентов. Можете рассказать, что именно вам важно?</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите, я покажу, чем мы отличаемся?</p>
            </div>
        </div>`,
        category: "price"
    },

    {
        title: "Все это можно узнать в интернете бесплатно",
        description: "Клиент говорит, что всю информацию можно найти бесплатно в интернете. Как ответить?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Конечно, многое можно найти в интернете.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но представьте, сколько времени у вас уйдет на поиск и анализ всей этой информации? А если нужно проверить не одного, а десяток контрагентов? Наш сервис экономит ваше время и дает гарантированно актуальную информацию.</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите посчитать, сколько стоит ваше время?</p>
            </div>
        </div>`,
        category: "price"
    },
    {
        title: "Директор не согласовал",
        description: "Клиент говорит, что директор не согласовал покупку. Как работать с этим?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю, что решение принимает руководитель.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но, возможно, проблема в том, что мы не смогли правильно донести ценность нашего предложения. Можете рассказать, какие именно аргументы не убедили директора? Тогда я смогу подготовить более убедительную презентацию.</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Когда можно встретиться с директором?</p>
            </div>
        </div>`,
        category: "price"
    },
    {
        title: "Слышал о сервисе - дорого",
        description: "Клиент говорит, что слышал о том, что сервис дорогой. Как развеять это мнение?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Интересно, откуда у вас такая информация?</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Знаете, слухи часто бывают неточными. Давайте разберемся с фактами. Можете рассказать, что именно вы слышали? Тогда я смогу показать реальную картину и объяснить, почему наше предложение выгодно.</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите обсудить конкретные цифры?</p>
            </div>
        </div>`,
        category: "price"
    },

    // Нет потребности в сервисе
    {
        title: "Работаем только через госзакупки/торги",
        description: "Клиент говорит, что работает только через госзакупки. Как показать ценность сервиса?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю, что госзакупки — это особая сфера.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но даже в госзакупках важно проверять контрагентов. Ведь если вы выиграете тендер, но контрагент окажется недобросовестным, это может привести к серьезным проблемам. Наш сервис поможет вам избежать таких рисков.</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите обсудить, как мы можем помочь в работе с госзакупками?</p>
            </div>
        </div>`,
        category: "need"
    },
    {
        title: "Работаем только с постоянными контрагентами",
        description: "Клиент говорит, что работает только с постоянными партнерами. Как показать ценность проверки?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Конечно, постоянные партнеры — это хорошо.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но даже с постоянными контрагентами важно периодически проверять их состояние. Ведь ситуация может измениться, и ваш надежный партнер может оказаться в сложном положении. Наш сервис поможет вам отслеживать такие изменения.</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите обсудить, как часто стоит проверять постоянных партнеров?</p>
            </div>
        </div>`,
        category: "need"
    },
    {
        title: "У нас есть доступ к закрытым источникам",
        description: "Клиент говорит, что у них есть доступ к закрытым источникам. Как показать дополнительную ценность?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Интересно, какие именно источники вы используете?</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но даже с закрытыми источниками наш сервис может быть полезен. Мы объединяем данные из множества источников и предоставляем их в удобном формате. Это экономит время и дает более полную картину.</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите сравнить, что у нас есть дополнительно?</p>
            </div>
        </div>`,
        category: "need"
    },
    {
        title: "Уже увидел что хотел",
        description: "Клиент говорит, что уже видел все, что нужно. Как показать новые возможности?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Отлично, что вы уже знакомы с нашим сервисом.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но возможно, вы не видели всех возможностей. Наш сервис постоянно развивается, добавляются новые функции. Можете рассказать, что именно вы видели? Тогда я смогу показать, что изменилось.</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите посмотреть на новые возможности?</p>
            </div>
        </div>`,
        category: "need"
    },
    {
        title: "Отправьте мне всю информацию по электронной почте",
        description: "Клиент просит отправить всю информацию по email. Как продолжить разговор?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Конечно, я могу отправить информацию.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но лучше сначала понять, какая именно информация вам нужна. Можете рассказать, что именно вас интересует? Тогда я смогу подготовить персональное предложение именно для вас.</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Когда удобно обсудить детали?</p>
            </div>
        </div>`,
        category: "need"
    },
    {
        title: "Что конкретно вы предлагаете?",
        description: "Клиент спрашивает, что именно предлагает сервис. Как объяснить ценность?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Хороший вопрос.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Мы предлагаем комплексное решение для проверки контрагентов. Это включает проверку финансового состояния, судебных дел, исполнительных производств и многое другое. Но чтобы предложить именно то, что нужно вам, мне нужно задать несколько вопросов.</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Можете уделить 5 минут?</p>
            </div>
        </div>`,
        category: "need"
    },
    {
        title: "У нас все есть",
        description: "Клиент говорит, что у них все есть. Как показать дополнительную ценность?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю, что у вас есть свои источники информации.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но возможно, наш сервис может дополнить то, что у вас есть. Мы объединяем данные из множества источников и предоставляем их в удобном формате. Можете рассказать, что именно у вас есть?</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите сравнить возможности?</p>
            </div>
        </div>`,
        category: "need"
    },
    {
        title: "Не проверяем КА",
        description: "Клиент говорит, что не проверяет контрагентов. Как показать важность проверки?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю вашу позицию.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но проверка контрагентов — это не просто формальность, а способ защитить свой бизнес от рисков. Один недобросовестный партнер может нанести серьезный ущерб. Наш сервис поможет вам избежать таких проблем.</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите обсудить, какие риски можно минимизировать?</p>
            </div>
        </div>`,
        category: "need"
    },
    {
        title: "У нас маленькая компания",
        description: "Клиент говорит, что у них маленькая компания. Как показать ценность для малого бизнеса?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю, что у маленькой компании другие приоритеты.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но именно для маленьких компаний проверка контрагентов особенно важна. У вас меньше ресурсов для покрытия убытков, если что-то пойдет не так. Наш сервис поможет вам защитить свой бизнес.</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите обсудить, как мы можем адаптировать предложение под ваши потребности?</p>
            </div>
        </div>`,
        category: "need"
    },
    {
        title: "Работаем с контрагентами по предоплате",
        description: "Клиент говорит, что работает по предоплате. Как показать ценность проверки?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Конечно, предоплата снижает риски.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но даже с предоплатой важно проверять контрагентов. Ведь если контрагент окажется недобросовестным, вы можете потерять не только деньги, но и время на судебные разбирательства. Наш сервис поможет вам избежать таких проблем.</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите обсудить, как мы можем помочь в вашей работе?</p>
            </div>
        </div>`,
        category: "need"
    },
    {
        title: "Достаточно выписки",
        description: "Клиент говорит, что достаточно выписки из ЕГРЮЛ. Как показать дополнительную ценность?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Выписка — это важный документ.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но выписка дает только базовую информацию. Наш сервис предоставляет гораздо более полную картину: финансовое состояние, судебные дела, исполнительные производства и многое другое. Это поможет вам принимать более взвешенные решения.</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите посмотреть, какую дополнительную информацию мы можем предоставить?</p>
            </div>
        </div>`,
        category: "need"
    },
    {
        title: "Нам ничего не нужно",
        description: "Клиент говорит, что им ничего не нужно. Как создать потребность?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю вашу позицию.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но возможно, вы просто не знаете, что именно вам может быть полезно. Можете рассказать, как вы сейчас работаете с контрагентами? Тогда я смогу показать, где наш сервис может быть полезен.</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите обсудить ваши текущие процессы?</p>
            </div>
        </div>`,
        category: "need"
    },
    {
        title: "Конкурирующие системы",
        description: "Клиент говорит о других системах. Как показать преимущества нашего сервиса?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Интересно, какие именно системы вы используете?</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но возможно, наш сервис может дополнить то, что у вас есть. Мы предлагаем уникальные возможности, которых нет у конкурентов. Можете рассказать, что именно вам важно?</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите сравнить возможности?</p>
            </div>
        </div>`,
        category: "need"
    },
    {
        title: "Смотрю в своих источниках",
        description: "Клиент говорит, что использует свои источники. Как показать преимущества нашего сервиса?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Конечно, у вас есть свои источники.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но наш сервис может сэкономить вам время и дать более полную картину. Мы объединяем данные из множества источников и предоставляем их в удобном формате. Можете рассказать, какие именно источники вы используете?</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите сравнить, что у нас есть дополнительно?</p>
            </div>
        </div>`,
        category: "need"
    },
    {
        title: "Отправляйте КП на почту",
        description: "Клиент просит отправить коммерческое предложение на email. Как продолжить разговор?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Конечно, я могу отправить коммерческое предложение.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но лучше сначала понять, какое именно предложение вам нужно. Можете рассказать, что именно вас интересует? Тогда я смогу подготовить персональное предложение именно для вас.</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Когда удобно обсудить детали?</p>
            </div>
        </div>`,
        category: "need"
    },
    {
        title: "Проверка КА на аутсорсинге",
        description: "Клиент говорит, что проверка контрагентов на аутсорсинге. Как показать ценность нашего сервиса?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю, что у вас есть внешние специалисты.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но наш сервис может быть полезен и для вас, и для ваших внешних специалистов. Мы предоставляем доступ к актуальной информации в удобном формате. Это может ускорить процесс проверки и снизить затраты.</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите обсудить, как мы можем интегрироваться в ваши процессы?</p>
            </div>
        </div>`,
        category: "need"
    },
    
    // Возражения по продукту
    {
        title: "Договор оферты",
        description: "Клиент спрашивает о договоре оферты. Как объяснить условия?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю вашу озабоченность договором.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Наш договор оферты составлен в соответствии с законодательством и защищает интересы обеих сторон. Все условия прозрачны и понятны. Можете рассказать, какие именно пункты вас беспокоят?</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите обсудить конкретные условия?</p>
            </div>
        </div>`,
        category: "product"
    },
    {
        title: "Отчет о недвижимости (ЕГРН)",
        description: "Клиент спрашивает об отчетах по недвижимости. Как объяснить эту функцию?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю, что вам нужна информация о недвижимости.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Наш сервис предоставляет доступ к данным ЕГРН в рамках проверки контрагентов. Это помогает оценить активы компании и ее финансовое состояние. Можете рассказать, для чего именно вам нужна эта информация?</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите посмотреть, какую информацию мы можем предоставить?</p>
            </div>
        </div>`,
        category: "product"
    },
    {
        title: "Не могу запросить выписку",
        description: "Клиент говорит о технических проблемах с запросом выписки. Как помочь?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю, что у вас возникли технические сложности.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Наш сервис максимально прост в использовании. Если у вас возникли проблемы, наша служба поддержки готова помочь. Можете рассказать, что именно не получается?</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите, чтобы я показал, как это работает?</p>
            </div>
        </div>`,
        category: "product"
    },
    {
        title: "Выписка действительна в суде?",
        description: "Клиент спрашивает о юридической силе выписок. Как объяснить?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Отличный вопрос о юридической силе документов.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Наши выписки имеют юридическую силу и могут использоваться в суде. Они содержат официальные данные из государственных реестров. Можете рассказать, для каких целей вам нужна эта информация?</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите обсудить, как правильно использовать эти данные?</p>
            </div>
        </div>`,
        category: "product"
    },
    {
        title: "Мало источников информации",
        description: "Клиент говорит о недостатке источников. Как объяснить полноту данных?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю вашу озабоченность количеством источников.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Наш сервис объединяет данные из множества официальных источников: ФНС, ФССП, арбитражные суды и другие. Это дает наиболее полную картину. Можете рассказать, какие именно источники вам важны?</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите посмотреть полный список источников?</p>
            </div>
        </div>`,
        category: "product"
    },
    {
        title: "Не увидел то, что хотел",
        description: "Клиент говорит, что не нашел нужную информацию. Как помочь?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю, что вы не нашли нужную информацию.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Возможно, вы искали в неправильном разделе или использовали неправильные параметры поиска. Можете рассказать, что именно вы искали? Тогда я смогу показать, где это найти.</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите, чтобы я показал, как правильно искать информацию?</p>
            </div>
        </div>`,
        category: "product"
    },
    {
        title: "Почему нет бухформ?",
        description: "Клиент спрашивает о бухгалтерских формах. Как объяснить доступность?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю, что вам нужны бухгалтерские формы.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Бухгалтерские формы доступны в определенных тарифах. Можете рассказать, какие именно формы вам нужны? Тогда я смогу подобрать подходящий тариф.</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите посмотреть, какие тарифы включают бухгалтерские формы?</p>
            </div>
        </div>`,
        category: "product"
    },
    {
        title: "КФ — это законно?",
        description: "Клиент спрашивает о законности сервиса. Как объяснить?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю вашу озабоченность законностью.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Контур.Фокус работает на основе официальных данных из государственных реестров. Все наши действия полностью законны и соответствуют требованиям законодательства.</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите обсудить, как мы обеспечиваем законность наших услуг?</p>
            </div>
        </div>`,
        category: "product"
    },
    {
        title: "Информация в Фокусе некорректна",
        description: "Клиент говорит о неточностях в данных. Как ответить?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю вашу озабоченность точностью данных.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Мы получаем данные напрямую из официальных источников и регулярно их обновляем. Если вы заметили неточность, можете сообщить нам, и мы проверим информацию.</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите обсудить, как мы обеспечиваем точность данных?</p>
            </div>
        </div>`,
        category: "product"
    },
    {
        title: "Могу я делать разовые запросы?",
        description: "Клиент спрашивает о разовых запросах. Как объяснить тарифы?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю, что вам нужны разовые запросы.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Да, у нас есть возможность разовых запросов, но подписка обычно выгоднее. Можете рассказать, как часто вам нужна такая информация?</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите сравнить стоимость разовых запросов и подписки?</p>
            </div>
        </div>`,
        category: "product"
    },
    {
        title: "Информация редко обновляется",
        description: "Клиент говорит о медленном обновлении данных. Как объяснить?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю вашу озабоченность актуальностью данных.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Мы обновляем данные в соответствии с графиком обновления официальных источников. Некоторые данные обновляются ежедневно, другие — по мере поступления от государственных органов.</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите узнать график обновления конкретных данных?</p>
            </div>
        </div>`,
        category: "product"
    },
    {
        title: "Я уже видел вашу систему ранее",
        description: "Клиент говорит, что уже знаком с системой. Как показать изменения?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Отлично, что вы уже знакомы с нашим сервисом.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но наш сервис постоянно развивается, добавляются новые функции и возможности. Можете рассказать, когда вы последний раз смотрели систему? Тогда я смогу показать, что изменилось.</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите посмотреть на новые возможности?</p>
            </div>
        </div>`,
        category: "product"
    },
    {
        title: "Хочу посоветоваться с директором",
        description: "Клиент хочет посоветоваться с руководством. Как продолжить разговор?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Конечно, это важное решение.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но возможно, стоит сначала получить полную информацию о нашем предложении, чтобы у вас было что обсудить с директором. Можете уделить 10 минут для презентации?</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Когда удобно провести презентацию?</p>
            </div>
        </div>`,
        category: "product"
    },
    {
        title: "Хочу тариф 'Бизнес'",
        description: "Клиент хочет тариф 'Бизнес'. Как обсудить условия?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Отлично, что вы уже определились с тарифом.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Тариф 'Бизнес' включает множество полезных функций. Но чтобы убедиться, что он подходит именно вам, давайте обсудим ваши потребности. Можете рассказать, какие именно возможности вам нужны?</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите обсудить условия тарифа 'Бизнес'?</p>
            </div>
        </div>`,
        category: "product"
    },
    
    // Конкурентные системы
    {
        title: "У нас все есть/Пользуемся конкурентом (вариант 1)",
        description: "Клиент говорит, что у них уже есть решение. Как показать преимущества?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю, что у вас уже есть решение.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но возможно, наш сервис может дополнить то, что у вас есть. Мы предлагаем уникальные возможности, которых нет у конкурентов. Можете рассказать, что именно вам важно?</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите сравнить возможности?</p>
            </div>
        </div>`,
        category: "competitor"
    },
    {
        title: "У нас все есть/Пользуемся конкурентом (вариант 2)",
        description: "Клиент говорит о других системах. Как показать преимущества нашего сервиса?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Конечно, у вас есть свои источники.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но наш сервис может сэкономить вам время и дать более полную картину. Мы объединяем данные из множества источников и предоставляем их в удобном формате. Можете рассказать, какие именно источники вы используете?</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите сравнить, что у нас есть дополнительно?</p>
            </div>
        </div>`,
        category: "competitor"
    },
    {
        title: "У нас все есть/Пользуемся конкурентом (вариант 3)",
        description: "Клиент доволен текущим решением. Как показать альтернативы?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю, что вы довольны текущим решением.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но возможно, стоит рассмотреть альтернативы. Наш сервис предлагает уникальные возможности и может быть более выгодным. Можете рассказать, что именно вас устраивает в текущем решении?</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите обсудить, чем мы можем быть полезны?</p>
            </div>
        </div>`,
        category: "competitor"
    },
    {
        title: "У нас все есть/Пользуемся конкурентом (вариант 4)",
        description: "Клиент говорит о своих предпочтениях. Как показать наши преимущества?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю, что у вас есть свои предпочтения.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но возможно, стоит рассмотреть наши преимущества. Мы предлагаем более выгодные условия и уникальные возможности. Можете рассказать, что именно вас устраивает в конкурентном решении?</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите сравнить условия?</p>
            </div>
        </div>`,
        category: "competitor"
    },
    {
        title: "У нас все есть/Пользуемся конкурентом (вариант 5)",
        description: "Клиент привык к определенному решению. Как показать альтернативы?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю, что вы привыкли к определенному решению.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но возможно, стоит рассмотреть альтернативы. Наш сервис может предложить более выгодные условия и дополнительные возможности. Можете рассказать, что именно вам важно?</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите обсудить наши преимущества?</p>
            </div>
        </div>`,
        category: "competitor"
    },
    {
        title: "У нас все есть/Пользуемся конкурентом (вариант 6)",
        description: "Клиент говорит о своих источниках. Как показать дополнительную ценность?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю, что у вас есть свои источники.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но наш сервис может быть полезен как дополнение к тому, что у вас есть. Мы предлагаем уникальные возможности и более выгодные условия. Можете рассказать, что именно вам нужно?</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите обсудить, как мы можем дополнить ваше текущее решение?</p>
            </div>
        </div>`,
        category: "competitor"
    },
    {
        title: "Все системы используют одинаковые источники",
        description: "Клиент говорит, что все системы одинаковые. Как показать различия?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю вашу точку зрения.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но даже при использовании одинаковых источников есть различия в качестве обработки данных, скорости обновления, удобстве интерфейса и поддержке клиентов. Можете рассказать, что именно вам важно?</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите посмотреть, чем мы отличаемся?</p>
            </div>
        </div>`,
        category: "competitor"
    },
    {
        title: "Подписка на конкурента заканчивается",
        description: "Клиент говорит о возможности рассмотреть альтернативы. Как воспользоваться моментом?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю, что у вас есть возможность рассмотреть альтернативы.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Это отличный момент для того, чтобы сравнить возможности и выбрать наиболее подходящее решение. Наш сервис предлагает уникальные возможности и выгодные условия. Можете рассказать, что именно вам важно?</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите обсудить наши предложения?</p>
            </div>
        </div>`,
        category: "competitor"
    },
    {
        title: "Проверяем КА в Экстерне",
        description: "Клиент говорит об использовании Экстерна. Как показать альтернативы?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю, что вы используете Экстерн.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но возможно, стоит рассмотреть альтернативы. Наш сервис предлагает более широкие возможности для проверки контрагентов и может быть более выгодным. Можете рассказать, что именно вам важно?</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите сравнить возможности?</p>
            </div>
        </div>`,
        category: "competitor"
    },
    {
        title: "Призма и похожие системы",
        description: "Клиент знаком с Призмой. Как показать преимущества нашего сервиса?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю, что вы знакомы с Призмой.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но наш сервис предлагает уникальные возможности и может быть более выгодным. Мы объединяем данные из множества источников и предоставляем их в удобном формате. Можете рассказать, что именно вам важно?</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите сравнить наши возможности?</p>
            </div>
        </div>`,
        category: "competitor"
    },
    
    // Возражения при продлении
    {
        title: "Нестабильная ситуация в стране",
        description: "Клиент говорит о нестабильной ситуации. Как показать важность проверки?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю вашу озабоченность ситуацией.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но именно в нестабильной ситуации проверка контрагентов становится еще более важной. Наш сервис поможет вам минимизировать риски и защитить свой бизнес. Можете рассказать, какие именно риски вас беспокоят?</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите обсудить, как мы можем помочь в текущей ситуации?</p>
            </div>
        </div>`,
        category: "renewal"
    },
    {
        title: "Не буду продлевать",
        description: "Клиент говорит, что не будет продлевать договор. Как обсудить причины?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю ваше решение.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но возможно, стоит обсудить причины. Возможно, мы можем предложить более подходящие условия или решить возникшие проблемы. Можете рассказать, что именно вас не устраивает?</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите обсудить, как мы можем улучшить наше предложение?</p>
            </div>
        </div>`,
        category: "renewal"
    },
    {
        title: "Мы уже купили другую систему",
        description: "Клиент выбрал альтернативное решение. Как показать наши преимущества?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю, что вы выбрали альтернативное решение.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но возможно, стоит сравнить возможности. Наш сервис может предложить уникальные функции, которых нет у конкурентов. Можете рассказать, что именно вас привлекло в другом решении?</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите обсудить, чем мы можем быть полезны?</p>
            </div>
        </div>`,
        category: "renewal"
    },
    {
        title: "Сделаете мне скидку?",
        description: "Клиент просит скидку при продлении. Как обсудить условия?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю ваше желание сэкономить.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Мы можем обсудить специальные условия для лояльных клиентов. Но сначала давайте поговорим о том, как мы можем сделать наше предложение более выгодным для вас. Можете рассказать, что именно вас интересует?</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите обсудить специальные условия?</p>
            </div>
        </div>`,
        category: "renewal"
    },
    {
        title: "Ликвидация/Закрытие/Банкротство",
        description: "Клиент говорит о сложной ситуации. Как адаптировать предложение?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю сложность ситуации.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но даже в такой ситуации проверка контрагентов может быть важна. Наш сервис поможет вам минимизировать риски и защитить свои интересы. Можете рассказать, как мы можем помочь?</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите обсудить, как мы можем адаптировать предложение под ваши потребности?</p>
            </div>
        </div>`,
        category: "renewal"
    },
    {
        title: "Нет деятельности",
        description: "Клиент говорит о приостановке деятельности. Как адаптировать предложение?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю, что деятельность приостановлена.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но возможно, стоит сохранить доступ к сервису на время приостановки деятельности. Это поможет вам быстро возобновить работу, когда ситуация изменится. Можете рассказать, как долго планируется приостановка?</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите обсудить специальные условия на этот период?</p>
            </div>
        </div>`,
        category: "renewal"
    },
    {
        title: "Перехожу на аутсорсинг",
        description: "Клиент меняет подход к работе. Как интегрироваться в новые процессы?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю, что вы меняете подход к работе.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но наш сервис может быть полезен и при работе с аутсорсингом. Мы можем предоставить доступ вашим внешним специалистам или адаптировать предложение под новые потребности. Можете рассказать, как именно планируется организовать работу?</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите обсудить, как мы можем интегрироваться в новые процессы?</p>
            </div>
        </div>`,
        category: "renewal"
    },
    {
        title: "Буду работать только через гос. закупки",
        description: "Клиент меняет направление деятельности. Как показать ценность для госзакупок?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю, что вы меняете направление деятельности.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но даже в госзакупках важно проверять контрагентов. Наш сервис поможет вам минимизировать риски при работе с государственными заказами. Можете рассказать, как именно планируется работать с госзакупками?</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите обсудить, как мы можем помочь в работе с госзакупками?</p>
            </div>
        </div>`,
        category: "renewal"
    },
    {
        title: "Мало пользовались/Не пользовались",
        description: "Клиент говорит о неактивном использовании сервиса. Как показать ценность?",
        answer: `<div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">Присоединение:</h4>
                <p class="text-blue-700">Понимаю, что сервис не использовался активно.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">Аргументация:</h4>
                <p class="text-green-700">Но возможно, проблема в том, что вы не знали о всех возможностях сервиса или не было подходящих случаев для использования. Можете рассказать, почему сервис использовался мало?</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">Закрепление:</h4>
                <p class="text-purple-700">Хотите, чтобы я показал, как можно более эффективно использовать сервис?</p>
            </div>
        </div>`,
        category: "renewal"
    },
];

// Переменные состояния
let currentCategory = 'all';
let searchQuery = '';

// Иконки для категорий
const categoryIcons = {
    secretary: "👩‍💼",
    price: "💰",
    need: "❓",
    product: "📦",
    competitor: "⚔️",
    renewal: "🔄"
};

// Функция фильтрации по категории (для карточек статистики)
function filterByCategory(category) {
    // Обновляем текущую категорию
    currentCategory = category;
    
    // Обновляем активную вкладку в фильтрах
    const tabFilters = document.querySelectorAll('.tab-filter');
    tabFilters.forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-category') === category) {
            tab.classList.add('active');
        }
    });
    
    // Перерисовываем возражения
    renderObjections();
    
    // Плавная прокрутка к сетке возражений
    const objectionsGrid = document.getElementById('objectionsGrid');
    if (objectionsGrid) {
        objectionsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Показываем уведомление о фильтрации
    const categoryNames = {
        'all': 'Все возражения',
        'secretary': 'Секретарь',
        'price': 'Цена',
        'need': 'Потребность',
        'product': 'Продукт',
        'competitor': 'Конкуренты',
        'renewal': 'Продление'
    };
    
    const categoryName = categoryNames[category] || category;
    showNotification(`Показаны возражения: ${categoryName}`, 'info');
}

// Функция показа уведомлений
function showNotification(message, type = 'success') {
    // Создаем элемент уведомления
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full`;
    
    // Настраиваем стили в зависимости от типа
    switch(type) {
        case 'success':
            notification.className += ' bg-green-500 text-white';
            break;
        case 'error':
            notification.className += ' bg-red-500 text-white';
            break;
        case 'info':
            notification.className += ' bg-blue-500 text-white';
            break;
        case 'warning':
            notification.className += ' bg-yellow-500 text-white';
            break;
        default:
            notification.className += ' bg-gray-500 text-white';
    }
    
    notification.innerHTML = `
        <div class="flex items-center space-x-2">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-2 text-white hover:text-gray-200">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
    `;
    
    // Добавляем уведомление на страницу
    document.body.appendChild(notification);
    
    // Показываем уведомление
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Автоматически скрываем через 3 секунды
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Функция рендеринга возражений
function renderObjections() {
    const grid = document.getElementById('objectionsGrid');
    if (!grid) return;

    let filteredObjections = objections;

    // Фильтрация по категории
    if (currentCategory !== 'all') {
        filteredObjections = filteredObjections.filter(obj => obj.category === currentCategory);
    }

    // Фильтрация по поиску
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredObjections = filteredObjections.filter(obj => 
            obj.title.toLowerCase().includes(query) ||
            obj.description.toLowerCase().includes(query) ||
            obj.answer.toLowerCase().includes(query)
        );
    }

    // Рендеринг карточек
    grid.innerHTML = filteredObjections.map((obj, index) => {
        const icon = categoryIcons[obj.category] || "💬";
        
        return `
            <div class="function-card group cursor-pointer hover-lift" 
                onclick="showObjectionDetail('${obj.title.replace(/'/g, "\\'")}')"
                data-category="${obj.category}">
                
                <!-- Заголовок -->
                <div class="function-title">
                    ${highlightSearch(obj.title)}
                </div>
                
                <!-- Описание -->
                <div class="function-description">
                    ${highlightSearch(obj.description.substring(0, 120))}${obj.description.length > 120 ? '...' : ''}
                </div>
                
                <!-- Ссылка Подробнее -->
                <div class="function-link">
                    Ответ
                </div>
            </div>
        `;
    }).join('');

    // Обновляем счетчики поиска
    const searchCount = document.getElementById('searchCount');
    const searchCountMobile = document.getElementById('searchCountMobile');
    
    if (searchCount) {
        searchCount.textContent = `${filteredObjections.length} найдено`;
    }
    if (searchCountMobile) {
        searchCountMobile.textContent = `${filteredObjections.length} найдено`;
    }
}

// Функция подсветки поиска
function highlightSearch(text) {
    if (!searchQuery) return text;
    
    const regex = new RegExp(`(${searchQuery})`, 'gi');
    return text.replace(regex, '<mark class="bg-yellow-200 px-1 rounded">$1</mark>');
}

// Функция показа деталей возражения
function showObjectionDetail(title) {
    console.log('showObjectionDetail called with title:', title);
    
    const objection = objections.find(obj => obj.title === title);
    if (!objection) {
        console.error('Objection not found:', title);
        return;
    }
    
    console.log('Found objection:', objection);
    
    const modal = document.getElementById('objectionModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalAnswer = document.getElementById('modalAnswer');
    
    if (!modal) {
        console.error('Modal not found: objectionModal');
        return;
    }
    
    if (!modalTitle) {
        console.error('Modal title not found: modalTitle');
        return;
    }
    
    if (!modalDescription) {
        console.error('Modal description not found: modalDescription');
        return;
    }
    
    if (!modalAnswer) {
        console.error('Modal answer not found: modalAnswer');
        return;
    }
    
    console.log('All modal elements found, updating content...');
    
    modalTitle.textContent = objection.title;
    modalDescription.innerHTML = objection.description;
    modalAnswer.innerHTML = objection.answer;
    
    console.log('Showing modal...');
    modal.classList.remove('hidden');
    
    console.log('Modal should be visible now');
}

// Функция закрытия модального окна
function closeObjectionModal() {
    const modal = document.getElementById('objectionModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

// Настройка обработчиков событий
function setupEventListeners() {
    // Поиск (десктоп)
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            searchQuery = e.target.value;
            renderObjections();
        });
    }
    
    // Поиск (мобильный)
    const searchInputMobile = document.getElementById('searchInputMobile');
    if (searchInputMobile) {
        searchInputMobile.addEventListener('input', function(e) {
            searchQuery = e.target.value;
            // Синхронизируем с десктопным полем
            if (searchInput) {
                searchInput.value = e.target.value;
            }
            renderObjections();
        });
    }
    
    // Синхронизация полей поиска
    if (searchInput && searchInputMobile) {
        searchInput.addEventListener('input', function(e) {
            searchInputMobile.value = e.target.value;
        });
        
        searchInputMobile.addEventListener('input', function(e) {
            searchInput.value = e.target.value;
        });
    }

    // Фильтры по категориям
    const tabFilters = document.querySelectorAll('.tab-filter');
    tabFilters.forEach(tab => {
        tab.addEventListener('click', function() {
            // Убираем активный класс у всех вкладок
            tabFilters.forEach(t => t.classList.remove('active'));
            // Добавляем активный класс к текущей вкладке
            this.classList.add('active');
            
            // Обновляем текущую категорию
            currentCategory = this.getAttribute('data-category');
            renderObjections();
        });
    });

    // Закрытие модального окна
    const closeModalBtn = document.getElementById('closeObjectionModal');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeObjectionModal);
    }

    // Закрытие модального окна по клику на фон
    const modal = document.getElementById('objectionModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeObjectionModal();
            }
        });
    }

    // Закрытие модального окна по Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeObjectionModal();
        }
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    renderObjections();
});
