interface Props {
  text: string;
  onClick?: () => void;
}

export default function Button({ text, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
    >
      {text}
    </button>
  );
}
