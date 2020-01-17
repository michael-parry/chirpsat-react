# ChirpSAT

Simple satellite programming for radio amateurs.

## What is it?

ChirpSAT is a web tool built for the amateur radio satellite
community. Its primary function is to generate channels with
doppler shift correction that can be easily imported into CPS and programmed to a radio.

## How do I use it?

ChirpSAT is easy to use, form the home page select your radio. This will load options specific to your radio and ensure that the .csv generated will be usable in your CPS.

If you've never programmed your radio before, check out [Powerwerx](https://powerwerx.com/help/two-way-radios) or [BridgeCom Systems](https://www.bridgecomsystems.com/pages/support) for support on your radio and a download link to the the programming software you need.

Alteranitevly, you can use third-party software like [CHIRP](https://chirp.danplanet.com/projects/chirp/wiki/Home), but proceed at your own risk, the use ot third-party software introduces its own risks.

With your radio selected, choose wtich satellites you would like to create channels for and program to your radio.

Next, choose wtich channel you would like to start with. If you
already have channels programmed into your radio, you may want to
start with a later, empty, channel. You can always change your
channel numbering on your own either with a .csv editor like Excel
or within your CPS.

Satellite up-link and down-link data for the satellites you've
selected will be imported, which you can manually override by
selecting the satellite dropdown, and choosing edit.

Choose the power level you would like to use when transmitting. It
is always recommended that you use the least amount of power
needed to make a contact, which for satellites can be as little as
2 watts.

The last step is to configure the naming convention of your
channels. By default, channels will be named by the satellite
name, and their channel offset relative to the center channel.

```
AO-92 (-3)
```

You can change the naming convention using `#keywords#. The default naming is:

```
#satellite_name# (#channel_offset#)
```

Lastly, you'll export your channels into a .csv file wtich you can import into the CPS of you choosing. If you've already created channels, you may want to export the existing channels into a .csv, and combine the two by copy pasting from on to the other, then import the new file.

## How does it work?

Satellite data is acquired from
[SatNOGS DB](https://db.satnogs.org/), and the up-link
and down-link frequencies are used to automatically generate
channels with doppler shift correction for easy programming.

ChirpSAT is built using Javascript, styled with [Bootstrap](https://www.getbootstrap.com/), and uses icons from [Font Awesome](https://www.fontawesome.com/).

## Who made it?

ChirpSAT was created by Michael Parry [KE8KDF](https://www.qrz.com/db/KE8KDF). It was created to simplify the process of programming HTs that use a CPS which are often frustrating and tediuos to use.

## How can I help?

If you're interested in helping with ChirpSAT, send an email to [ke8kdf@yahoo.com](mailto:ke8kdf@yahoo.com).
