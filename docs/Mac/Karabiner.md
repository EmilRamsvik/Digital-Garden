---
Finished: false
tags:
  - article
  - keyboard-maestro
  - keyboard-shortcuts
  - alfred
  - hotkeys
  - goku
  - productivity
  - productivity-hack
  - keyboard
created: 2023-06-21T04:24
updated: 2024-04-01T09:36
---
# Karabiner
Karabiner is a powerful and customizable keyboard remapping tool designed specifically for macOS. It allows users to modify the behavior of their keyboards by remapping keys, creating shortcuts, and implementing various keyboard modifications. With Karabiner, users can redefine keys to perform different functions or assign complex combinations of keys to trigger specific actions. This enables users to personalize their keyboard layout and streamline their workflow, making it easier and more efficient to navigate through applications and perform tasks.

## Goku
[Goku](https://github.com/yqrashawn/GokuRakuJoudo) is a way of configuring the keyboard using the ```karabiner.edn``` config. It is nice once you get the hang of it. 
- I kinda wish there was a way of doing the configs on a YAML format instead, I just had a feeling that this would be easier. 
- It took me a while to use Goku and the ```karabiner.edn``` file properly, I think a big mistake was to copy the entire contents of other people, as then it became a big mess. 
- A good way is to start with a simple keybinding, such as caps-lock, and then expand gradually. 

## Tips
Start simple; use only one hotkey and add on functionality. I used caps lock as my first "Hotkey" and added more and more as time passes. This is helpful for primarily three reasons:
1. It is easier to get started; if you start by copying lots of configs, you might end up debugging, which is not fun, instead of exploring, which is fun. 
2. You only add what you want or feel you want to have. 
3. You understand more of what you add; you get intrinsic knowledge of all the configs and will not be confused by weird behavior from other configs. 

However, I recommend starting the journey by reading other documentation regarding the configs. 
[Here is my Karabiner.edn file](https://github.com/EmilRamsvik/dotfiles/blob/master/.config/karabiner.edn)
# Links
- [Interesting Karabiner Config](https://gist.github.com/kaushikgopal/ff7a92bbc887e59699c804b59074a126)
- [Very Well documented Karabiner.edn file](https://gist.github.com/kaushikgopal/ff7a92bbc887e59699c804b59074a126?permalink_comment_id=3487260)
- [John Nyquist on Karabiner](https://johnlindquist.com/customize-karabiner-with-goku/)
- [swyx on karabiner elements](https://dev.to/swyx/notes-on-karabiner-elements-from-john-lindquist-4cmo)¨
- [Remapping arrows](http://vadimpleshkov.me/notes/all/remapping-arrows/) -> [Github](https://github.com/vdmp/karabinersetup)

# Thoughts 
- I find it quite hard to understand in a layer how you most effectively can map some commands ¨
- Search [GitHub]( [https://github.com/search?l=&q=filename%3Akarabiner.edn&type=Code](https://github.com/search?l=&q=filename%3Akarabiner.edn&type=Code)) for karabiner.edn inspiration.

