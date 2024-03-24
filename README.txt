# 
- devDependencies: Hỗ trợ trong quá trình phát triển phần mềm.
- dependencies: Cần cho quá trình khi build lên production.

# Folder Components là folder cho phép bất kỳ folder nào cũng truy cập vào được

# styled-components: css in js
- Cách tạo 1 component chỉ quản style
- Cách truyền và nhận props của component
- Typescript: Định nghĩa props cho component

# Memo
- memo: (HOC)
- useMemo: 
- useCallback:

# Vấn đề:
- Mỗi lần gọi api get profile là chúng ta lại lưu lên trên redux
- Gọi 2 lần thì cần connect để lưu lên trên redux 2 lần

# Cách giải quyết:
- middle ware redux: thunk