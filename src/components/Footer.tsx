const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/50 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent mb-4 md:mb-0">
            LinkSmart Technologies LLC
          </div>
          <div className="text-center mb-4 md:mb-0">
            <p className="font-medium">Email us at</p>
            <p className="text-muted-foreground">linksmarttechlc@gmail.com</p>
          </div>
          <div className="text-muted-foreground text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} LinkSmart Technologies LLC. All rights reserved.</p>
            <p className="text-sm mt-1">Crafting innovative web solutions</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;