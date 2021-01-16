"use strict";

const wrapper = document.querySelector(".wrapper");
const filesContainer = document.querySelector(".containerFiles");
const renameAndDeleteItem = document.querySelector(
  ".sectionRenameAndDeleteItem"
);
const createItem = document.querySelector(".sectionCreateItem");
const btnCreate = document.querySelector(".btnCreate");
const btnRename = document.querySelector(".btnRename");
const btnDelete = document.querySelector(".btnDelete");
const files = [];

const updateContent = () => {
  let content = "";

  files.map((file) => {
    content += `<span>${file}</span>`;
  });
  filesContainer.innerHTML = content;
};

const handler = (event) => {
  createItem.setAttribute(
    "style",
    `display:flex; margin-top:${event.y - 20}px; margin-left:${event.x - 20}px;`
  );
};

const createFile = () => {
  const createFile = prompt("Please enter name");
  if (createFile === "") {
    alert("You have entered wrong filename");
  } else if (!createFile) {
    alert("Create file canceled");
  } else {
    files.push(createFile);
    updateContent();
  }
};
console.log(files);

wrapper.addEventListener("click", handler);
btnCreate.addEventListener("click", createFile);
