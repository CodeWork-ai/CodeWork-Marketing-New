import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { shuffle } from "lodash";
import styled from "styled-components";

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300
};

const Ul = styled.ul`
  display: flex;
  
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Li = styled(motion.li)`
  border-radius: 10px;
`;

export const Example = () => {
  const [items, setItems] = useState(initialItems);
  const [randomIndex, setRandomIndex] = useState(null);
  const [shuffled, setShuffled] = useState(false);

  useEffect(() => {
    setTimeout(() => {setItems(shuffle(items))
        setShuffled(false)
    }, 6000);
    setTimeout(() => setShuffled(true), 1000);
    const shuffledItems = shuffle(items);
    setRandomIndex(Math.floor(Math.random() * shuffledItems.length)); 
  }, [items]);

  return (
    <div className="flex bg-black bg-opacity-30 items-center justify-center py-16">
      <Ul className="flex items-center justify-center gap-8">
        {items.map(({ title, description, background }, index) => (
          <Li
            key={title}
            layout
            transition={spring}
            className="bg-black bg-opacity-40 w-72 h-80"
            style={{
              scale: index === randomIndex &&shuffled ? 1.2 : 1, // Updated scale directly on style
            }}
          >
            <h3>{title}</h3>
            <h1>{index}</h1>
            <p>{description}</p>
          </Li>
        ))}
      </Ul>
    </div>
  );
};

const initialItems = [
  {
    title: "Color 1",
    description: "This is the first color in the list.",
    background: "#FF008C"
  },
  {
    title: "Color 2",
    description: "This is the second color in the list.",
    background: "#D309E1"
  },
  {
    title: "Color 3",
    description: "This is the third color in the list.",
    background: "#9C1AFF"
  },
  {
    title: "Color 4",
    description: "This is the fourth color in the list.",
    background: "#7700FF"
  },
  {
    title: "Color 5",
    description: "This is the third color in the list.",
    background: "#9C1AFF"
  },
  {
    title: "Color 6",
    description: "This is the fourth color in the list.",
    background: "#7700FF"
  }
];
