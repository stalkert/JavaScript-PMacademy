let currentFile = null;
let files = [
  {
    id: 1,
    name: "file 1",
  },
  {
    id: 2,
    name: "file 2",
  },
  {
    id: 3,
    name: "file 3",
  },
];

const refs = {
  wrapper: document.querySelector(".wrapper"),
  contextMenu: document.querySelector(".context-menu"),
  files: document.querySelector(".files"),
};

const renderFiles = () => {
  refs.files.innerHTML = "";

  refs.files.insertAdjacentHTML(
    "beforeend",
    files
      .map(
        ({ id, name }) => `
        <li class="file" data-id=${id}>${name}</li>
      `
      )
      .join("")
  );
};

const handleRightClick = (e) => {
  e.preventDefault();

  const { clientX, clientY } = e;
  currentFile = Number(e.target.dataset.id);

  refs.contextMenu.style.left = `${clientX - 10}px`;
  refs.contextMenu.style.top = `${clientY - 10}px`;
  refs.contextMenu.classList.add("show");
  refs.contextMenu.innerHTML = "";

  if (e.target.classList.contains("file")) {
    refs.contextMenu.insertAdjacentHTML(
      "beforeend",
      `
    <li data-name="rename">Rename</li>
    <li data-name="delete">Delete</li>
    `
    );
  } else {
    refs.contextMenu.insertAdjacentHTML(
      "beforeend",
      `
    <li data-name="create">Create</li>
    `
    );
  }
};

const handleLeftClick = () => {
  refs.contextMenu.classList.remove("show");
};

const createFile = () => {
  const newName = prompt("Enter file name:");

  if (newName === null || newName === "") return;

  files.push({
    id: Date.now(),
    name: newName,
  });

  renderFiles();
};

const renameFile = (id) => {
  const { name } = files.find((file) => file.id === id);
  const newName = prompt("Rename file name:", name);

  if (newName === null || newName === "") return;

  files = files.map((file) =>
    file.id === id
      ? {
          id,
          name: newName,
        }
      : file
  );

  renderFiles();
};

const deleteFile = (id) => {
  files = files.filter((file) => file.id !== id);

  renderFiles();
};

const handleContextClick = (e) => {
  switch (e.target.dataset.name) {
    case "create":
      createFile();
      break;
    case "rename":
      renameFile(currentFile);
      break;
    case "delete":
      deleteFile(currentFile);
      break;

    default:
      return;
  }
};

// =========== RUN ===========

refs.contextMenu.addEventListener("click", handleContextClick);
refs.wrapper.addEventListener("contextmenu", handleRightClick);
refs.wrapper.addEventListener("click", handleLeftClick);

renderFiles();
