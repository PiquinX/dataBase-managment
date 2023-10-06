export function Campo ({ children, styles }) {
  return (
    <p className={`${styles} bg-transparent cursor-default w-full px-1 md:px-2 py-2 border h-6 sm:h-7 md:h-9 overflow-hidden duration-75 hover:min-w-max hover:z-10 hover:bg-[#3f577c]`}>
      {children}
    </p>
  )
}
