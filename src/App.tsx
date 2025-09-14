import { PauseIcon, PlayIcon, SkipBackIcon, SkipForwardIcon } from 'lucide-react';
import { Input, InputAdornment, InputInput } from './components/ui/input';
import { InputPassword, InputPasswordAdornmentToggle, InputPasswordInput } from './components/ui/input-password';
import { NumberField, NumberFieldScrubArea } from './components/ui/number-field';
import { ToastProvider } from './components/ui/toast';
import AutocompleteDemo from './examples/autocomplete-demo';
import { NavigationMenuDemo } from './examples/navigation-menu-demo';
import { SelectDemo } from './examples/select-demo';
import { SheetDemo } from './examples/sheet-demo';
import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

function App() {
  return (
    <ToastProvider>
      <section>
        <Input>
          <InputAdornment>R$</InputAdornment>
          <InputInput placeholder="junwen-k" />
        </Input>
        <NavigationMenuDemo />
        <SheetDemo />

        <AlertDialog>
          <AlertDialogTrigger
            render={(props) => (
              <Button {...props} variant="destructive">
                Delete Post
              </Button>
            )}
          />
          <AlertDialogContent className="space-y-4">
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. Your post will be permanently deleted.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogClose
                render={(props) => (
                  <Button {...props} variant="outline">
                    Cancel
                  </Button>
                )}
              />
              <Button variant="destructive">Delete</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <Dialog>
          <DialogTrigger render={(props) => <Button {...props}>Privacy Policy</Button>} />
          <DialogContent className="sm:w-full">
            <DialogHeader>
              <DialogTitle>Privacy Policy</DialogTitle>
              <DialogDescription>Please read our privacy policy carefully.</DialogDescription>
            </DialogHeader>
            <DialogBody>
              <AutocompleteDemo />
              <InputPassword>
                <InputPasswordInput placeholder="Password" />
                <InputPasswordAdornmentToggle />
              </InputPassword>
              <SelectDemo />
              <DropdownMenu>
                <DropdownMenuTrigger render={(props) => <Button {...props}>Controls</Button>} />
                <DropdownMenuContent>
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>Playback</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <PlayIcon />
                      Play
                      <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <PauseIcon />
                      Pause
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <SkipBackIcon />
                      Previous
                      <DropdownMenuShortcut>⌘[</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <SkipForwardIcon />
                      Next
                      <DropdownMenuShortcut>⌘]</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <SkipForwardIcon />
                      Next
                      <DropdownMenuShortcut>⌘]</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Add to Playlist</DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Jazz</DropdownMenuItem>
                      <DropdownMenuItem>Rock</DropdownMenuItem>
                      <DropdownMenuItem>Pop</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                </DropdownMenuContent>
              </DropdownMenu>
              <NumberField
                className="mx-auto"
                format={{ minimumFractionDigits: 0, maximumFractionDigits: 0, useGrouping: true }}
                defaultValue={5}
                min={0}
                smallStep={1}
                max={100000}
                step={1.0}
              >
                <NumberFieldScrubArea />
              </NumberField>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies, odio quis blandit vestibulum, orci
              elit suscipit urna, at lobortis arcu enim vel purus. Maecenas luctus sem dui, lobortis dignissim enim
              consequat in. Nullam a volutpat purus. Aenean pellentesque eros nec rutrum suscipit. Fusce ac lectus
              volutpat, feugiat nulla et, suscipit dui. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Ut maximus, risus et convallis placerat, risus urna feugiat neque, in
              vestibulum leo arcu vitae justo. Duis magna mi, maximus at neque sed, tempor congue ligula. In iaculis
              metus nec euismod egestas. Donec id porttitor nulla. Donec feugiat iaculis lacus, ut elementum dui
              faucibus sed. Sed ut ipsum non tellus dignissim accumsan. Vivamus luctus malesuada lacus sed dictum.
              <br />
              <br />
              Sed consectetur nibh mollis, ornare magna et, dictum tellus. Nam viverra dui a enim iaculis, sed blandit
              orci consectetur. Maecenas et nisi eleifend velit pretium eleifend sit amet eget nisl. Vestibulum eget
              ipsum semper purus pulvinar iaculis. Sed ut odio eu felis porttitor ultrices eu sed odio. Nullam lorem
              sapien, pellentesque convallis libero vel, tempus accumsan nisi. Morbi efficitur ex vitae felis luctus
              cursus. Suspendisse nibh neque, gravida sed elementum ullamcorper, gravida in nisi. Donec et luctus metus.
              Fusce sed est dictum, imperdiet nisi eu, suscipit odio. In id enim at tortor malesuada vulputate eu eu
              sem. Mauris blandit faucibus euismod.
              <br />
              <br />
              Curabitur quam tortor, tristique euismod finibus viverra, bibendum sit amet nisl. Nulla lobortis pharetra
              mauris, ac semper urna tempor et. Maecenas enim magna, suscipit nec metus id, ornare pulvinar dolor. Cras
              rhoncus ante sit amet tempus luctus. Donec in nisl a dolor auctor tincidunt. Cras at arcu tortor.
              Pellentesque ante felis, convallis sit amet erat id, consectetur consequat sapien. Aliquam volutpat velit
              in est bibendum, vestibulum commodo leo interdum. Integer sodales ex eu tempus faucibus. Vestibulum
              ultricies erat vel leo accumsan posuere. Cras commodo felis vitae lacus suscipit, in tristique lectus
              venenatis. Sed et nibh urna. Praesent vitae eleifend turpis. Fusce sit amet pretium lorem, in tempus elit.
              Etiam at ornare est. Aenean felis arcu, fermentum scelerisque nibh at, lacinia sagittis neque.
              <br />
              <br />
              Curabitur quam tortor, tristique euismod finibus viverra, bibendum sit amet nisl. Nulla lobortis pharetra
              mauris, ac semper urna tempor et. Maecenas enim magna, suscipit nec metus id, ornare pulvinar dolor. Cras
              rhoncus ante sit amet tempus luctus. Donec in nisl a dolor auctor tincidunt. Cras at arcu tortor.
              Pellentesque ante felis, convallis sit amet erat id, consectetur consequat sapien. Aliquam volutpat velit
              in est bibendum, vestibulum commodo leo interdum. Integer sodales ex eu tempus faucibus. Vestibulum
              ultricies erat vel leo accumsan posuere. Cras commodo felis vitae lacus suscipit, in tristique lectus
              venenatis. Sed et nibh urna. Praesent vitae eleifend turpis. Fusce sit amet pretium lorem, in tempus elit.
              Etiam at ornare est. Aenean felis arcu, fermentum scelerisque nibh at, lacinia sagittis neque.
            </DialogBody>
            <DialogFooter>
              <Button className="w-full">Accept</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>
    </ToastProvider>
  );
}

export default App;
