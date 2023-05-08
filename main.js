for (i = 0; i < 15; i++) {
  let img = document.createElement("img");
  img.id = `puzzel${i + 1}`;
  img.className = `puzzle`;
  let paths = document.querySelectorAll("path");

  let puzzles = document.querySelectorAll(".puzzle");
  paths.forEach((n) => {
    if (window.innerWidth < 595.28) {
      n.setAttribute("transform", `scale(${window.innerWidth / 595.28})`);
    }
  });
  puzzles.forEach((n) => {
    if (window.innerWidth < 595.28) {
      n.setAttribute("width", `${(window.innerWidth / 595.28) * 595.28}px`);
      n.setAttribute("height", `${(window.innerWidth / 595.28) * 546}px`);
      n.setAttribute("style", `${(window.innerWidth / 595.28) * 546}px`);
    }
  });

  img.setAttribute("src", "./Julia.jpg");
  img.setAttribute("width", "595.28");
  img.setAttribute("height", "546");
  let container = document.getElementById("container");
  container.appendChild(img);
}

let image = document.querySelectorAll("img");
image.forEach((n) => {});

for (let i = 0; i < 16; i++) {
  let idName = "puzzel" + (i + 1);
  $(function () {
    $(`#${idName}`).draggable();
  });
}

document
  .getElementById(`puzzel1`)
  .setAttribute(
    `style`,
    `left: ${(window.innerWidth / 595.28) * -90}px; top: ${
      (window.innerWidth / 595.28) * -216
    }px;`
  );
document
  .getElementById(`puzzel2`)
  .setAttribute(`style`, `left: 144px; top: 368px;`);
document
  .getElementById(`puzzel3`)
  .setAttribute(`style`, `left: -301px; top: 26px;`);
document
  .getElementById(`puzzel4`)
  .setAttribute(`style`, `left: 204px; top: 130px;`);
document
  .getElementById(`puzzel5`)
  .setAttribute(`style`, `left: 5px; top: 146px;`);
document
  .getElementById(`puzzel6`)
  .setAttribute(`style`, `left: 45px; top: 215px;`);
document
  .getElementById(`puzzel7`)
  .setAttribute(`style`, `left: 276px; top: -79px;`);
document
  .getElementById(`puzzel8`)
  .setAttribute(`style`, `left: -253px; top: -62px;`);
document
  .getElementById(`puzzel9`)
  .setAttribute(`style`, `left: -39px; top: 301px;`);
document
  .getElementById(`puzzel10`)
  .setAttribute(`style`, `left: -155px; top: 146px;`);
document
  .getElementById(`puzzel11`)
  .setAttribute(`style`, `left: 136px; top: 191px;`);
document
  .getElementById(`puzzel12`)
  .setAttribute(`style`, `left: -3px; top: 383px;`);
document
  .getElementById(`puzzel13`)
  .setAttribute(`style`, `left: -298px; top: 453px;`);
document
  .getElementById(`puzzel14`)
  .setAttribute(`style`, `left: 8px; top: -15px;`);
document
  .getElementById(`puzzel15`)
  .setAttribute(`style`, `left: -20px; top: 422px;`);

if (innerWidth < 595.28) {
  document
    .getElementById(`puzzel1`)
    .setAttribute(
      `style`,
      `left: ${(window.innerWidth / 595.28) * -90}px; top: ${
        (window.innerWidth / 595.28) * -216
      }px;`
    );
  document
    .getElementById(`puzzel2`)
    .setAttribute(
      `style`,
      `left: ${(window.innerWidth / 595.28) * 144}px; top: ${
        (window.innerWidth / 595.28) * 368
      }px;`
    );
  document
    .getElementById(`puzzel3`)
    .setAttribute(
      `style`,
      `left: ${(window.innerWidth / 595.28) * -301}px; top: ${
        (window.innerWidth / 595.28) * 26
      }px;`
    );
  document
    .getElementById(`puzzel4`)
    .setAttribute(
      `style`,
      `left: ${(window.innerWidth / 595.28) * 204}px; top: ${
        (window.innerWidth / 595.28) * 130
      }px;`
    );
  document
    .getElementById(`puzzel5`)
    .setAttribute(
      `style`,
      `left: ${(window.innerWidth / 595.28) * 5}px; top: ${
        (window.innerWidth / 595.28) * 146
      }px;`
    );
  document
    .getElementById(`puzzel6`)
    .setAttribute(
      `style`,
      `left: ${(window.innerWidth / 595.28) * 45}px; top: ${
        (window.innerWidth / 595.28) * 215
      }px;`
    );
  document
    .getElementById(`puzzel7`)
    .setAttribute(
      `style`,
      `left: ${(window.innerWidth / 595.28) * 276}px; top: ${
        (window.innerWidth / 595.28) * -79
      }px;`
    );
  document
    .getElementById(`puzzel8`)
    .setAttribute(
      `style`,
      `left: ${(window.innerWidth / 595.28) * -253}px; top: ${
        (window.innerWidth / 595.28) * -62
      }px;`
    );
  document
    .getElementById(`puzzel9`)
    .setAttribute(
      `style`,
      `left: ${(window.innerWidth / 595.28) * -39}px; top: ${
        (window.innerWidth / 595.28) * 301
      }px;`
    );
  document
    .getElementById(`puzzel10`)
    .setAttribute(
      `style`,
      `left: ${(window.innerWidth / 595.28) * -155}px; top: ${
        (window.innerWidth / 595.28) * 146
      }px;`
    );
  document
    .getElementById(`puzzel11`)
    .setAttribute(
      `style`,
      `left: ${(window.innerWidth / 595.28) * 136}px; top: ${
        (window.innerWidth / 595.28) * 191
      }px;`
    );
  document
    .getElementById(`puzzel12`)
    .setAttribute(
      `style`,
      `left: ${(window.innerWidth / 595.28) * -3}px; top: ${
        (window.innerWidth / 595.28) * 383
      }px;`
    );
  document
    .getElementById(`puzzel13`)
    .setAttribute(
      `style`,
      `left: ${(window.innerWidth / 595.28) * -298}px; top: ${
        (window.innerWidth / 595.28) * 453
      }px;`
    );
  document
    .getElementById(`puzzel14`)
    .setAttribute(
      `style`,
      `left: ${(window.innerWidth / 595.28) * 8}px; top: ${
        (window.innerWidth / 595.28) * -15
      }px;`
    );
  document
    .getElementById(`puzzel15`)
    .setAttribute(
      `style`,
      `left: ${(window.innerWidth / 595.28) * -20}px; top: ${
        (window.innerWidth / 595.28) * 422
      }px;`
    );
}
