//const list = document.querySelector(".list");

const data = [
  {
    type: "ul",
    props: {
      children: [
        {
          type: "li",
          props: {
            children: "Hello",
          },
        },
        {
          type: "ul",
          props: {
            children: [
              {
                type: "li",
                props: {
                  children: "World",
                },
              },
            ],
          },
        },
      ],
    },
  },
];
let makeList = ({ type, props }) => {
  if (props) {
    return [type, makeList(props)];
  } else {
    return [type];
  }
};
console.log(makeList(...data));

