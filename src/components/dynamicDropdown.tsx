import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

// ✅ Type for child item
type ChildItem = {
  label: string;
  route: string;
};

// ✅ Type for parent item
type DropdownItemType = {
  label: string;
  children?: ChildItem[];
};

// ✅ Props type
type DropdownProps = {
  item: DropdownItemType;
};

const Dropdown: React.FC<DropdownProps> = ({ item }) => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Parent */}
      <motion.div
       whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
      
      className="px-5 py-2 rounded-full bg-[#2F7F78] text-white text-sm font-semibold whitespace-nowrap shadow-md hover:bg-[#fbc02d] hover:text-[#002050] transition-all duration-300"
>
        {item.label}
      </motion.div>

      {/* Child */}
      {open && item.children && (
        <div className="absolute top-full left-0 bg-white shadow-lg rounded mt-1 min-w-[180px] z-50">
          {item.children.map((child, index) => (
            <div
              key={index}
              onClick={() => router.push(child.route)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {child.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;