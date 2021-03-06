import TileCard from './tileCard';
import A from '../tileImages/Tile_A.png';
import B from '../tileImages/Tile_B.png';
import C from '../tileImages/Tile_C.png';
import D from '../tileImages/Tile_D.png';
import E from '../tileImages/Tile_E.png';
import F from '../tileImages/Tile_F.png';
import G from '../tileImages/Tile_G.png';
import H from '../tileImages/Tile_H.png';
import I from '../tileImages/Tile_I.png';
import J from '../tileImages/Tile_J.png';
import K from '../tileImages/Tile_K.png';
import L from '../tileImages/Tile_L.png';
import M from '../tileImages/Tile_M.png';
import N from '../tileImages/Tile_N.png';
import O from '../tileImages/Tile_O.png';
import P from '../tileImages/Tile_P.png';
import Q from '../tileImages/Tile_Q.png';
import R from '../tileImages/Tile_R.png';
import S from '../tileImages/Tile_S.png';
import T from '../tileImages/Tile_T.png';
import U from '../tileImages/Tile_U.png';
import V from '../tileImages/Tile_V.png';
import W from '../tileImages/Tile_W.png';
import X from '../tileImages/Tile_X.png';
import Y from '../tileImages/Tile_Y.png';
import Z from '../tileImages/Tile_Z.png';
import a from '../tileImages/Tile_sa (1).png';
import x from '../tileImages/Tile_sx (1).png';
import c from '../tileImages/Tile_sc (1).png';
import e from '../tileImages/Tile_se (1).png';
import g from '../tileImages/Tile_sg (1).png';
import i from '../tileImages/Tile_si (1).png';
import n from '../tileImages/Tile_sn (1).png';
import o from '../tileImages/Tile_so (1).png';
import s from '../tileImages/Tile_ss (1).png';
import t from '../tileImages/Tile_st (1).png';
import one from '../tileImages/Tile_1.png';
import zero from '../tileImages/Tile_0.png'


import '../css/tiles.css';

export default function TilesComp(){
    return(
    <div className="tiles">

    <h1 className="tiles__title">Tiles</h1>
    <div className="tiles__tiles">
        <TileCard 
            image={A}
            alter="A"
            tileLetter="A"
            musketeer="Weakness Orb"
            ranger="Piercing Arrow"
            runemage="Frostbolt 1, 2, and 3"
            warrior="Wound"
            paladin="Ground Slam"
            shaman="Set totem frost, set totem pulse"
            bard=""
            scoundrel="Burn Card"
            other=""
            ore="Knight's Tear(1), Nahomium(1), Obsidian(1), and Grathorp(1)"
        />
         <TileCard 
            image={B}
            alter="B"
            tileLetter="B"
            ore="Obsidian(1), Grathorp(1), Linstanium(1), and Nahomium(1)"
        />
         <TileCard 
            image={C}
            alter="C"
            tileLetter="C"
            musketeer="Cure wounds orb"
            ore="Nahomium(1), Grathorp(1), and Cryejil(2)"
        />
         <TileCard 
            image={D}
            alter="D"
            tileLetter="D"
            runemage="Arcane ray"
            warrior="Cleave"
            shaman="Lighting orb"
            scoundrel="Spread flint, spread frost"
            ore="Cryejil(2) and Knight's tear(2)"
        />
         <TileCard 
            image={E}
            alter="E"
            tileLetter="E"
            ore="Linstanium(2), Knight's tear(1), and Cryejil(1)"
        />
         <TileCard 
            image={F}
            Flter="F"
            tileLetter="F"
            ore="Obsidian(2) and Linstanium(2)"
        />
         <TileCard 
            image={G}
            alter="G"
            tileLetter="G"
            ore="Obsidian(1), Nahomium(1), Knight's tear(1), and Grathorp(1)"
        />
         <TileCard 
            image={H}
            alter="H"
            tileLetter="H"
            ore="Obsidian(1), Knight's tear(2), and Linstanium(1)"
        />
        <TileCard 
            image={I}
            alter="I"
            tileLetter="I"
            other="Enemy AoE ticks?"
            ore="Linstanium(1), Cryejil(2), and Grathorp(1)"
        />
         <TileCard 
            image={J}
            alter="J"
            tileLetter="J"
            musketeer="Decurse orb, shield orb"
            runemage="Pushback"
            warrior="Provoke"
            paladin="Libram of Power"
            shaman="Stun orb"
            bard="Mallet throw"
            scoundrel="Card of light"
            ore="Obsidian(1), Linstanium(2), and Nahomium"
        />
         <TileCard 
            image={K}
            alter="K"
            tileLetter="K"
            ore="Nahomium(1), Knight's tear(1), Obsidian(1), and Linstanium"
        />
         <TileCard 
            image={L}
            alter="L"
            tileLetter="L"
            ore="Grathorp(1), Nahomium(1), Cryejil(1), and Linstanium(1)"
        />
         <TileCard 
            image={M}
            alter="M"
            tileLetter="M"
            musketeer="Normal shot"
            ranger="Normal arrow"
            runemage="two hits per second"
            warrior="slow (two hits per second)"
            other="two hits per second"
            ore="Nahomium(2), Cryejil(1), Obsidian(1)"
        />
         <TileCard 
            image={N}
            alter="N"
            tileLetter="N"
            other="Medium (approx. 3 hits per second)"
            ore="Cryejil(1), Obdidian(1), Nahomium(1), and Knight's tear(1)"
        />
         <TileCard 
            image={O}
            alter="O"
            tileLetter="O"
            ore="Grathorp(1), Cryejil(2), and Nahomium(1)"
        />
         <TileCard 
            image={P}
            alter="A"
            tileLetter="A"
            other="Fast(4 hits per second)"
            ore="Nahomium(2), Obsidian(1), Linstanium(1)"
        />
         <TileCard 
            image={Q}
            alter="Q"
            tileLetter="Q"
            other="Fastest(5 hits per second)"
            ore="Knight's tear(1), Nahomium(2), and Obsidian(1)"
        />
         <TileCard 
            image={R}
            alter="R"
            tileLetter="R"
            ore="Cryejil(1), Grathorp(2), and Knight's tear(1)"
        />
         <TileCard 
            image={S}
            alter="S"
            tileLetter="S"
            ore="Cryejil(3) and Obsidian(1)"
        />
         <TileCard 
            image={T}
            alter="T"
            tileLetter="T"
            other="Healing recieved"
            ore="Linstanium(1), Knight's tear(2), and Obsidian(1)"
        />
         <TileCard 
            image={U}
            alter="U"
            tileLetter="U"
            runemage="Firebolt 1, 2, and 3"
            paladin="Empowered Attack (including thrown)"
            shaman="Fireball orb"
            bard="Justice crescendo(per bolt), Harm crescendo"
            scoundrel="Card of flame"
            ore="Cryejil(1), Grathorp(1), and Obsidian(2)"
        />
         <TileCard 
            image={V}
            alter="V"
            tileLetter="V"
            ore="Linstanium(2), Knight's tear(1), and Cryejil(1)"
        />
         <TileCard 
            image={W}
            alter="W"
            tileLetter="W"
            other="Physical attact by an enemy"
            ore="Nahomium(2), Obsidian(1), and Linstanium(1)"
        />
         <TileCard 
            image={X}
            alter="X"
            tileLetter="X"
            ore="Knight's tear(1) and Grathorp"
        />
         <TileCard 
            image={Y}
            alter="Y"
            tileLetter="Y"
            other="Attack by and enemy AoE"
            ore="Grathorp(2), Cryejil(1), and Nahomium(1)"
        />
         <TileCard 
            image={Z}
            alter="Z"
            tileLetter="Z"
            ore="Grathorp(1), Nahomium(1), and Linstanium(2)"
        />
         <TileCard 
            image={a}
            alter="a"
            tileLetter="a"
            bard="Mid-range pulse effect"
            scoundrel="Spread poison"
           
        />
         <TileCard 
            image={x}
            alter="x"
            tileLetter="x"
            other="Attack by multiple enemies"
            ore="Obsidian(3) and Cryejil(1)"
        />
         <TileCard 
            image={c}
            alter="c"
            tileLetter="c"
            ore="Cryejil(2), Nahomium(1), and Grathorp(1)"
        />
         <TileCard 
            image={e}
            alter="e"
            tileLetter="e"
            other="Attack/kill multiple enemies"
            ore="Nahomium(3) and Cryejil"
        />
         <TileCard 
            image={g}
            alter="g"
            tileLetter="g"
            musketeer="Musketeer's default shot rate"
            runemage="Delay of less than 1.5 seconds between spells"
            other="Shortest delay"
            ore="Obsidian(2), Linstanium(1), and Grathorp(1)"
        />
         <TileCard 
            image={i}
            alter="i"
            tileLetter="i"
            other="Medium delay"
            ore="Knight's tear(1), Grathorp(1), Obsidian(1), and Linstanium(1)"
        />
         <TileCard 
            image={n}
            alter="n"
            tileLetter="n"
            bard="Default pulse time"
            other="Long delay"
            ore="Grathorp(1), Obsidian(1), Linstanium(1), and Cryejil(1)"
        />
         <TileCard 
            image={o}
            alter="o"
            tileLetter="o"
            musketeer="Poison orb"
            ranger="Poison arrow"
            runemage="Affliction 1, 2"
            warrior="Hamstring"
            shaman="Lava totem pulse"
            bard="Gentle healing pulse, justice pulse"
            scoundrel="Card of vines"
            ore="Nahomium(2), Grathorp(1), and Obsidian(1)"
        />
         <TileCard 
            image={s}
            alter="s"
            tileLetter="s"
            other="Second longest delay"
            ore="Knight's tear(1), Linstanium(1), Nahomium(1), and Obsidian(1)"
        />
         <TileCard 
            image={t}
            alter="t"
            tileLetter="t"
            other="Longest delay(6 seconds or start of combat"
            ore="Cryejil(3) and Grathorp(1)"
        />
         <TileCard
            image={zero}
            alter="0"
            tileLetter="0"
            other="Killing enemies"
            ore="Linstanium(1), Obsidian(2), and Nahomium(1)"
        />
         <TileCard 
            image={one}
            alter="1"
            tileLetter="1"
            other="Killing more than one enemy or close distance effect"
            ore="Nahomium(1), Linstanium(1), Obsidian(1), and Cryejil(1)"
        />
         
        </div>
    </div>
    
    )
}