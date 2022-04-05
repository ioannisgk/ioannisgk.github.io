# this file is used by pungi to build the list of packages that end up in the ISO

repo --name=c8-base --mirrorlist=file:///home/vagrant/mirrorlist.txt
repo --name=c8-extras --mirrorlist=file:///home/vagrant/mirrorlist-extras.txt

#repo --name=c8-base --mirrorlist=https://mirrors.almalinux.org/mirrorlist/8/baseos
#repo --name=c8-updates --mirrorlist=https://mirrors.almalinux.org/mirrorlist/8/baseos

repo --name=epel --baseurl=http://download.fedoraproject.org/pub/epel/8/Everything/$basearch
repo --name=ebf  --baseurl=http://mirror.os.dev.ebf.de/ebfos/8/os/$basearch/

%packages
# all packages from core group
@core

# required packages that are not included in core group
kernel
grub2
lvm2
chrony
authconfig

# ebfos base packages
@ebfos-base

# some useful utils
@diagnostics-tools

# our products
@connectorx-server
@mida-server
@files-server
@ebf-print

# dependencies
cups
cups-filters
foomatic-filters
ghostscript

# customer specific packages
@fi-mymo-additons

# mariadb cluster requirements
mariadb-server
mariadb-client
galera

%end
