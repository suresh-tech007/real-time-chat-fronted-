export const funEmojis = [
  "😀", // Grinning Face
  "😂", // Face with Tears of Joy
  "🤣", // Rolling on the Floor Laughing
  "😉", // Winking Face
  "😎", // Smiling Face with Sunglasses
  "😍", // Smiling Face with Heart-Eyes
  "😘", // Face Blowing a Kiss
  "😴", // Sleeping Face
  "😏", // Smirking Face
  "😢", // Crying Face
  "🤔", // Thinking Face
  "👍", // Thumbs Up
  "👎", // Thumbs Down
  "🔥", // Fire
  "👌", // Pile of Poo
];

export const getRandomEmoji = () => {
  return funEmojis[Math.floor(Math.random() * funEmojis.length)];
};
