# 📓 React_Django_CRUD

Aplicación desacoplada que expone el backend con **Django** (API RESTful) y realiza peticiones desde el frontend desarrollado en **React** a través de **CORS**.

![Image Alt](https://github.com/ancu-98/React_Django_CRUD/blob/89cfd144dd121b4a27899edd1fd063746ab2c557/Server/utils/Books-Website-Overview.png)

El proyecto implementa operaciones completas de **CRUD (Create, Read, Update, Delete)** sobre una base de datos de libros. El backend utiliza el ORM de Django para interactuar con la base de datos y el frontend consume estas operaciones mediante `fetch` para renderizar y gestionar los datos de manera dinámica.

Este proyecto demuestra cómo construir y conectar un **cliente moderno (React + Vite)** con un **servidor robusto (Django)**.

## 🚀 Tecnologías utilizadas

### Backend
- **Python** `v3.12.3`
- **Django** `v5.2.4`
- Django REST Framework
- SQLite (base de datos)
- CORS Headers

### Frontend
- **React** `v19.1.0`
- **Vite** `v6.3.5` (para desarrollo y bundling)
- Node.js `v20.17.0`

## 🧱 Estructura del proyecto

```bash
React_Django_CRUD/
│
├── Client/                  # Proyecto frontend con React y Vite
│   └── app/                # Código fuente React (package.json aquí)
│
├── Server/                  # Proyecto backend en Django
│   └── backend/            # Código fuente de Django
│       ├── crudapi/        # App de Django para libros
│       ├── manage.py
│       └── settings.py
```

### 🔄 Operaciones CRUD

| **Method** | **URL**                      | **Action**                                      |
|------------|------------------------------|-------------------------------------------------|
| POST       | `/api/books`                 | Create a new Book                               |
| GET        | `/api/books`                 | Retrieve all Books                              |
| GET        | `/api/books/:id`             | Find a Book by `:id`                            |
| PUT        | `/api/books/:id`             | Update a Title or Autor Book by `:id`           |
| DELETE     | `/api/books/:id`             | Delete a Book by `:id`                          |

## 👨‍💻 Autor

**ancu-98**

- 💼 [LinkedIn](https://www.linkedin.com/in/ancu98)
- 🐦 [X (Twitter)](https://x.com/)
- 🌐 [Portfolio Web](https://ancu98-website.netlify.app/#)

## ⚙️ Instalación

### 1. Clona el repositorio

```bash
git clone https://github.com/ancu-98/React_Django_CRUD.git
cd React_Django_CRUD
```
### 2. Instala el backend (Django)

```bash
cd Server
python -m venv env
source env/bin/activate
pip install -r requirements.txt
cd backend
python manage.py migrate
python manage.py runserver
```

### 3. Instala el frontend (React)

```bash
cd ../Client/app
npm install
npm run dev
```
> *Asegúrate de tener el backend corriendo en http://127.0.0.1:8000 para que el frontend pueda comunicarse*

## 🎥 Ver ejemplo en vivo
Aquí te muestro cómo instalar y utilizar este proyecto:
[video demostration]()

Aquí te muestro la documentación del paso a paso de cómo construí el proyecto, por si quieres crear este proyecto tu mismo desde cero:
[Step by step Docs](https://atom-sardine-e14.notion.site/Books-CRUD-API-Shared-22a3afe76d71803a8449ef00f8ec4597)

## 🎓 Bonus
Si quieres entender un poco más a fondo **cómo Django procesa una solicitud desde que llega al servidor hasta que retorna una respuesta al navegador**, puedes consultar el archivo:

📁[`/Server/README.md`](./Server/README.md)
> Una lectura recomendada si quieres entender cómo Django opera “por dentro”.

## 📩 Contratación
Si quieres contratarme puedes escribirme a ancu_inbox@hotmail.com para consultas.

## 🔐 Licencia
N/A

¿Te gustó este repo? ¡Dale ⭐ en GitHub y compártelo con tu equipo!
